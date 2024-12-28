import { useEffect, useRef } from 'react'
import LottieRender from '../../utils/LottieRender'
import './HeroSkills.css'
import fluid_animation from '/src/assets/animations/fluid_animation.json'
import { Box, Divider, Text } from '@chakra-ui/react'
import scroll_animation from '/src/assets/animations/scroll_animation.json'
import { motion } from 'motion/react'

const HeroSkills = () => {
  const containerRef = useRef(null)
  const position = useRef({ x: 0, y: 0 }) // Posición actual
  const target = useRef({ x: 0, y: 0 }) // Posición objetivo

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current

      if (!container) return

      const { left, top, width, height } = container.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      target.current.x = (e.clientX - centerX) / 20
      target.current.y = (e.clientY - centerY) / 20
    }

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.1
      position.current.y += (target.current.y - position.current.y) * 0.1

      // Aplicar el desplazamiento suavizado
      const container = containerRef.current
      if (container) {
        container.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`
      }

      requestAnimationFrame(animate) // Continuar la animación
    }
    window.addEventListener('mousemove', handleMouseMove)
    animate()
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='hero_skills_container'>
      <motion.div
        className='hero_skills_content'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1 className='title_ref' ref={containerRef}>
          ULISES SUAREZ
        </h1>

        <div
          className='lottie_container
        '
        >
          <LottieRender
            animationData={fluid_animation}
            width_w='40vw'
            height_h='40vh'
          />
        </div>
      </motion.div>
      <Box
        display='flex'
        flexDir='column'
        alignItems='center'
        position='relative'
      >
        <Text
          fontSize='3rem'
          textAlign='center'
          color='#fafafa'
          as='h1'
          fontWeight='700'
          opacity='0.4'
        >
          Scroll Down
        </Text>
        <LottieRender
          animationData={scroll_animation}
          width_w='12vw'
          height_h='12vh'
        />
      </Box>
      <Box w='95vw' h='10vh' display='flex' alignItems='end'>
        <Divider color='#7b7b7b' />
      </Box>
    </div>
  )
}

export default HeroSkills
