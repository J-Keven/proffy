import axios from 'axios'
import { deflate } from 'zlib'

const api = axios.create({
  baseURL:"http://192.168.0.16:3333"
})

export default api