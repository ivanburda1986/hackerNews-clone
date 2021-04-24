import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Navigation.module.css';


const Navigation = (props) =>{

  return (
    <nav className={classes.Navigation}>
      <ul>
        <li><NavLink to="/" exact activeClassName={classes.Active} className={classes.Link}>Top</NavLink></li>
        <li><NavLink to="/new" exact activeClassName={classes.Active} className={classes.Link}>New</NavLink></li>
      </ul>
    </nav>

  );
}

export default Navigation;