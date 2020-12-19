import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from 'theme-ui'
import { ProjectProps } from '../Portfolio/Portfolio.models'

export const ProjectBox: FunctionComponent<
  ProjectProps & { width: string }
> = ({ title, technologies, image, url, width }): JSX.Element => {
  const [active, setActive] = useState(false)
  const handleExplore = () => {
    window.open(url, '_blank')
  }
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <Box
      sx={{
        height: 280,
        width,
        position: 'relative',
        m: '0.5%',
        textAlign: 'center',
        transition: 'transform 0.4s',
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.12)',
          zIndex: 1,
          '.inactive-heading': {
            opacity: 1,
            transform: 'translate(-50%, -50%)',
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
                height: '100%',
                width: '100%',
                objectPosition: 'center center',
              }}
            />
          </Flex>
          <Heading
            className="inactive-heading"
            as="h2"
            variant="styles.h2"
            sx={{
              color: 'background',
              position: 'absolute',
              whiteSpace: 'nowrap',
              opacity: 0,
              visibility: 'hidden',
              zIndex: 1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, 0%)',
              transition: 'opacity 0.4s 0.2s, transform 0.4s 0.2s',
            }}
          >
            {title}
          </Heading>
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
