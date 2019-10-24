import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Books.scss';

const bookClick = (url) => window.open(url);

const Books = (props) => (
  <div className={styles.books}>
    {props.data.map((book) => (
      <div key={book.name} className={styles.bookItem} onClick={() => bookClick(book.link)}>
        <div className={styles.bookName}>{book.name}</div>
        <div className={styles.author}>Author: <b>{book.author}</b></div>
      </div>
    ))}
  </div>
);

Books.propTypes = {
  data: PropTypes.any,
};

export default Books;
