import React from 'react';
import queryString from 'query-string';

export default class StandaloneStory extends React.Component{

  componentDidMount(){
    const id = queryString.parse(this.props.location.search);
  }

  render(){

    return(
      <div>
        Standalone story
      </div>
    );
  }
}

