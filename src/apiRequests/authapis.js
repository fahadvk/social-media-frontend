import axios from "axios";



const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4000/',
  timeout: 3000,

})



export const registerapi = async (body) => {
  return await instance.post('/register', { body })
}
export const loginapi = async (body) => {
  return await instance.post('/login', body)
}
export const verifyuser = async () => {
  return await instance.get('/verify')
}
// export const emailCheck = async (email) => {
//   return await instance.get(`/emailexist/${email}`)
// }
