import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react'
import './CardExperience.css'
import data from '/src/data/timeline.js'
import icons from '/src/data/timelineIcons.js'
import LottieRender from '../../utils/LottieRender'
import animation from '/src/assets/animations/card_box_animation.json'

const CardExperience = () => {
  return (
    <Box display='flex' flexDir='column' gap='10rem'>
      {icons.map ((item) => (
      <Card
      key={item.title}
      borderRadius='25px'
      height='40vh'
      width='70vw'
      p='2vh'
      backgroundColor=' hsla(323, 14%, 16%, 1)'
      bgImage='radial-gradient(circle at 40% 20%, hsla(35.55555555555556, 93%, 54%, 1) 0%, transparent 50%), radial-gradient(circle at 80% 0%, hsla(16.03960396039604, 85%, 53%, 1) 0%, transparent 50%), radial-gradient(circle at 0% 50%, hsla(357.92079207920796, 82%, 52%, 1) 0%, transparent 50%)'
      backgroundPosition='center'
      backgroundBlendMode='normal, normal, normal, normal'
      >
        <CardHeader>
            <h2 className='title_date_card'>{item.description}</h2>
          </CardHeader>
          <Box position='absolute' right='0' top='0'>
            <LottieRender
              animationData={animation}
              width_w='25vw'
              height_h='25vh'
            />
          </Box>
          <CardBody
            display='flex'
            justifyContent='flex-end'
            flexDir='column'
            gap='10px'
          >
            <h1 className='title_card'>{item.title}</h1>
            <Box display='flex' gap='1vw' paddingTop='1rem'>
            <img className='img_icons' src={item.icon_1} alt="" />
            <img className='img_icons' src={item.icon_2} alt="" />
            <img className='img_icons' src={item.icon_3} alt="" />
            <img className='img_icons' src={item.icon_4} alt="" />
            <img className='img_icons' src={item.icon_5} alt="" />
            <img className='img_icons1' src={item.icon_6} alt="" />
            <img className='img_icons1' src={item.icon_7} alt="" />
            <img className='img_icons1' src={item.icon_8} alt="" />
            </Box>
          </CardBody>
      </Card>
        ))}
      {data.map((item) => (
        <Card
          key={item.title}
          borderRadius='25px'
          height='40vh'
          width='70vw'
          p='2vh'
          backgroundColor=' hsla(323, 14%, 16%, 1)'
          bgImage='radial-gradient(circle at 40% 20%, hsla(35.55555555555556, 93%, 54%, 1) 0%, transparent 50%), radial-gradient(circle at 80% 0%, hsla(16.03960396039604, 85%, 53%, 1) 0%, transparent 50%), radial-gradient(circle at 0% 50%, hsla(357.92079207920796, 82%, 52%, 1) 0%, transparent 50%)'
          backgroundPosition='center'
          backgroundBlendMode='normal, normal, normal, normal'
        >
          <CardHeader>
            <h2 className='title_date_card'>{item.date}</h2>
          </CardHeader>
          <Box position='absolute' right='0' top='0'>
            <LottieRender
              animationData={animation}
              width_w='25vw'
              height_h='25vh'
            />
          </Box>
          <CardBody
            display='flex'
            justifyContent='flex-end'
            flexDir='column'
            gap='10px'
          >
            <h1 className='title_card'>{item.title}</h1>
            <p className='text_card'>{item.description}</p>
          </CardBody>
        </Card>
      ))}
    </Box>
  )
}

export default CardExperience
