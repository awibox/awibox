import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
// Styles
import styles from './Header.scss';

const Header = (props) => {
  const { data } = props;
  return (
    <header id="site_header" className={styles.header}>
      <div className="header-content">
        <div className={styles.headerPhoto}>
          <img src={data.get('avatar')} alt={data.get('name')} />
        </div>
        <div className={styles.headerTitles}>
          <h2>{data.get('name')}</h2>
          <h4>{data.get('position')}</h4>
        </div>
        <div className={styles.socialLinks}>
          <ul>
          {data.get('services') && data.get('services').map((item) => (
            <li key={item.name}>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
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

      <div className={styles.copyrights}>© 2020 All rights reserved.</div>
    </header>);
};

Header.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Header;
