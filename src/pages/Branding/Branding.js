import React from 'react';
import Logo from 'components/Logo/Logo';
import styles from './Branding.scss';

const Branding = () => (
  <div title={'Branding'}>
    <div className={styles.branding}>
      <div className={styles.icon}>
        <i className={'fa fa-list'}></i>
      </div>
      <div className={styles.logo}>
        <Logo/>
      </div>
    </div>
  </div>
);

export default Branding;
