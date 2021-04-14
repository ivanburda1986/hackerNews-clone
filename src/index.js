import React from 'react';
import ReactDOM from 'react-dom';

import TopStories from './components/TopStories';


class App extends React.Component{
  render(){

    return(
      <React.Fragment>
        <h1>Hello world</h1>
        <TopStories/>
      </React.Fragment>
    )
  }
}






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
