import * as React from 'react'
import { Box } from 'theme-ui'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

// markup
const IndexPage = (): JSX.Element => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage
