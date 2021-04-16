import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import {getHumanDate} from '../../utils/convertors';
import classes from './Story.module.css';



const Story = (props) => {

  return(
   <React.Fragment>
    <li className={classes.Story}>
     <Title data={{id: props.id, title: props.title, url: props.url}}/>
     <div className={classes.StoryDetails}>
       <div><p>by </p>{props.by}</div>
       <div>{getHumanDate(props.time)}</div>
       <div></div>
     </div>
   </li>
   </React.Fragment>
  );  
}

Story.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  comments: PropTypes.array,
}

export default Story;




