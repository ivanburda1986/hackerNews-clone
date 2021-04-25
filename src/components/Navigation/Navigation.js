import React from 'react';
import {NavLink} from 'react-router-dom';
import {ThemeConsumer} from '../../contexts/theme';
import classes from './Navigation.module.css';


const Navigation = (props) =>{

  return (
    <ThemeConsumer>
      {({theme, toggleTheme})=>(
        <nav className={classes.Navigation}>
        <ul>
          <li><NavLink to="/" exact activeClassName={classes.Active} className={classes.Link}>Top</NavLink></li>
          <li><NavLink to="/new" exact activeClassName={classes.Active} className={classes.Link}>New</NavLink></li>
        </ul>
        <button onClick={()=>toggleTheme()}>{theme==="light" ? '🔦' : '💡'}</button>
      </nav>
      )}
    </ThemeConsumer>
  );
}

export default Navigation;