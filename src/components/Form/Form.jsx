import { useForm } from 'react-hook-form'
import './Form.css'
import { Button } from '@chakra-ui/react'
import { motion } from 'motion/react'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('FORM ENVIADOOO', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form_styles'>
      <div className='form_info'>
        <label htmlFor='name'>Nombre:</label>
        <input
          type=''
          {...register('name', { required: 'El nombre es obligatorio' })}
          className='input_styles'
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className='form_info'>
        <label htmlFor='surname'>Apellido:</label>
        <input
          type='text'
          {...register('surname', { required: 'El apellido es obligatorio' })}
          className='input_styles'
        />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>

      <div className='form_info_container'>
        <label htmlFor='email'>Correo Electronico:</label>
        <input
          type='email'
          {...register('email', {
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: 'El formato del correo no es valido'
            }
          })}
          className='input_styles_twins'
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor='phone'>Phone Number:</label>
        <input
          type='phone'
          {...register('phone', {
            required: 'El numero de telefono no es valido',
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: 'El formato del correo no es valido'
            }
          })}
          className='input_styles_twins'
        />
      </div>

      <div className='form_info'>
        <label htmlFor='description'>Descripcion:</label>
        <textarea
          {...register('description', {
            required: 'La descripcion es obligatoria',
            minLength: { value: 10, message: 'Minimo 10 caracteres' }
          })}
          id='textarea_description'
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='div_submit'
      >
        <Button type='submit' colorScheme='whiteAlpha' w='8vw'>
          Enviar
        </Button>
      </motion.div>
    </form>
  )
}

export default Form