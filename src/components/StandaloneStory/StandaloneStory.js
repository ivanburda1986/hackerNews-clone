import React from 'react';
import queryString from 'query-string';

import {getStoryDetails} from '../../utils/api';

import classes from './StandaloneStory.module.css';

import Loading from '../Loading/Loading';
import StoryMetadata from '../StoryMetadata/StoryMetadata';
import Comments from '../../containers/Comments/Comments';

export default class StandaloneStory extends React.Component{
  state = {
    story: [],
    loading: false,
  }

  componentDidMount(){
    const id = queryString.parse(this.props.location.search);
    this.getStory(id.id);
  }

  getStory = (id) => {
    this.setState({
      loading: true,
    });
    getStoryDetails(id)
      .then((data)=>{
        this.setState({
          story: data,
          loading: false,
        })
      })
  }

  render(){
    if(this.state.loading){
      return <Loading text="Loading"/>;
    } else 
    
    return(
      <React.Fragment>
        <h1 className={classes.Title}>{this.state.story.title}</h1>
        <StoryMetadata by={this.state.story.by} time={this.state.story.time} commentCount={this.state.story.descendants}/>
        <div className={classes.Text} dangerouslySetInnerHTML={{__html: this.state.story.text}}></div>
        <Comments comments={this.state.story.kids}/>
      </React.Fragment>
    );
  }
}

