import { Button } from '@chakra-ui/react'
import Header from '../Header/Header'
import './HomeContent.css'
import HomeHero from './HomeHero/HomeHero'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
motion

const HomeContent = () => {
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
    <div className='home_hero_content'>
      <Header />
      <section id='hero_hero'>
        <HomeHero />
        <div className='slider'>
          <NavLink to='/about'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                colorScheme='whiteAlpha'
                w='300px'
                h='50px'
                style={{ color: color }}
              >
                COME ON CLICK ON ME
              </Button>
            </motion.div>
          </NavLink>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
