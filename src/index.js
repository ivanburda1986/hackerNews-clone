import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {ThemeProvider} from './contexts/theme';

import './index.module.css';
import classes from './index.module.css';

import Navigation from './components/Navigation/Navigation';
import Stories from './containers/StorieFeed/StoriesFeed';
import StandaloneStory from './components/StandaloneStory/StandaloneStory';
import User from './components/User/User';

class App extends React.Component{
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({theme})=>({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render(){

    return(
      <React.Fragment>
        <React.Suspense>
          <ThemeProvider value = {this.state}>
            <BrowserRouter>
            <div className={classes.wrapper}>
              <Navigation/>
              <Switch>
                  <Route path="/" exact render={(props)=><Stories storyType="top"/>}/>
                  <Route path="/new" exact render={(props)=><Stories storyType="new"/>}/>
                  <Route path="/story" component={StandaloneStory}/>
                  <Route path="/user" component={User}/>
                  {/* This is a 404 fallback which redirects to the main route */}
                  <Redirect to="/"/>
              </Switch>
            </div>
            </BrowserRouter>
          </ThemeProvider>
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
