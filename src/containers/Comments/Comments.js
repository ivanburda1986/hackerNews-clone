import React from 'react';

import {getStoryDetails} from '../../utils/api';

import Loading from '../../components/Loading/Loading';

import classes from './Comments.module.css';


export default class Comments extends React.Component{
  state = {
    comments: [],
    commentIds: this.props.comments,
    loading: false,
    triggered: false,
  }

  fetchComments = (id) => {
    this.setState({
      loading: true,
    });
    
    getStoryDetails(id)
    .then((data)=>{
      console.log(data);
      this.setState({
        comments: data,
        loading: false,
      })
    })
  };

  render(){
    let myComment;
    if(this.state.commentIds != undefined && this.state.triggered === false){
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

