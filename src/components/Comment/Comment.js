import React from 'react';

import StoryMetadata from '../StoryMetadata/StoryMetadata';

const Comment = (props) =>{


  return(
    <React.Fragment>
      <StoryMetadata by={props.by} time={props.time} id={props.id} commentCount={props.commentCount}/>
      <div>
        <p>Comment text goes here</p>
      </div>
    </React.Fragment>
  );
};


export default Comment;