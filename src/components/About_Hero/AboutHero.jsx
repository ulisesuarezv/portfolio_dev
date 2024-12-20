import { Box, Divider } from '@chakra-ui/react'
import animationIsa from '../../assets/isita_animacion.mp4'
import './AboutHero.css'
import { motion } from 'motion/react'

const AboutHero = () => {
  return (
    <>
      <div id='about_me_content'>
        <div id='about_me_container'>
          <div className='text_about_me'>
            <div className='h2_p_about'>
              <h2 id='title_about'>about.</h2>
              <h3 id='title_h3_about'>
                FrontEnd Developer based in Sevilla, Spain.
              </h3>
              <p id='text_about'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                atque consequatur? Laboriosam quos illum eos maxime recusandae.
              </p>
            </div>
            <motion.div
              className='animation_isa_container'
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <video src={animationIsa} autoPlay loop muted />
            </motion.div>
          </div>
          <Box w='95vw' display='flex' alignItems='end' justifyContent='center'>
            <Divider color='#490606' />
          </Box>
        </div>
        {/* <Timeline /> */}
      </div>
    </>
  )
}

export default AboutHero
