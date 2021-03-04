import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Styles
import styles from './Skills.scss';

const Skills = (props) => (
  <ul className={styles.skills}>
    {props.data.map((item) => (
      <li key={item.name} className={styles.skillItem}>{item.name}</li>
    ))}
  </ul>
);

Skills.propTypes = {
  data: ImmutablePropTypes.list,
  className: PropTypes.string,
};

export default Skills;
