import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Title.scss';

const Title = (props) => (
  <div className={styles.title}>
    <h2>{props.children}</h2>
  </div>
);

Title.propTypes = {
  children: PropTypes.any,
};

export default Title;
