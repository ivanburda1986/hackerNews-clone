import React from 'react';

import Loading from '../../components/Loading/Loading';
import Story from '../../components/Story/Story';

import {fetchStories} from '../../utils/api';

export default class NewStories extends React.Component{
  state = {
    newStories: [],
    loading: false,
  }

  componentDidMount(){
    this.fetchNewStories();
  }

  fetchNewStories = () => {
    this.setState({
      loading: true,
    });

    fetchStories("new")
      .then((data)=>{
        this.setState({
          newStories: data,
          loading: false,
        })
      })
  };

  render(){
    let stories = [...this.state.newStories];
    stories = stories.map(story=>(
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
      return <Loading text="Loading"/>
    } 

    return(
      <React.Fragment>
        <ul>
          {stories}
        </ul>
      </React.Fragment>
    );
    
  };

}  