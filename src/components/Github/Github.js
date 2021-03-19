import React from 'react';
// Styles
import styles from './Github.scss';

const Github = () => (
  <div className={styles.github}>
    <img align="center" src="https://github-readme-stats.vercel.app/api?username=awibox&show_icons=true&hide_title=true¬&icon_color=fea621&title_color=fea621&hide_border=true&include_all_commits=true&count_private=true" alt='GitHub Stats' />
  </div>
);

export default Github;
