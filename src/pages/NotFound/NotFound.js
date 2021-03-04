import React from 'react';
// Components
// Styles
import styles from './NotFound.scss';

const NotFound = () => (
  <>
    <div className={styles.code}>404</div>
    <p>We couldn&apos;t find this page.</p>
    <p>The page you are looking for does not exists.</p>
  </>
);
export default NotFound;
