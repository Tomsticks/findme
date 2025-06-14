export default defineNuxtPlugin(async () => {
  const user: any = useState('user', () => null)
    if (!user.value) {
      try {
        const fetchedUser: any = await $fetch('/api/getindex') 
        user.value = fetchedUser.user[0]
      } catch(error) {
        user.value = null
        
      }
    }
  })
  