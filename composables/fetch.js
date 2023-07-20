import axios from 'axios'
import {useAuth} from '~/store/auth';

export const useCancelToken = (tokenName) => {
  const cancelToken = () => axios.CancelToken.source()

  const cancelTokens = {}
  let timeoutId
  if (typeof cancelTokens[tokenName] !== typeof undefined) {
    cancelTokens[tokenName].cancel('Operation canceled due to new request.')
  }
  cancelTokens[tokenName] = cancelToken()
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => delete cancelTokens[tokenName], 1000)
  return cancelTokens[tokenName].token
}

export const useApiFetch = () => {
  const config = useRuntimeConfig()
  const token = useAuth().getToken

  const service = axios.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      accept: 'application/json',
      contentType: 'application/json',
    },
  })

  service.interceptors.request.use(
    request => {
      if (token) {
        request.headers['Authorization'] = `Bearer ${token}`
      }
      return request
    },
    error => {
      return Promise.reject(error)
    },
  )

  axios.interceptors.response.use(
    response => response.data,
    error => {
      if (error?.response?.status === 401) {
      }
      return Promise.reject(error?.response)
    },
  )

  return service
}
