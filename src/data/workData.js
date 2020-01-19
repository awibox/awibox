import React from 'react';

export const workData = () => [
  {
    year: 2019,
    type: 'work',
    content: {
      position: 'Chief Programmer',
      company: 'Luxoft',
      location: 'Saint Petersburg (Russia)',
      description: (<div>
        I am developing web services for an analytical system.
      </div>),
    },
  },
  {
    year: 2018,
    type: 'work',
    content: {
      position: 'Senior Software Engineer',
      company: 'Tutu.ru',
      location: 'Moscow (Russia)',
      description: (
        <div>
          <div>I worked on high-load (with more than 6 millions users per month)
            travel site system.
          </div>
          <div>I developed bus selling section (single page application with React)</div>
          <ul>
            <li>Optimized page loading speed on high-load pages</li>
            <li>Refactoring the search form (an important part of the product)
              due to a large number of inherited and global logical errors
            </li>
            <li>Increased javascript unit tests coverage up to 60
              per cent (karma, chai, enzyme, sinon)
            </li>
            <li>Developed new pages for product</li>
            <li>Performed Сode Reviews</li>
            <li>Had experience in Scrum team</li>
            <li>Worked closely with UI/UX designer</li>
          </ul>
        </div>),
    },
  },
  {
    year: 2016,
    type: 'work',
    content: {
      position: 'Lead Software Developer',
      company: 'CUSTIS',
      location: 'Moscow (Russia)',
      description: (
        <div>
          <div>I led a front-end development team of 10 people on the education project -
            Modeus:
          </div>
          <ul>
            <li>Planning the work of frontend teams</li>
            <li>Communicated with project manager and analysts</li>
            <li>Made knowledge-sharing and documentation creation processes</li>
            <li>Implemented GitLab Flow which allowed to eliminate
              time-consuming &quot;git rebase&quot;</li>
            <li>Implemented ТSLint (TypeScript linter)</li>
            <li>Performed Code Reviews</li>
            <li>Conducted 1-on-1 meetings with developers</li>
            <li>Interviewed candidates for developer position Participated
              in the development of a complex authentication system for Modeus
            </li>
          </ul>
          <div>Contributed to the development of UI Kit for the company.</div>
          <div>Updated from Angular 2 to Angular 5.</div>
          <div>Wrote unit tests (Jasmine).</div>
        </div>),
    },
  },
  {
    year: 2013,
    type: 'work',
    content: {
      position: 'Software Engineer',
      company: 'Rutube',
      location: 'Moscow (Russia)',
      description: (
        <div>
          <div>Participated in the development of projects:</div>
          <ul>
            <li>Video hosting Rutube (Backbone)</li>
            <li>Development site and secure online voting system for the TEFI award</li>
            <li>Broadcasts service NTV Plus (Backbone)</li>
          </ul>
          <div>Developed the interface part of the online video
            editor for NTV Plus which makes it possible to
            cut highlights from the live broadcast (Angular 2, D3.js).
          </div>
          <div>Made content management system for NTV Plus
            (single-page application using Angular 2).
          </div>
        </div>),
    },
  },
  {
    year: 2012,
    type: 'work',
    content: {
      position: 'Web Developer',
      company: 'BARS GROUP',
      location: 'Kazan (Russia)',
      description: (
        <div>
          <div>Developed project for monitoring Cultural Heritage.</div>
          <div>Developed front-end part of project BARS.Accessible Environment.</div>
        </div>),
    },
  },
  {
    year: 2007,
    type: 'work',
    content: {
      position: 'Web Developer',
      company: 'Freelance',
      location: 'Kazan (Russia)',
      description: (
        <div>
          <div>It was my hobby.</div>
          <div>I created different websites using CMS such as Wordpress,
            Joomla, NetCat, 1C Bitrix.
          </div>
        </div>),
    },
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
