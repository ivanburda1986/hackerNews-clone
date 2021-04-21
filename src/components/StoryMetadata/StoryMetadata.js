import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './StoryMetadata.module.css';
import {getHumanDate} from '../../utils/convertors';

const StoryMetadata = (props) => {
  let by = <Link to={"/user?id="+props.by}>{props.by}</Link>;
  let time = getHumanDate(props.time);
  let wordWith = typeof props.commentCount === "number" ? "with":null;
  let comments = typeof props.commentCount === "number" ? <Link to={`/story?id=${props.id}`}>{props.commentCount}</Link> : null;
  let wordComments = typeof props.commentCount === "number" ? "comments":null;

  return(
  <div className={classes.StoryDetails}>
    <div>by<span/>{by}<span/>on<span/>{time}<span/>{wordWith}<span/>{comments}<span/>{wordComments}</div>
  </div>
  );
}

StoryMetadata.propTypes = {
  by: PropTypes.string,
  time: PropTypes.number,
  id: PropTypes.number,
  commentCount: PropTypes.number
}

export default StoryMetadata;
