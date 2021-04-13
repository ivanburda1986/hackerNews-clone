import {RECEIVE_DATA_TOPNEWS} from '../actions/topnews';

export default function topnews (state = [], action){
  switch(action.type){
    case RECEIVE_DATA_TOPNEWS:
      return action.topnews;
    
    default: return state;
  }
}