import React from 'react';

export const workData = () => [
  {
    date: '2019 - 2021',
    title: 'Lead Software Engineer',
    label: 'Luxoft',
    location: 'Saint Petersburg (Russia)',
    content: (
      <>
        <div>Team leader on a project of public services. Our team has developed a new version
          of the form player from scratch. The first version was put into production in 3 months.
        </div>
        <ul>
          <li>Built a client-side architecture (delivery as an npm package)</li>
          <li>Integrated automatic code verification (linters, tests, static code analysis)</li>
          <li>Configured the code review process</li>
          <li>Involving team members in product improvement</li>
          <li>Interviewed candidates for developer position</li>
        </ul>
      </>),
  },
  {
    date: '2018 - 2019',
    title: 'Senior Software Engineer',
    label: 'Tutu.ru',
    location: 'Moscow (Russia)',
    content: (
      <>
        <div>I developed bus selling section (single page application with React) on high-load (with
          more than 6 millions users per month) travel site system.
        </div>
        <ul>
          <li>Page loading speed on high-load pages has been optimized by more than 2 times</li>
          <li>The search form was refactored (an important part of the product) which was necessary
            to fix a large number of inherited and global logical errors
          </li>
          <li>2-fold increase in unit test coverage</li>
          <li>Developed new services for product</li>
          <li>Performed Code Reviews</li>
          <li>Had experience in Scrum team</li>
          <li>Worked closely with UI/UX designer</li>
        </ul>
      </>),
  },
  {
    date: '2016 - 2018',
    title: 'Lead Software Developer',
    label: 'CUSTIS',
    location: 'Moscow (Russia)',
    content: (
      <>
        <div>
          I led a front-end development team of 10 people on the education project
        </div>
        <ul>
          <li>Planning the work of frontend teams</li>
          <li>Made knowledge-sharing and documentation creation processes</li>
          <li>Performed Code Reviews</li>
          <li>Conducted 1-on-1 meetings with developers</li>
          <li>Interviewed candidates for developer position</li>
          <li>Implemented GitLab Flow which allowed to eliminate time-consuming `git rebase`</li>
          <li>Implemented ТSLint to improve code readability</li>
          <li>Participated in the development of UI-kit for the project</li>
          <li>Participated in the development of a complex authentication system</li>
        </ul>
      </>),
  },
  {
    date: '2013 - 2016',
    title: 'Senior Software Engineer',
    label: 'Rutube',
    location: 'Moscow (Russia)',
    content: (
      <>
        <div>Participated in the development of projects:</div>
        <ul>
          <li>Video hosting Rutube</li>
          <li>Development site and secure online voting system for the TEFI award</li>
          <li>Broadcasts service NTV Plus</li>
          <li>Developed the interface part of the online video
            editor for NTV Plus which makes it possible to
            cut highlights from the live broadcast (Angular 2, D3.js).
          </li>
          <li>Made content management system for NTV Plus
            (single-page application using Angular 2).
          </li>
        </ul>
      </>),
  },
  {
    date: '2012 - 2013',
    title: 'Web Developer',
    label: 'BARS GROUP',
    location: 'Kazan (Russia)',
    content: (
      <>
        <div>I developed front-end part of projects for public services such as:</div>
        <ul>
          <li>Monitoring Cultural Heritage</li>
          <li>Accessible Environment</li>
          <li>Social network for school children</li>
        </ul>
      </>),
  },
  {
    date: '2007 - 2012',
    title: 'Web Developer',
    label: 'Freelance',
    location: 'Kazan (Russia)',
    content: (
      <>
        <div>I have created websites using CMS such as Wordpress,
          Joomla, NetCat, 1C Bitrix.
        </div>
      </>),
  },
];

export const workCertificates = () => [
  {
    name: 'JavaScript',
    id: 'f367aee15f76',
    date: 'Apr 2020',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'React',
    id: '8DABF8164735',
    date: 'Apr 2020',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'Angular',
    id: '80c57f2c0068',
    date: 'Mar 2021',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'Node.js',
    id: '89c699cbbd9a',
    date: 'Apr 2021',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'Problem Solving',
    id: 'D18174E870B3',
    date: 'Apr 2020',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'CSS',
    id: '643f3815cff8',
    date: 'Mar 2021',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
  {
    name: 'Python',
    id: '9D32D3FBF1E6',
    date: 'Apr 2020',
    company: 'Hacker Rank',
    logo: 'img/hacker-rank.jpeg',
    link: 'https://www.hackerrank.com/certificates/',
  },
];

export const workExperience = () => [
  {
    name: 'HTML',
    startYear: 2007,
  },
  {
    name: 'CSS',
    startYear: 2007,
  },
  {
    name: 'JavaScript',
    startYear: 2007,
  },
  {
    name: 'TypeScript',
    startYear: 2014,
  },
  {
    name: 'React',
    startYear: 2017,
  },
  {
    name: 'Angular',
    startYear: 2015,
    endYear: 2019,
  },
  {
    name: 'Node JS',
    startYear: 2018,
  },
  {
    name: 'Python',
    startYear: 2019,
    endYear: 2021,
  },
];

export const workSkills = () => [
  { name: 'Git' },
  { name: 'Redux' },
  { name: 'Immutable.js' },
  { name: 'Webpack' },
  { name: 'Jest' },
  { name: 'Express' },
  { name: 'MongoDB' },
  { name: 'Docker' },
  { name: 'CSS-modules' },
];
