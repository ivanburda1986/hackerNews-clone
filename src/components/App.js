import * as React from 'react';

import {handleDataTopnews} from '../actions/topnews';

class App extends React.Component {

  componentDidMount(){
    handleDataTopnews();
  }

  render(){

    return (
      <div>
        <h1>Hello world</h1>
      </div>
     )
  }
  
}

export default App;
