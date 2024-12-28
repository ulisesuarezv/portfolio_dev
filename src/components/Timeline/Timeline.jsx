import CardExperience from '../Card_Experience/CardExperience'
import './Timeline.css'
import LottieRender from '../../utils/LottieRender'
import animation from '/src/assets/animations/animation_about.json'
import { motion } from 'motion/react'

const Timeline = () => {
  return (
    <section id='timeline_section'>
      <motion.div
        className='hero_skills_content'
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
        <h1 className='title_ref'>SKILLS & STORY</h1>
        <div
          className='lottie_container
        '
        >
          <LottieRender
            animationData={animation}
            width_w='40vw'
            height_h='40vh'
          />
        </div>
      </motion.div>
      {/* <motion.div
        initial={false}
        animate={{ scale: 1 }}
        id='container_content_motion'
      >
        <Box
          h='120vh'
          justifyContent='center'
          alignItems='center'
          p='3rem'
          display='flex'
          flexDir='column'
        >
          <Tarjeta
            header='Languages'
            texto='Ive been learning how to code for almost two years, and after all of
            this time of frustration these are the languages and skills that i
            proudly say i learned.'
          />
        </Box>
      </motion.div> */}
      <CardExperience />
    </section>
  )
}

export default Timeline
