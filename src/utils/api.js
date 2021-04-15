const BASE_URL = 'https://hacker-news.firebaseio.com/v0'



function getStoryDetails(id){
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


function fetchTopStoriesIds(){
  const endpoint = `${BASE_URL}/topstories.json?print=pretty`;
  return fetch (endpoint)
    .then((response)=>{
      if(response.status >= 200 && response.status <= 299){
        return response.json();
      } else {
        console.log(response.status, response.statusText);
        throw Error (response.statusText);
      }
    })
    .then((topStoriesIds)=>{
      return topStoriesIds.slice(0,10);
    })
    .catch((error)=>{
      console.log(error);
    });
};

export function fetchTopStories(){
  return fetchTopStoriesIds()
    .then(ids=>Promise.all(ids.map((item)=>getStoryDetails(item))));
}


