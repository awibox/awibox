import React from 'react';

export const workData = () => [
  {
    date: 2019,
    title: 'Lead Software Engineer',
    label: 'Luxoft',
    location: 'Saint Petersburg (Russia)',
    content: (<div>
      <div>Participated in the development of 2 projects:</div>
      <ol>
        <li>Web application for auditing facilities of a large oil company.</li>
        <li>Analytical system that allows to build reports or charts.</li>
      </ol>
      <div>I was the lead developer. My responsibilities included developing and refactoring complex
        parts of the project as well as conducting code reviews and increasing testing coverage.
      </div>

    </div>),
  },
  {
    date: 2018,
    title: 'Senior Software Engineer',
    label: 'Tutu.ru',
    location: 'Moscow (Russia)',
    content: (
      <div>
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
      </div>),
  },
  {
    date: 2016,
    title: 'Lead Software Developer',
    label: 'CUSTIS',
    location: 'Moscow (Russia)',
    content: (
      <div>
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
      </div>),
  },
  {
    date: 2013,
    title: 'Software Engineer',
    label: 'Rutube',
    location: 'Moscow (Russia)',
    content: (
      <div>
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
      </div>),
  },
  {
    date: 2012,
    title: 'Web Developer',
    label: 'BARS GROUP',
    location: 'Kazan (Russia)',
    content: (
      <div>
        <div>I developed front-end part of projects for public services such as:</div>
        <ul>
          <li>Monitoring Cultural Heritage</li>
          <li>Accessible Environment</li>
          <li>Social network for school children</li>
        </ul>
      </div>),
  },
  {
    date: 2007,
    title: 'Web Developer',
    label: 'Freelance',
    location: 'Kazan (Russia)',
    content: (
      <div>
        <div>It was my hobby.</div>
        <div>I created different websites using CMS such as Wordpress,
          Joomla, NetCat, 1C Bitrix.
        </div>
      </div>),
  },
];

export const workBooks = () => [
  {
    name: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    link: 'https://eloquentjavascript.net/',
  },
  {
    // eslint-disable-next-line no-script-url
    name: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    link: 'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
  },
  {
    name: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    link: 'https://martinfowler.com/books/refactoring.html',
  },
  {
    name: 'Working Effectively with Legacy Code',
    author: 'Michael Feathers',
    link: 'https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052',
  },
  {
    name: 'Code Complete: A Practical Handbook of Software Construction',
    author: 'Steve McConnell',
    link: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670',
  },
  {
    name: 'Extreme Programming Explained: Embrace Change',
    author: 'Kent Beck',
    link: 'https://www.amazon.com/dp/B00N1ZN6C0/',
  },
];

export const workSkills = () => [
  { name: 'JavaScript' },
  { name: 'CSS' },
  { name: 'Git' },
  { name: 'HTML5' },
  { name: 'React' },
  { name: 'Redux' },
  { name: 'Immutable.js' },
  { name: 'Angular' },
  { name: 'Backbone' },
  { name: 'Knockout' },
  { name: 'Sencha Touch' },
  { name: 'TypeScript' },
  { name: 'Webpack' },
  { name: 'Babel.js' },
  { name: 'Reselect' },
  { name: 'Jest' },
  { name: 'Karma' },
  { name: 'Enzyme' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'MongoDB' },
  { name: 'Photoshop' },
  { name: 'Handlebars' },
  { name: 'Mustache' },
  { name: 'Twig' },
  { name: 'SketchUp' },
  { name: 'Docker' },
  { name: 'SCSS' },
  { name: 'LESS' },
  { name: 'Stylus' },
  { name: 'CSS-modules' },
  { name: 'PropTypes' },
  { name: 'Async/Await' },
  { name: 'EventLoop' },
];
