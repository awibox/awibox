import React from 'react';

const author = () => ({
  avatar: 'https://avatars1.githubusercontent.com/u/1931010?s=460&v=4',
  name: 'Andrei Arkhipov',
  position: 'Software Engineer',
  location: 'Russia, Saint Petersburg',
  email: 'me@awb.pw',
  cv: '/Resume-Andrei-Arkhipov.pdf',
  services: [
    {
      name: 'github',
      icon: 'github',
      link: 'https://github.com/awibox',
      color: '#24292e',
    },
    {
      name: 'linkedin',
      icon: 'linkedin-in',
      link: 'https://linkedin.com/in/awibox',
      color: '#0077B5',
    },
    {
      name: 'instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/awibox/',
      color: 'rgb(38, 38, 38)',
    },
  ],
  aboutMe: (
  <div>
    I&apos;m a Software Engineer with over 13 years of experience in various industries such as
    public services, travel, education, finance and video streaming services.
    Proficient in JavaScript, TypeScript, React, Angular 2+, Node.js (Express, Next.js).
    Experienced in building high-load single page applications and npm packages from scratch.
    Skilled in developing complex adaptive interfaces, configuring CI workflow and
    solving non-trivial problem. HackerRank certified. Well-versed in Scrum and Agile.
  </div>),
});
export default author;
