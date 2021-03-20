import React from 'react';

const author = () => ({
  avatar: 'https://avatars1.githubusercontent.com/u/1931010?s=460&v=4',
  name: 'Andrei Arkhipov',
  position: 'Software Engineer',
  location: 'Russia, Saint Petersburg',
  email: 'me@awb.pw',
  cv: '',
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
  <ul>
    <li>13+ years of experience</li>
    <li>Tech stack: JavaScript, TypeScript, React, Angular 2+,
      Node.js (Express, Next.js)</li>
    <li>Participated in the development of 20+ web-applications in various industries
      (include high-load platform)</li>
    <li>Experience creating apps from scratch</li>
    <li>Automating everything that can be automated</li>
  </ul>),
});
export default author;
