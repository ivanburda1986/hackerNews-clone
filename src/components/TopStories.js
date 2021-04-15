import React from 'react';

import Loading from './Loading';
import Story from './Story';

import {fetchTopStories} from '../utils/api';






export default class TopStories extends React.Component{
  state = {
    topStories: [],
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
      console.log(data);
      this.setState({
        topStories: data,
        loading: false,
      })
    })
  }



  render(){
    let stories = this.state.topStories.map(story=>(
      <Story
      key={story.id}
      link={story.url}
      title={story.title}
      author={story.by}
      date={story.time}
      comments={story.kids}
      />
    ));
    if(stories.length===0){
      stories = <p>No stories yet</p>
    }



    if(this.state.loading){
      return <Loading text='Loading'/>
    }
    

    return(
      <React.Fragment>
        {stories}
      </React.Fragment>

    );
  }
};