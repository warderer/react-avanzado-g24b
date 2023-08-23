import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const loginUserService = (data) => axios.get(`${BASE_URL}/login`, data)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const getAllUsersService = (jwtToken) => axios.get(`${BASE_URL}/users`, { headers: { authorization: `Bearer ${jwtToken}` } })

export {
  loginUserService,
  registerUserService,
  getAllUsersService
}
