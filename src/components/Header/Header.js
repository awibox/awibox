import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
// Styles
import styles from './Header.scss';

const Header = (props) => {
  const { data } = props;
  const [showHeader, setHeaderState] = useState(false);
  return (
    <>
      <header id="site_header" className={cn(styles.header, { [styles.menuHide]: !showHeader })}>
        <div className="header-content">
          <div className={styles.headerPhoto}>
            <img width={180} height={180} src={data.get('avatar')} alt={data.get('name')} />
          </div>
          <div className={styles.headerTitles}>
            <h1>{data.get('name')}</h1>
            <div className={styles.desc}>{data.get('position')}</div>
          </div>
          <div className={styles.socialLinks}>
            <ul>
              {data.get('services') && data.get('services').map((item) => (
                <li key={item.name}>
                  <a href={item.link} aria-label={item.name} title={item.name} rel="nofollow noopener noreferrer" target='_blank'>
                    <i className={`fab fa-${item.icon}`}/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.headerButtons}>
          {data.get('cv') ? <a href={data.get('cv')} rel="noopener noreferrer" target="_blank" className={cn('btn-primary', styles.btnPrimary)}>Download CV</a> : ''}
        </div>
        <div className={styles.copyrights}>
          © 2020-{new Date().getFullYear()} All rights reserved.
        </div>
      </header>
      <div className={cn(styles.menuToggle, { [styles.open]: showHeader })}
           onClick={() => setHeaderState(!showHeader)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

Header.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Header;
