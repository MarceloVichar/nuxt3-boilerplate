import { defineStore } from 'pinia'
import authService from '~/services/auth'
import profileService from '~/services/profile'
import {navigateTo} from '#app';
export const useAuth = defineStore('auth', {

  state: () => {
    return {
      token: localStorage.getItem('auth.token'),
      user: JSON.parse(localStorage.getItem('user')) || {},
    }
  },

  getters: {
    getToken() {
      return this.token
    },
    isAuthenticated() {
      return !!this.token
    },
    isUserLoaded() {
      return !!this.user.id
    },
  },

  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('auth.token', token)
    },

    setUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },

    login (data) {
      return new Promise((resolve, reject) => {
        authService.login({...data})
          .then((res) => {
            console.log(res)
            this.setToken(res.data?.token)
            resolve(res)
          })
          .catch(err => reject(err))
      })
    },

    register (data) {
      return new Promise((resolve, reject) => {
        authService.register({...data})
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },

    removeLocalUserData() {
      this.token = null
      this.user = {}
      localStorage.removeItem('auth.token')
      localStorage.removeItem('user')
    },

    logout() {
      this.removeLocalUserData()
      navigateTo('/auth/login')
    },

    async fetchUser() {
      return await profileService
        .me()
        .then((response) => {
          this.setUser(response.data)
          return response
        })
        .catch(async (error) => {
          if (error?.response?.status === 401) {
            await this.logout()
          }
        })
    },

    async ensureUserIsLoaded() {
      if (!this.isUserLoaded) {
        return await this.fetchUser()
      }
    },
  },
})
