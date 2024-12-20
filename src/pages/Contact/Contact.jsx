import Footer from '../../components/Footer/Footer'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import './Contact.css'
import HeroContainer from './HeroContainer/HeroContainer'

const Contact = () => {
  return (
    <section id='section_contact'>
      <Header />
      <div className='contact_hero_container'>
        <HeroContainer />
      </div>
      <div className='form_container'>
        <Form />
      </div>
      <Footer />
    </section>
  )
}

export default Contact
