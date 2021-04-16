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
    console.log(storyDetails);
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
      return storiesIds.slice(0,100);
    })
    .catch((error)=>{
      console.log(error);
    });
};

export async function fetchStories(type){
  const ids = await fetchStoriesIds(type);
  return await Promise.all(ids.map((item) => getStoryDetails(item)));
}


