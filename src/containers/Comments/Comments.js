import React from 'react';

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


  fetchComments = (id) => {
    getStoryDetails(id)
    .then((data)=>{
      this.setState({
        comments: this.state.comments.concat(data),
        loading: false,
        commentsFetched: true,
      })
    })
  };

  render(){

    
    



    if(!this.state.commentIds){
      return <Loading text="Loading"/>;
    } 
    if(this.state.commentsFetched === false){
        this.state.commentIds.forEach(commentId=>this.fetchComments(commentId));
    }
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

      console.log(allcomments);
      return(
          <ul>
            {allcomments}
          </ul>
      )
    }
    return(<p>ivan</p>);
  }
}

