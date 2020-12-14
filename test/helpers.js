const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Rohit Pratti',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Rohit Pratti',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Rohit Pratti',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Rohit Pratti',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Rohit Pratti',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
