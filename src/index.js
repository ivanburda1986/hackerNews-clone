import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './index.module.css';
import classes from './index.module.css';

import Navigation from './components/Navigation/Navigation';
import TopStories from './containers/TopStories/TopStories';
import NewStories from './containers/NewStories/NewStories';
import StandaloneStory from './containers/StandaloneStory/StandaloneStory';


class App extends React.Component{
  render(){

    return(
      <React.Fragment>
        <React.Suspense>
          <BrowserRouter>
          <div className={classes.wrapper}>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={TopStories}/>
                <Route path="/new" exact component={NewStories}/>
                <Route path="/post" component={StandaloneStory}/>
                {/* This is a 404 fallback which redirects to the main route */}
                <Redirect to="/"/>
            </Switch>
          </div>
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
