import React from 'react';



import Loading from '../../components/Loading/Loading';
import Story from '../../components/Story/Story';

import {fetchStories} from '../../utils/api';

export default class TopStories extends React.Component{
  state = {
    topStories: [],
    loading: false,
  }

  componentDidMount(){
    this.fetchTopStories();
  }

  fetchTopStories = () => {
    this.setState({
      loading: true,
    });

    fetchStories("top")
      .then((data)=>{
        this.setState({
          topStories: data,
          loading: false,
        })
      })
  };

  render(){
    let stories = [...this.state.topStories];
    stories = stories.map(story=>(
      <Story
        key={story.id}
        id={story.id}
        url={story.url}
        title={story.title}
        by={story.by}
        time={story.time}
        comments={story.kids}
        commentCount={story.descendants}
      />
    ));

    if(stories.length===0){
      stories = <p>No stories yet</p>
    }

    if(this.state.loading){
      return <Loading text="Loading"/>;
    } else{
      return(
        <React.Fragment>
          <ul>
          {stories}
          </ul>
        </React.Fragment>
  
      );
    }
    

  }
};