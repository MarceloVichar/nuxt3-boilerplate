import Toast, {useToast} from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(Toast, {
    position: 'bottom-center',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    toastClassName: 'custom',
    bodyClassName: ['custom'],
    icon: true,
    rtl: false,
  })
  const toast = useToast()
  NuxtApp.provide(
    'notify',
    (type = 'success', text = '', options = {}) => {
      options = {
        hideProgressBar: true,
        ...options,
      }
      return toast[type](text, options)
    })
})
