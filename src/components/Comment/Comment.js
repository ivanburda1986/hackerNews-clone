import React from 'react';
import PropTypes from 'prop-types';

import StoryMetadata from '../StoryMetadata/StoryMetadata';
import classes from './Comment.module.css';

const Comment = (props) =>{
  return(
    <div className={classes.Comment}>
    <StoryMetadata by={props.by} time={props.time}/>
        <p dangerouslySetInnerHTML={{__html: props.text}}></p>
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  by: PropTypes.string,
  time: PropTypes.number,
  text: PropTypes.string,
};