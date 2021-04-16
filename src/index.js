import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './index.module.css';

import TopStories from './containers/TopStories/TopStories';
import NewStories from './containers/NewStories/NewStories';


class App extends React.Component{
  render(){

    return(
      <React.Fragment>
        <React.Suspense>
          <BrowserRouter>
            <Switch>
                <Route path="/" exact component={TopStories}/>
                <Route path="/new" exact component={NewStories}/>
                {/* This is a 404 fallback which redirects to the main route */}
                <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
        </React.Suspense>
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
