import {useAuth} from '@/store/auth'

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()

  const authenticatedRoute = !to.path.startsWith('/auth/')

  if (!auth.isAuthenticated && authenticatedRoute) {
    auth.logout()
    return navigateTo('/auth/login')
  }

  if (auth.isAuthenticated && !authenticatedRoute) {
    return navigateTo('/')
  }

})
