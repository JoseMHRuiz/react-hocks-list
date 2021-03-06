const courses = [
  {
    id: 1,
    title: 'Securing React Apps with Auth0',
    slug: 'react-auth0-authentication-security',
    trainerId: 1,
    category: 'JavaScript'
  },
  {
    id: 2,
    title: 'React: The Big Picture',
    slug: 'react-big-picture',
    trainerId: 1,
    category: 'JavaScript'
  },
  {
    id: 3,
    title: 'Creating Reusable React Components',
    slug: 'react-creating-reusable-components',
    trainerId: 1,
    category: 'JavaScript'
  },
  {
    id: 4,
    title: 'Building a JavaScript Development Environment',
    slug: 'javascript-development-environment',
    trainerId: 1,
    category: 'JavaScript'
  },
  {
    id: 5,
    title: 'Building Applications with React and Redux',
    slug: 'react-redux-react-router-es6',
    trainerId: 1,
    category: 'JavaScript'
  },
  {
    id: 6,
    title: 'Building Applications in React and Flux',
    slug: 'react-flux-building-applications',
    trainerId: 1,
    category: 'JavaScript'
  },
  {
    id: 7,
    title: 'Clean Code: Writing Code for Humans',
    slug: 'writing-clean-code-humans',
    trainerId: 1,
    category: 'Software Practices'
  },
  {
    id: 8,
    title: 'Architecting Applications for the Real World',
    slug: 'architecting-applications-dotnet',
    trainerId: 1,
    category: 'Software Architecture'
  },
  {
    id: 9,
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    slug: 'career-reboot-for-developer-mind',
    trainerId: 1,
    category: 'Career'
  },
  {
    id: 10,
    title: 'Web Component Fundamentals',
    slug: 'web-components-shadow-dom',
    trainerId: 1,
    category: 'HTML5'
  }
];

const trainers = [
  { id: 1, name: 'Jose' },
  { id: 2, name: 'Isa' },
  { id: 3, name: 'Alvaro' }
];

const newCourse = {
  id: null,
  title: '',
  trainerId: null,
  category: ''
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  trainers
};
