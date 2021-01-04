import { ProjectProps } from './Portfolio.models'

export const itemsList: ProjectProps[] = [
  {
    title: 'WatchBuddy',
    description:
      'Final project of the bootcamp - interactive platform to create watch lists and get crafted recommendations based on the history and favourites.',
    image: '/image/watchbuddy.jpeg',
    url: 'https://watchbuddy.club',
    technologies: ['RoR', 'HTML', 'CSS', 'PostgreSQL', 'JS', 'HEROKU'],
  },
  {
    title: 'Mr Cocktail',
    description:
      'First solo project delivered at Le Wagon bootcamp - fun platform to create cocktails with doses.',
    image: '/image/mr-cocktail.jpeg',
    url: 'https://salty-sands-30827.herokuapp.com/',
    technologies: ['RoR', 'HTML', 'CSS', 'JS', 'HEROKU'],
  },
  {
    title: 'Shorten Me',
    description: 'Simple platform to shorten long links.',
    image: '/image/shorten-me.jpeg',
    url: 'https://shorten-me.netlify.com',
    technologies: ['TS', 'JEST', 'CSS', 'Netlify', 'Parcel'],
  },
  {
    title: 'Wehicle',
    description: 'A marketplace to rend and lend any vehicles you dream of.',
    image: '/image/wehicle.jpg',
    url: 'https://wehicle.herokuapp.com',
    technologies: ['RoR', 'HTML', 'CSS', 'JS', 'HEROKU'],
  },
]
