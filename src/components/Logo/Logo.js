import React from 'react';
// Styles
import styles from './Logo.scss';

const Logo = () => (
  <div className={styles.logo}>
    <div className={styles.bracket}>{'{'}</div>
    <div className={styles.text}>AWB</div>
    <div className={styles.bracket}>{'}'}</div>
  </div>
);


export default Logo;
