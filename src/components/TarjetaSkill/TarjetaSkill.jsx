import { motion } from 'motion/react'
import LottieRender from '../../utils/LottieRender'
import './TarjetaSkill.css'
import animationJSON from '/public/card_animation2.json'
const TarjetaSkill = () => {
  return (
    <motion.div
      className='skill_card_container'
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
      <div className='skill_card_content'>
        <LottieRender animationData={animationJSON} />
        <p className='font_skill_card'>Speak 3 languages</p>
      </div>
      <div className='skill_card_content'>
        <LottieRender animationData={animationJSON} />
        <p className='font_skill_card'>Tech and creativity</p>
      </div>
      <div className='skill_card_content'>
        <LottieRender animationData={animationJSON} />
        <p className='font_skill_card'>Worked in 5 countries</p>
      </div>
      <div className='skill_card_content'>
        <LottieRender animationData={animationJSON} />
        <p className='font_skill_card'>Always learning new skills</p>
      </div>
    </motion.div>
  )
}

export default TarjetaSkill
