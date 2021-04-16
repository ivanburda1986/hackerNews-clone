import React from 'react';
import PropTypes from 'prop-types';

import classes from './StoryMetadata.module.css';
import {getHumanDate} from '../../utils/convertors';

const StoryMetadata = (props) => {

  return(
    <div className={classes.StoryDetails}>
    <div><p>by</p><p>{props.by}</p></div>
    <div><p>on</p><p>{getHumanDate(props.time)}</p></div>
    <div></div>
  </div>
  );
}

StoryMetadata.propTypes = {
  by: PropTypes.string,
  time: PropTypes.number,
  //comments: PropTypes.array,
}

export default StoryMetadata;