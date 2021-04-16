import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';

import TopStories from './containers/TopStories/TopStories';


class App extends React.Component{
  render(){

    return(
      <React.Suspense>
        <React.Fragment className={classes}>
          <TopStories/>
        </React.Fragment> 
      </React.Suspense>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
