import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Styles
import styles from './Timeline.scss';

const Timeline = (props) => {
  const { data } = props;
  return (
    <div className={cn(styles.timeline, 'clearfix')}>
      {data.map((item) => (
        <div key={item.label} className={cn(styles.timelineItem, 'clearfix')}>
          <div className={styles.leftPart}>
            <div className={styles.itemPeriod}>{item.label}</div>
            <span className={styles.itemCompany}>{item.date}</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.rightPart}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

Timeline.propTypes = {
  children: PropTypes.any,
  data: PropTypes.any,
};

export default Timeline;
