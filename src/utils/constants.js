const tnwLogo = require('assets/images/tnw.jpg');
const tcLogo = require('assets/images/techcrunch.jpg');
const atLogo = require('assets/images/ars-technica.png');

export const appleMetas = [
  {
    name: 'theme-color',
    content: '#fdce09',
  },
  {
    name: 'full-screen',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-title',
    content: 'News',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: '#fdce09'
  }
];

export const linkPwaMetas = [
  {
    rel: 'apple-touch-icon',
    href: '/favicon.ico',
  }
];

export const menuItems = [
  {
    title: 'The Next Web',
    url: '/the-next-web',
    logo: tnwLogo,
  },
  {
    title: 'TechCrunch',
    url: '/techcrunch',
    logo: tcLogo,
  },
  {
    title: 'Ars Technica',
    url: '/ars-technica',
    logo: atLogo,
  },
];
