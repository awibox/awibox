import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Books.scss';

const Books = (props) => (
  <div className={styles.books}>
    {props.data.map((book) => (
      <div key={book.name} className={styles.bookItem}>
        {book.link
          ? <a href={book.link}
               target="_blank"
               className={styles.bookName}
               rel="noopener noreferrer">{book.name}</a>
          : <span className={styles.bookName}>{book.name}</span>
        }
          <div className={styles.author}>Author: <b>{book.author}</b></div>
      </div>
    ))}
  </div>
);

Books.propTypes = {
  data: PropTypes.any,
};

export default Books;
