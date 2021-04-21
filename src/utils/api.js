// https://developer.mozilla.org/en-US/docs/Web/API/Response
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

//Fetch Top/New stories including their details
export async function fetchStories(type){
  const ids = await fetchStoriesIds(type);
  //Create a standalone function that will filter the stories to make sure all of them have all attributes which I need further on
  let cleanedStories = await Promise.all(ids.map((item) => getItemDetails(item)));
  cleanedStories = cleanedStories.filter((story)=>story!=null);
  return cleanedStories;
};

//Fetch Story including its all comments
export async function fetchCommentedStory(id){
  const storyDetails = getItemDetails(id);
  let commentIds = [];
  let comments = [];
  if(storyDetails.kids !== undefined){
    commentIds = await Promise.all(storyDetails.kids.map((kid) => kid));
    comments = await Promise.all(commentIds.map((id)=>getItemDetails(id)))
    //Removing comments which have been deleted
    comments = comments.filter((story)=>!story.deleted);
  }
  return {storyDetails: storyDetails, storyComments: comments};
};


//Fetch IDs of Top/New stories based on the provided argument value
function fetchStoriesIds(type){
  const endpoint = `${BASE_URL}/${type}stories.json?print=pretty`;
  return fetch (endpoint)
    .then((response)=>{
      if(response.status >= 200 && response.status <= 299){
        return response.json();
      } else {
        //console.log(response.status, response.statusText);
        throw Error (response.statusText);
      }
    })
    .then((storiesIds)=>{
      return storiesIds.slice(0,50);
    })
    .catch((error)=>{
      console.log(error);
    });
};

//Get details of an item specified by the argument value
export async function getItemDetails(id){
  let response = await fetch (`${BASE_URL}/item/${id}.json?print=pretty`);
  if(!response.ok){
    throw new Error (`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

//Fetch user
export async function getUserData(id){
  let response = await fetch (`${BASE_URL}/user/${id}.json?print=pretty`);
  if(!response.ok){
    throw new Error (`HTTP error! status: ${response.status}`);
  }
  let userDetails = await response.json();
  return {id:userDetails.id, about: userDetails.about, created: userDetails.created, submitted: userDetails.submitted.slice(0,50), karma: userDetails.karma, about: userDetails.about };
};
