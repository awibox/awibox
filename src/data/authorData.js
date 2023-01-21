import React from 'react';

const author = () => ({
  avatar: 'https://avatars1.githubusercontent.com/u/1931010?s=460&v=4',
  name: 'Andrei Arkhipov',
  position: 'Software Engineer',
  location: 'Prague, Czech Republic',
  cv: '/Resume-Andrei-Arkhipov.pdf',
  services: [
    {
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/awibox',
      color: '#24292e',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin-in',
      link: 'https://linkedin.com/in/awibox',
      color: '#0077B5',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/awibox/',
      color: 'rgb(38, 38, 38)',
    },
  ],
  aboutMe: (
    <div>
      I&apos;m a Software Engineer with experience in various industries such as public services,
      travel, education, e-commerce, finance, video streaming services and mobile app development.
      Proficient in JavaScript, TypeScript, React, React Native, Angular 2+, Node.js (Express.js,
      Next.js). Experienced in building high-load single page applications and npm packages from
      scratch. Skilled in developing complex adaptive interfaces, configuring CI workflow and
      solving non-trivial problem. Well-versed in Agile methodologies.
    </div>),
});
export default author;
