import axios from "axios";
const postapi = 'http://localhost:4001'
const instance = axios.create({ withCredentials: true, baseURL: postapi, timeout: 3000 })
export const createPost = async (data) => {
  return await instance.post('/create', data)
}
export const fetchAll = async () => {
    return await instance.get('/allPosts')
}