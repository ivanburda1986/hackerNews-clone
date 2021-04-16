import React from 'react';
import queryString from 'query-string';

import {getStoryDetails} from '../../utils/api';

import classes from './StandaloneStory.module.css';

import StoryMetadata from '../StoryMetadata/StoryMetadata';

export default class StandaloneStory extends React.Component{
  state = {
    story: []
  }

  componentDidMount(){
    const id = queryString.parse(this.props.location.search);
    this.getStory(id.id);
  }

  getStory = (id) => {
    getStoryDetails(id)
      .then((data)=>{
        this.setState({
          story: data,
        })
      })
  }

  render(){
    return(
      <React.Fragment>
        <h1 className={classes.Title}>{this.state.story.title}</h1>
        <StoryMetadata by={this.state.story.by} time={this.state.story.time}/>
        <div className={classes.Text} dangerouslySetInnerHTML={{__html: this.state.story.text}}>
        </div>
      </React.Fragment>
    );
  }
}

