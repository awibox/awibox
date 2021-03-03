import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Title.scss';

const Title = (props) => {
  const { subtitle } = props;
  return (
    <div className={!subtitle ? styles.title : styles.titleSmall}>
      {!subtitle ? <h2>{props.children}</h2> : <h3>{props.children}</h3>}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.any,
  subtitle: PropTypes.bool,
};

export default Title;
