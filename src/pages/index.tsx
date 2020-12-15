import * as React from 'react'
import { Box } from 'theme-ui'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'

// markup
const IndexPage = (): JSX.Element => {
  return (
    <main>
      <Banner></Banner>
      <About></About>
    </main>
  )
}

export default IndexPage
