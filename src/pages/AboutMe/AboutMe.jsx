import Header from '../../components/Header/Header'
import './AboutMe.css'
import AboutHero from '../../components/About_Hero/AboutHero'
import Footer from '../../components/Footer/Footer'
import Timeline from '../../components/Timeline/Timeline'

const AboutMe = () => {
  return (
    <>
      <section id='about_me'>
        <Header />
        <AboutHero />
        <Timeline />
        <Footer />
      </section>
      {/* <Footer /> */}
      {/* Falta introducir Footer en section */}
    </>
  )
}

export default AboutMe
