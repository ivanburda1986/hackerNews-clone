import React from 'react';

import classes from './Comment.module.css';

import StoryMetadata from '../StoryMetadata/StoryMetadata';

const Comment = (props) =>{
  return(
    <div className={classes.Comment}>
    <StoryMetadata by={props.by} time={props.time}/>
        <p dangerouslySetInnerHTML={{__html: props.text}}></p>
    </div>
  );
};


export default Comment;