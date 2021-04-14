
export function fetchTopStories(){
  const endpoint = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  return fetch (endpoint)
    .then((response)=>{
      if(response.status >= 200 && response.status <= 299){
        return response.json();
      } else {
        console.log(response.status, response.statusText);
        throw Error (response.statusText);
      }
    })
    .then((jsonResponse)=>{
      return jsonResponse;
    })
    .catch((error)=>{
      console.log(error);
    });
}


