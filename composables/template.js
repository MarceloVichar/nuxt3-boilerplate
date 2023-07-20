import {useToast} from 'vue-toastification'

export const useNotify = (type = 'success', text = '', options = {}) => {
  const toast = useToast()
  options = {
    hideProgressBar: true,
    ...options,
  }

  return toast[type](text, options)
}
