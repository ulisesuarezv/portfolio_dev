import { Box, Text } from '@chakra-ui/react'
import './Skills.css'
import Header from '../../components/Header/Header'
import TarjetaSkill from '../../components/TarjetaSkill/TarjetaSkill'
import LottieRender from '../../utils/LottieRender'
import scroll_animation from '/src/assets/animations/scroll_animation.json'
import HeroSkills from '../../components/Hero_Skills/HeroSkills'
import Footer from '../../components/Footer/Footer'
import AboutHero from '../../components/About_Hero/AboutHero'
import Timeline from '../../components/Timeline/Timeline'

const Skills = () => {
  return (
    <section id='skills'>
      <Header />
      <HeroSkills />
      <TarjetaSkill />
      <div id='cards_content_container'>
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
          <AboutHero />
        </Box>
        <Timeline />
        {/* <SkillCard /> */}
      </div>
      <Footer />
    </section>
  )
}

export default Skills
