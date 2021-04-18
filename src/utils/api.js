const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

//Get details of an item specified by the argument value
export function getItemDetails(id){
  const endpoint = `${BASE_URL}/item/${id}.json?print=pretty`;
  return fetch (endpoint)
  .then((response)=>{
    if(response.status >= 200 && response.status <= 299){
      return response.json();
    } else {
      throw Error (response.statusText);
    }
  })
  .then((itemDetails)=>{
      return itemDetails;
  })
  .catch((error)=>{
    console.log(error);
  });
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

//Fetch Top/New stories including their details
export async function fetchStories(type){
  const ids = await fetchStoriesIds(type);
  //Create a standalone function that will filter the stories to make sure all of them have all attributes which I need further on
  let cleanedStories = await Promise.all(ids.map((item) => getItemDetails(item)));
  cleanedStories = cleanedStories.filter((story)=>story!=null);
  return cleanedStories;
}

//Fetch Story including its all comments
export async function fetchCommentedStory(id){
  const storyDetails = await getItemDetails(id);
  let commentIds = [];
  let comments = [];
  if(storyDetails.kids !== undefined){
    commentIds = await Promise.all(storyDetails.kids.map((kid) => kid));
    comments = await Promise.all(commentIds.map((id)=>getItemDetails(id)))
    //Removing comments which have been deleted
    comments = comments.filter((story)=>!story.deleted);
  }
  return {storyDetails: storyDetails, storyComments: comments};
}
