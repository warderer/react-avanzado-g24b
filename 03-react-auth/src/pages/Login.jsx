import logo from '@/assets/react.svg'
import '@/styles/form.css'
import { useState } from 'react'
import axios from 'axios'
import { loginUserService } from '@/services/userService'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      localStorage.setItem("jwt_token", response.data.token)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendData({ email, password })
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='React' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input type='password' className='form-control' id='floatingPassword' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}
export default Login
