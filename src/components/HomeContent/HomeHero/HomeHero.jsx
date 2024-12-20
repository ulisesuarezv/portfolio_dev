import { useState } from 'react'
import './HomeHero.css'
import { useEffect } from 'react'
import { motion } from 'motion/react'

const HomeHero = () => {
  const [titulo, setTitulo] = useState('WEB DEVELOPER')
  const [color, setColor] = useState('#0a2472')
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setTitulo((prevTitulo) =>
          prevTitulo === 'WEB DEVELOPER' ? 'TECH ENTHUSIAST' : 'WEB DEVELOPER'
        )
        setColor((prevColor) =>
          prevColor === '#0a2472' ? '#E1DD8F' : '#0a2472'
        )
        setFade(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className='home_hero_intro'
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      initial='hidden'
      animate='visible'
    >
      <h1 id='titulo_home'>Hi, Im Ulises Suarez</h1>
      <h1
        id='titulo_transform'
        className={`animated-title ${fade ? 'fade' : ''}`}
        style={{ color: color }}
      >
        {titulo}
      </h1>
      <p>I create intuitive Websites that connect with the users.</p>
    </motion.div>
  )
}

export default HomeHero
