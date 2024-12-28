import LottieRender from '../../utils/LottieRender'
import './Footer.css'
import footer_animation from '/src/assets/animations/footer_animation.json'
import mail_animation from '/src/assets/animations/card_animation.json'
import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id='footer_container'>
        <div className='box_footer'>
          <div className='box_footer_content1'>
            <div id='text_footer_container'>
              <h1 id='text_footerh'>ULISES</h1>
              <p id='text_footerp'>
                Crafting engaging user experiences with passion
              </p>
            </div>
            <div className='render_footer_container'>
              <LottieRender
                animationData={footer_animation}
                width_w='100%'
                height_h='100%'
              />
            </div>
          </div>
          <div className='container_footer_content'>
            <div className='box_footer_content2'>
              <motion.h2
                className='h2_footer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                INSIGHTS
              </motion.h2>
              <motion.h2
                className='h2_footer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <NavLink to='/about'>
                ABOUT ME
                </NavLink>
              </motion.h2>
              <motion.h2
                className='h2_footer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <NavLink to='/portfolio'>
                MY WORK
                </NavLink>
              </motion.h2>
            </div>
            <div className='container_footer_content2'>
              <div className='box_footer_content3'>
                <motion.h2
                  className='h2_footer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >

                  INSTAGRAM
                </motion.h2>
                <motion.h2
                  className='h2_footer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LINKEDIN
                </motion.h2>
                <motion.h2
                  className='h2_footer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  RESUME
                </motion.h2>

                <motion.h2
                  className='h2_footer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  MEDIUM
                </motion.h2>
              </div>
              <div className='box_footer_content4'>
                <LottieRender
                  animationData={mail_animation}
                  width_w='21vw'
                  height_h='21vh'
                />
                <motion.h2
                  className='h2_footer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  CONT@CT
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
        <p id='greetings'>© 2024 Jose Ulises Suarez</p>
      </div>
    </>
  )
}

export default Footer
