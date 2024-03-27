import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://codeboatbackend.netlify.app/api/',
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
