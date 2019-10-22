import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Skills.scss';

const Skills = (props) => (
  <div className={styles.skills}>
    {props.data.map((item) => (
      <div className={styles.skillItem} key={item}>{item}</div>
    ))}
  </div>
);

Skills.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default Skills;
