import { Box } from "theme-ui"

const departments = [{   
    title: 'frontend',
    skills: ['html'],
  },
  {
    title: 'backend',
    skills: ['netlify', 'heroku']
  }
]

departments.map((dept) => { // 0 -> 
   return <Fragment>
       <Box>
           {dept.title}
       </Box>
       <Box>
           {dept.skills.map((e) =>
           return (e))}
       </Box>
       </Fragment>
   
})