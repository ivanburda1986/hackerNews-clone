import React from 'react';
import ReactDOM from 'react-dom';

import TopStories from './components/TopStories';


class App extends React.Component{
  render(){

    return(
      <React.Suspense>
        <React.Fragment>
          <h1>Hello world</h1>
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
