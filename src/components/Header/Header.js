import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
// Components
import NavBar from 'components/NavBar/NavBar';
// Styles
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.logoBlock} to="/">
      <Logo/>
    </Link>
    <NavBar/>
  </header>);

export default Header;
