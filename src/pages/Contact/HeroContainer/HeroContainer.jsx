import LottieRender from '../../../utils/LottieRender'
import scroll_animation from '/src/assets/animations/scroll_animation.json'
import './HeroContainer.css'
import { Text } from '@chakra-ui/react'

const HeroContainer = () => {
  return (
    <div className='contact_hero_content'>
      <h1 className='title_contact'>Feel Convinced Yet?</h1>
      <p className='p_contact'>Get in touch down below :D</p>
      <div className='aniamtion_hero_contact'>
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
          width_w='100%'
          height_h='12vh'
        />
      </div>
    </div>
  )
}

export default HeroContainer
