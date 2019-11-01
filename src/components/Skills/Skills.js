import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
// Styles
import styles from './Skills.scss';


const Skills = (props) => (
  <div className={styles.skills}>
    {props.data.map((item) => (
      <div className={classNames(styles.skillItem, {
        [styles.keySkill]: item.key,
      })} key={item.name}>{item.name}</div>
    ))}
  </div>
);

Skills.propTypes = {
  data: ImmutablePropTypes.list,
  className: PropTypes.string,
};

export default Skills;
