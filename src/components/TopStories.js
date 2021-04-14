import React from 'react';


import {fetchTopStories} from '../utils/api';

export default class TopStories extends React.Component{
  state = {
    topStories: {},
  }

  componentDidMount(){
  }

  getTopStories = () => {
    fetchTopStories()
    .then((data)=>{
      console.log(data);
    })
  }



  render(){

    return(
      <React.Fragment>
        <h1>Top stories...</h1>
        <button onClick={()=>this.getTopStories()}>Get stories</button>
      </React.Fragment>

    );
  }
};