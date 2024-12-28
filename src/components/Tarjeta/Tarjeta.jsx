import LottieRender from '../../utils/LottieRender'
import './Tarjeta.css'
import { Box, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'
import animation from '/src/assets/animations/card_box_animation.json'

const Tarjeta = ({ header, texto }) => {
  return (
    <Card
      h='75vh'
      w='90vw'
      bgImage='/public/background_card.jpg'
      border='6px solid white'
      borderRadius='25px'
      backgroundPosition='center'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <CardBody>
        <Box position='absolute' right='0' top='0'>
          <LottieRender
            animationData={animation}
            width_w='40vw'
            height_h='40vh'
          />
        </Box>
        <Stack
          position='absolute'
          bottom='16'
          left='8'
          w='50vw'
          h='35vh'
          p='5vh'
          gap='1.5rem'
        >
          <Heading
            color='#222222'
            fontSize='55px'
            fontWeight='700'
            fontFamily='Overlock, sans-serif'
          >
            {header}
          </Heading>
          <Text color='#222222' opacity='0.7' fontSize='25px'>
            {texto}
          </Text>
          <Box display='flex' gap='1vh'>
            <img
              src='./public/icons/js_logo.png'
              alt=''
              className='icons_languages'
            />
            <img
              src='./public/icons/react_logo.png'
              alt=''
              className='icons_languages'
            />
            <img
              src='./public/icons/html_logo.png'
              alt=''
              className='icons_languages'
            />
            <img
              src='./public/icons/css_logo.png'
              alt=''
              className='icons_languages'
            />
            <img
              src='./public/icons/chakra_logo.png'
              alt=''
              className='icons_languages'
            />
            <img
              src='./public/icons/mongo_logo.png'
              alt=''
              className='icons_languages_w'
            />

            <img
              src='./public/icons/insomnia_logo.png'
              alt=''
              className='icons_languages_w'
            />
            <img
              style={{ width: '90px' }}
              src='./public/icons/api_logo.png'
              alt=''
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default Tarjeta
