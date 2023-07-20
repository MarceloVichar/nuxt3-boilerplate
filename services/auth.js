
const authService = {
  login: async (data) => {
    return await useApiFetch().post('/login', data)
  },

  register: async (data) => {
    return await useApiFetch().post('/register', data)
  },

  forgotPassword: async (data) => {
    return await useApiFetch().post('/forgot-password', data)
  },

  resetPassword: async (data) => {
    return await useApiFetch().post('/reset-password', data)
  },
}

export default authService
