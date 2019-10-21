import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './WorkItem.scss';

const WorkItem = (props) => {
  const { data } = props;
  return (
    <div className={styles.workItem}>
      <div className={styles.position}>{data.position}</div>
      <div className={styles.company}>{data.company}</div>
      <div className={styles.description}>{data.description}</div>
    </div>
  );
};

WorkItem.propTypes = {
  data: PropTypes.any,
};

export default WorkItem;
