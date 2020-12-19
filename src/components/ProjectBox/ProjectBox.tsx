import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from 'theme-ui'
import { ProjectProps } from '../Portfolio/Portfolio.models'

export const ProjectBox: FunctionComponent<
  ProjectProps & { width: string }
> = ({ title, technologies, image, url, width }): JSX.Element => {
  const [active, setActive] = useState(false)

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
            as="h2"
            variant="styles.h2"
            sx={{
              color: 'background',
              position: 'absolute',
              whiteSpace: 'nowrap',
              zIndex: 1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
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
          <Button variant="secondary" sx={{ mt: 4 }}>
            Explore
          </Button>
        </Flex>
      )}
    </Box>
  )
}
