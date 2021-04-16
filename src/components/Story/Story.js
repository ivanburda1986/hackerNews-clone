import React from 'react';
import PropTypes from 'prop-types';

import {getHumanDate} from '../../utils/convertors';
import classes from './Story.module.css';


const Story = (props) => {

  return(
   <React.Fragment>
     <li className={classes.Story}>
     <a className={classes.Title} href={props.link}>{props.title}</a>
     <div className={classes.StoryDetails}>
       <div className={classes.author}><p>by </p>{props.author}</div>
       <div className={classes.date}>{getHumanDate(props.date)}</div>
       <div className={classes.comments}></div>
     </div>
   </li>
   </React.Fragment>
  );  
}

Story.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  comments: PropTypes.array,
}

export default Story;



