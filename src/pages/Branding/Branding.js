import React from 'react';
import Card from 'components/Card/Card';
import Logo from 'components/Logo/Logo';
import styles from './Branding.scss';

const Branding = () => (
  <Card title={'Branding'}>
    <div className={styles.branding}>
      <div className={styles.icon}>
        <i className={'fa fa-list'}></i>
      </div>
      <div className={styles.logo}>
        <Logo/>
      </div>
    </div>
  </Card>
);

export default Branding;
