import { ProjectProps } from './Portfolio.models'

export const itemsList: ProjectProps[] = [
  {
    title: 'watchbuddy',
    description:
      'Interactive webapp to create watch lists and get crafted recommendations based on the history and favourites.',
    image: '/image/watchbuddy.jpeg',
    url: 'http://www.watchbuddy.club/',
    technologies: ['RoR', 'HTML', 'CSS', 'PostgreSQL', 'JS', 'HEROKU'],
  },
  {
    title: 'mr cocktail',
    description: 'A fun platform to create cocktails with doses.',
    image: '/image/mr-cocktail.jpeg',
    url: 'https://salty-sands-30827.herokuapp.com/',
    technologies: ['RoR', 'HTML', 'CSS', 'JS', 'HEROKU'],
  },
  {
    title: 'shorten-me',
    description: 'A website to shorten long links.',
    image: '/image/shorten-me.jpeg',
    url: 'https://shorten-me.netlify.com',
    technologies: ['TS', 'JEST', 'CSS', 'Netlify', 'Parcel'],
  },
  {
    title: 'wehicle',
    description: 'A marketplace to rent and lend the vehicles of your dream.',
    image: '/image/wehicle.jpg',
    url: 'https://wehicle.herokuapp.com',
    technologies: ['RoR', 'HTML', 'CSS', 'JS', 'HEROKU'],
  },
]
