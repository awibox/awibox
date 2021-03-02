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
          <img src={data.get('avatar')} alt="Alex Smith" />
        </div>
        <div className={styles.headerTitles}>
          <h2>Alex Smith</h2>
          <h4>Web Designer</h4>
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
        <a href="#" target="_blank" className={cn('btn-primary', styles.btnPrimary)}>Download CV</a>
      </div>

      <div className={styles.copyrights}>© 2020 All rights reserved.</div>
    </header>);
};

Header.propTypes = {
  data: PropTypes.any.isRequired,
};


export default Header;
