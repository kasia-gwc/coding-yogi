import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from 'theme-ui'
import { ProjectProps } from '../Portfolio/Portfolio.models'

export const ProjectBox: FunctionComponent<
  ProjectProps & { width: string }
> = ({ title, description, technologies, image, url, width }): JSX.Element => {
  const [active, setActive] = useState(false)
  const handleExplore = () => {
    window.open(url, '_blank')
  }
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <Box
      className="project-card"
      sx={{
        height: 350,
        width: ['100%', null, width],
        position: 'relative',
        m: '0.5%',
        textAlign: 'center',
        transition: 'transform 0.4s',
        '&:hover': {
          cursor: 'pointer',
          transform: ['scale(1) !important', null, 'scale(1.12) !important'],
          zIndex: 1,
          '.inactive-heading': {
            opacity: 1,
            transform: 'translateY(0%)',
            visibility: 'visible',
          },
          '.inactive-text': {
            opacity: 1,
            transform: 'translateY(0%)',
            visibility: 'visible',
          },
        },
      }}
    >
      {!active ? (
        // inactive state
        <Box
          onClick={handleClick}
          sx={{
            height: '100%',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Flex
            sx={{
              height: '100%',
              '&:after': {
                content: "''",
                position: 'absolute',
                height: '100%',
                width: '100%',
                bg: 'rgba(0,0,0,0.50)',
              },
            }}
          >
            <Image
              src={image}
              sx={{
                objectFit: 'cover',
                filter: 'blur(0.4px)',
                height: '100%',
                width: '100%',
                objectPosition: 'center center',
              }}
            />
          </Flex>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              zIndex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Heading
              className="inactive-heading"
              as="h2"
              variant="styles.h2"
              sx={{
                color: 'background',
                filter: 'none',
                whiteSpace: 'nowrap',
                opacity: [1, null, 0],
                visibility: ['visible', null, 'hidden'],
                transition: 'opacity 0.4s 0.2s, transform 0.4s 0.2s',
                transform: ['translateY(0)', null, 'translateY(50%)'],
              }}
            >
              {title}
            </Heading>
            <Text
              className="inactive-text"
              as="p"
              variant="styles.p"
              sx={{
                color: 'white',
                display: ['none', 'block'],
                opacity: [1, null, 0],
                visibility: ['visible', null, 'hidden'],
                transition: 'opacity 0.4s 0.4s, transform 0.4s 0.4s',
                fontSize: 0,
                transform: ['translateY(0)', null, 'translateY(50%)'],
              }}
            >
              {description}
            </Text>
          </Box>
        </Box>
      ) : (
        // active state
        <Flex
          onClick={handleClick}
          sx={{
            bg: 'background',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            border: '1px solid',
            borderColor: '#CECFCF',
            position: 'relative',
            cursor: 'pointer',
            p: 2,
          }}
        >
          <Heading
            as="h2"
            variant="styles.h2"
            sx={{ color: 'primary', fontWeight: 'heading' }}
          >
            {title}
          </Heading>
          <Box>
            {technologies.map((technology, index) => (
              <Text as="span" key={technology}>
                {technology}
                {index !== technologies.length - 1 && ', '}
              </Text>
            ))}
          </Box>
          <Button
            onClick={handleExplore}
            variant="secondary"
            sx={{
              mt: 4,
              transition: '0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            Explore
          </Button>
        </Flex>
      )}
    </Box>
  )
}
