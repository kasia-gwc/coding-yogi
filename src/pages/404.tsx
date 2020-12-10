import React from 'react'
import { Box, Flex, Image } from 'theme-ui'

const NotFound = (): JSX.Element => {
  return (
    <Flex
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image
        src="/image/404.png"
        sx={{ height: '100%', width: '100%', objectFit: 'contain' }}
      ></Image>
    </Flex>
  )
}

export default NotFound
