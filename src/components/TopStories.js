import React from 'react';

import Loading from './Loading';
import {fetchTopStories} from '../utils/api';









export default class TopStories extends React.Component{
  state = {
    topStories: {},
    loading: false,
  }

  componentDidMount(){
    this.fetchTopStories();
  }

  fetchTopStories = () => {
    this.setState({
      loading: true,
    })
    fetchTopStories()
    .then((data)=>{
      this.setState({
        topStories: data,
        loading: false,
      })
    })
  }

  render(){

    if(this.state.loading){
      return <Loading text='Loading'/>
    }

    return(
      <React.Fragment>
        <h1>Top stories...</h1>
        <button onClick={()=>this.fetchTopStories()}>Get stories</button>
      </React.Fragment>

    );
  }
};