import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  /* Paso #2: Crear los estados donde guardare la información tecleada */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /* Paso #4: Crear la función que se ejecutara al hacer clic en el botón de enviar del formulario */
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Email: ', email, 'Password: ', password)
  }

  /* Paso #1: Crear el formulario base en JSX */
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}>
          {/* Paso #3: Guardo la información en el estado de */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}

export default SimpleForm
