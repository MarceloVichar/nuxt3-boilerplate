import { useAuth } from '@/store/auth'

export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()
  if (auth.isAuthenticated) {
    await auth.ensureUserIsLoaded()
  } else if (auth.isUserLoaded) {
    await auth.removeLocalUserData()
  }
})
