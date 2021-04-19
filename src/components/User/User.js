import React from 'react';
import queryString from 'query-string';

import Loading from '../Loading/Loading';
import Story from '../Story/Story';

import {getHumanDate} from '../../utils/convertors';

import {getUserData, getItemDetails} from '../../utils/api';


export default class User extends React.Component{
  state = {
    userDetails: [],
    storyDetails: [],
    userLoading: false,
    storysLoading: false,
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
      .then(()=>{this.getUsersStories(this.state.userDetails.submitted);})
  };

  getUsersStories = (ids) => {
    this.setState({
      storysLoading: true,
    });
    ids.forEach((id)=>{
      getItemDetails(id)
      .then((data)=>{
        //Make sure that only stories are passed on
       if (data.type === "story"){
        this.setState({
          storyDetails: this.state.storyDetails.concat(data),
          storysLoading: false,
        })
       } else{
        this.setState({
          storysLoading: false,
        })
       }
      })
    })
  };

    storiesDisplay = () => {
      if(this.state.storysLoading){
        return <Loading text="Loading"/>;
      } else {
        return (
          this.state.storyDetails.map((story)=>
          <Story 
          key={story.id} 
          id={story.id} 
          title={story.title} 
          url={story.url} 
          by={story.by} 
          time={story.time} 
          commentCount={story.kids ? story.kids.length : 0}
          />)
        );
      }
    };

    userDisplay = () => {
      if(this.state.userLoading){
        return <Loading text="Loading"/>
      } else {
        return(
          <div>
            <h1>{this.state.userDetails.id}</h1>
            <p>{`Joined on ${getHumanDate(this.state.userDetails.created)}, has karma ${this.state.userDetails.karma}`}</p>
            <p dangerouslySetInnerHTML={{__html: this.state.userDetails.about}}></p>
          </div>
        );
      }
    }



  render(){
    console.log(this.state.storyDetails.length);
    const content = this.storiesDisplay();
    const userContent = this.userDisplay();
    return(

      <React.Fragment>
        {userContent}
        <h1>Posts</h1>
        {this.state.storyDetails.length === 0 ? <p>No posts yet</p>:null }
      <ul>
        {content}
      </ul>
      </React.Fragment>
    )
  }
};