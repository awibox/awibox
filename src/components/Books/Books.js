import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Books.scss';

const Books = (props) => (
  <div className={styles.books}>
    {props.data.map((book) => (
      <div key={book.name}>
        <a href={book.link} target="_blank" rel="noopener noreferrer">{book.name}</a>
      </div>
    ))}
  </div>
);

Books.propTypes = {
  data: PropTypes.any,
};

export default Books;
