import React from 'react';
import cn from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Styles
import styles from './Experience.scss';

const Experience = ({ data }) => (
  <div className={cn(styles.experience, 'row')}>
    {data.map((item) => {
      const years = (item.endYear ? item.endYear : new Date().getFullYear()) - item.startYear;
      const percentage = (100 / (new Date().getFullYear() - 2007)) * years;
      return (
        <div key={item.name} className="col-md-6">
          <div className="skill clearfix">
            <h4>{item.name}</h4>
            <div className={styles.skillValue}>{years} {years === 1 ? 'year' : 'years'}</div>
          </div>
          <div className={styles.skillContainer}>
            <div className={styles.skillPercentage} style={{ width: `${percentage}%` }}/>
          </div>
        </div>
      );
    })}
  </div>
);

Experience.propTypes = {
  data: ImmutablePropTypes.list.isRequired,
};

export default Experience;
