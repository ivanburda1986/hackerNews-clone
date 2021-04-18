import React from 'react';
import queryString from 'query-string';

import Loading from '../Loading/Loading';

import {getUserData, getItemDetails} from '../../utils/api';


export default class User extends React.Component{
  state = {
    userDetails: [],
    commentDetails: [],
    userLoading: false,
    commentsLoading: false,
  }

  componentDidMount(){
    const id = queryString.parse(this.props.location.search);
    this.getUser(id.id);
  }

  getUser = (id) => {
    this.setState({
      userLoading: true,
    });
    getUserData(id)
      .then((data)=>{
        this.setState({
          userDetails: data,
          userLoading: false,
        })
      })
      .then(()=>{this.getUsersComments(this.state.userDetails.submitted);})
  };

  getUsersComments = (ids) => {
    this.setState({
      commentsLoading: true,
    });
    ids.forEach((id)=>{
      getItemDetails(id)
      .then((data)=>{
        this.setState({
          commentDetails: this.state.commentDetails.concat(data),
          commentsLoading: false,
        })
      })
    })
  }



  render(){
    if(this.state.userLoading){
      return <Loading text="Loading"/>;
    } else{
      return(
        <h1>{this.state.userDetails.id}</h1>
        
        

      )

    }

    return(
      <h1>some loading</h1>
    )

    
  }
};