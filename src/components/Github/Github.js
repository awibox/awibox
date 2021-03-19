import React from 'react';
// Styles
import styles from './Github.scss';

const Github = () => (
  <div className={styles.github}>
    <img className={styles.stats} src="https://github-readme-stats.vercel.app/api?username=awibox&show_icons=true&hide_title=true&icon_color=fea621&title_color=fea621&hide_border=true&include_all_commits=true&count_private=true&hide_rank=false" alt='GitHub Stats' />
    <img className={styles.languages} src="https://github-readme-stats.vercel.app/api/top-langs/?username=awibox&layout=compact&langs_count=8&hide_border=true&hide_title=true" alt='Most used languages' />
  </div>
);

export default Github;
