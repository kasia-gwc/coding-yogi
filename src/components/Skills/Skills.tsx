/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment } from 'react'
import { Container, Grid, Heading, Text, Box } from 'theme-ui'
import { skillsItems } from './skillsItems'

export const Skills = (): JSX.Element => {
  return (
    <Container id="skills">
      <Heading
        id="heading"
        sx={{
          color: 'secondary',
          my: 5,
          width: '100%',
          textAlign: 'right',
          fontWeight: 'body',
          fontSize: ['80px', '125px'],
        }}
      >
        skills
      </Heading>
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '58% 1fr'],
          width: '100%',
          height: '50vh',
          textAlign: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {skillsItems.map((department) => {
          return (
            <Fragment key={department.title}>
              <Box sx={{ width: '100%' }}>
                <Text
                  sx={{
                    fontSize: ['2rem', '3rem', '4rem'],
                    textAlign: 'right',
                    lineHeight: ['1.5rem', '1.5rem'],
                    mr: 3,
                    mb: 3,
                  }}
                  key={department.title}
                >
                  {department.title}
                </Text>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  fontSize: '1.2rem',
                  flexWrap: 'wrap',
                  textAlign: 'left',
                }}
              >
                {department.skills.map((skill) => (
                  <Text sx={{ mr: 3 }} key={skill}>
                    {skill}
                  </Text>
                ))}
              </Box>
            </Fragment>
          )
        })}
      </Grid>
    </Container>
  )
}
