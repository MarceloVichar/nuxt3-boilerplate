const authService = {
  me: async () => {
    return await useApiFetch().get('/client/me')
  },

  updateMe: async (id, data) => {
    return await useApiFetch().post(`/client/user/${id}`, data)
  },

  updatePassword: async (id, data) => {
    return await useApiFetch().put(`/client/user/${id}`, data)
  },

  verifyEmail: async (id, data) => {
    return await useApiFetch().post(`/verify/${id}`, data)
  },

  resendCode: async () => {
    return await useApiFetch().post(`/resend`)
  },
}

export default authService
