import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Styles
import styles from './Skills.scss';


const Skills = (props) => (
  <div className={styles.skills}>
    {props.data.map((item) => (
      <div key={item.name} className={styles.skillItem}>{item.name}</div>
    ))}
  </div>
);

Skills.propTypes = {
  data: ImmutablePropTypes.list,
  className: PropTypes.string,
};

export default Skills;
