import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import styles from './Card.scss';

const Card = (props) => (
  <div className={classNames(styles.card, {
    [props.className]: props.className,
    [styles[props.color]]: props.color,
  })}>
    {props.title && <div className={styles.title}>{props.title}</div>}
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
