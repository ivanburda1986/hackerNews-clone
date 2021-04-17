import React from 'react';

import {getStoryDetails} from '../../utils/api';

import Loading from '../../components/Loading/Loading';
import Comment from '../../components/Comment/Comment';

import classes from './Comments.module.css';


export default class Comments extends React.Component{
  state = {
    comments: [],
    commentIds: [],
    loading: false,
    triggered: false,
  }

  componentDidMount(){
    this.setState({
      commentIds: this.props.comments,
    })
  }

  fetchComments = (id) => {
    this.setState({
      loading: true,
    });
    
    getStoryDetails(id)
    .then((data)=>{

      this.setState({
        comments: data,
        loading: false,
      })
    })
  };

  render(){
    let myComment;
    if(this.state.commentIds !== undefined && this.state.triggered === false){
      myComment = this.state.commentIds[0];
      this.fetchComments(myComment);
      this.setState({
        triggered: true,
      })
    }

    if(this.state.loading){
      return <Loading text="Loading"/>;
    } else{
      return(
        <p>{myComment}</p>
      )
    }
  }
}

