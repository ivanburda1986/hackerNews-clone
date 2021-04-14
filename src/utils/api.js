
export function fetchTopStories(){
  const endpoint = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  return fetch (endpoint)
    .then((res)=>res.json())
    .then((data)=>{
      if(!data.items){
        throw new Error.apply(data.message);
      }
      return data.items;
    })
}