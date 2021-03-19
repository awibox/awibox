import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Styles
import styles from './Experience.scss';

const Experience = (props) => (
  <div className={cn(styles.experience, 'row')}>
    {props.data.map((item) => (
      <div key={item.name} className="col-md-6">
        <div className="skill clearfix">
          <h4>{item.name}</h4>
          <div className={styles.skillValue}>{item.years} {item.years === 1 ? 'year' : 'years'}</div>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.skillPercentage} style={{ width: `${item.percentage}%` }}></div>
        </div>
      </div>
    ))}
  </div>
);

Experience.propTypes = {
  data: ImmutablePropTypes.list,
  className: PropTypes.string,
};

export default Experience;
