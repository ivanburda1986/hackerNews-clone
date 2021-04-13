
//Action types
export const RECEIVE_DATA_TOPNEWS = 'RECEIVE_DATA_TOPNEWS';

//Actions
function receiveDataTopnews(topnews){
  return{
    type: RECEIVE_DATA_TOPNEWS,
    topnews,
  }
};

//Async actions
export function handleDataTopnews(){
  return (dispatch) => {
    console.log(dispatch(receiveDataTopnews({"name": "ivan"})));
    return dispatch(receiveDataTopnews({"name": "ivan"}))
  }
};




// fetch ('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
//       .then((res)=>res.json())
//       .then((data)=>{
//         console.log(data);
//         dispatch()
//       })