export default defineNuxtRouteMiddleware(async (to) => {
  const { $getLocalStorage, $setLocalStorage, $removeLocalStorage }: any = useNuxtApp()

  const publicPages = ['/login', '/register']
  if (publicPages.includes(to.path)) return

  try {
    const res: any = await $fetch('/api/getindex')
    const user = res?.user
    if (!user) {
      $removeLocalStorage('user_id')
      return navigateTo('/login')
    } else {
      $setLocalStorage('user_id', user[0].id)
    }
  } catch (error) {
    console.error('Error in auth middleware:', error)
    return navigateTo('/login')
  }
})
