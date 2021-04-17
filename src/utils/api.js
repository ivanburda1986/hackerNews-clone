const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export function getStoryDetails(id){
  const endpoint = `${BASE_URL}/item/${id}.json?print=pretty`;
  return fetch (endpoint)
  .then((response)=>{
    if(response.status >= 200 && response.status <= 299){
      return response.json();
    } else {
      console.log(response.status, response.statusText);
      throw Error (response.statusText);
    }
  })
  .then((storyDetails)=>{
      return storyDetails;
  })
  .catch((error)=>{
    console.log(error);
  });
};


function fetchStoriesIds(type){
  const endpoint = `${BASE_URL}/${type}stories.json?print=pretty`;
  return fetch (endpoint)
    .then((response)=>{
      if(response.status >= 200 && response.status <= 299){
        return response.json();
      } else {
        console.log(response.status, response.statusText);
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

export async function fetchStories(type){
  const ids = await fetchStoriesIds(type);
  //Create a standalone function that will filter the stories to make sure all of them have all attributes which I need further on
  let cleanedStories = await Promise.all(ids.map((item) => getStoryDetails(item)));
  cleanedStories = cleanedStories.filter((story)=>story!=null);
  console.log(cleanedStories);
  return cleanedStories;
}
