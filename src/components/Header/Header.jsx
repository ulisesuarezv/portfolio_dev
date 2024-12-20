import { Button } from '@chakra-ui/react'
import './Header.css'
import NavBar from './NavBar/NavBar'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [color, setColor] = useState('#0a2472')

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setColor((prevColor) =>
          prevColor === '#0a2472' ? '#E1DD8F' : '#0a2472'
        )
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id='header'>
      <NavLink to='/'>
        <motion.div
          className='img_logo_container'
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: -20 }
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <img src='/public/ulises_logo.jpg' alt='' id='logo_img' />
        </motion.div>
      </NavLink>
      <motion.div
        className='nav_header_container'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavBar />
      </motion.div>
      <NavLink to='/contact'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button colorScheme='whiteAlpha' style={{ color: color }}>
            CONTACT
          </Button>
        </motion.div>
      </NavLink>
    </section>
  )
}

export default Header
