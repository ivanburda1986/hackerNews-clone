import React from 'react';
import queryString from 'query-string';

import {getStoryDetails} from '../../utils/api';

import Loading from '../../components/Loading/Loading';
import Comment from '../../components/Comment/Comment';

import classes from './Comments.module.css';


export default class Comments extends React.Component{
  state = {
    comments: [],
    commentIds: this.props.commentIds,
    loading: false,
    commentsFetched: false,
  }

  componentDidMount(){

  }

  render(){
    //Loading
    if(!this.state.commentIds){
      return <Loading text="Loading"/>;
    };
    //Displays the comments
    if(this.state.comments.length !==0){
      let allcomments = [...this.state.comments];
      allcomments = allcomments.map(comment=>(
        <Comment
          key={comment.id}
          id={comment.id}
          text={comment.text}
          by={comment.by}
          time={comment.time}
        />
      ));
      return(
          <ul>
            {allcomments}
          </ul>
      )
    }
    //No comments available
    return(<p>No comments available</p>);
  }
}

