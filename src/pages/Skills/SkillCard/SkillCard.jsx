import './SkillCard.css'
import { Box } from '@chakra-ui/react'
import Tarjeta from '../../../components/Tarjeta/Tarjeta'
import { motion } from 'motion/react'

const SkillCard = () => {
  return (
    <motion.div
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
    </motion.div>
  )
}

export default SkillCard
