/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { Portfolio } from '../components/Portfolio/Portfolio'
import { Helmet } from 'react-helmet'
import { MyStory } from '../components/MyStory/MyStory'
import { Skills } from '../components/Skills/Skills'
import { Projects } from '../components/Projects/Projects'

// markup
const IndexPage = (): JSX.Element => {
  return (
    <main sx={{ overflow: 'hidden' }}>
      <Helmet>
        <meta charSet="UTF-8" />
        <html lang="en" />
        <title>Coding Yogi</title>
        <meta
          name="description"
          content="A short story and professional portfolio of a yogi traveler, who discovered passion for coding."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2ec4b6" />
        <meta name="msapplication-TileColor" content="#2ec4b6" />
        <meta name="theme-color" content="#2ec4b6" />

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <MyStory />
      <Footer />
    </main>
  )
}

export default IndexPage
