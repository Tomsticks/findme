<script setup lang="ts">
import { ref } from 'vue'
const toast: any = useNuxtApp().$toast
import { useRouter } from 'vue-router'
const { $setLocalStorage, $getLocalStorage, $removeLocalStorage }:any = useNuxtApp()
const router = useRouter()

const email = ref < string > ('')
const password = ref < string > ('')

interface LoginCredentials {
    email: string
    password: string
}
const login = async (): Promise<void> => {
 
    const credentials: LoginCredentials = {
        email: email.value,
        password: password.value,
    }
    if (!credentials.email || !credentials.password) {
      return  alert('All fields are required')
    }
    try {
        const res:any = await $fetch('/api/auth/signin', {
            method: 'POST',
            body: {
                email: credentials.email,
                password: credentials.password
            }
        })
        console.log(res);
        $setLocalStorage('user_id', res.user.id)
        if (res.status === 'success') {
            router.push('/business')
        }
        alert(res.message)
    } catch (error) {
        alert(error);
        
        
    }
   




}
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden"
        style='font-family: Manrope, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <HomeHeader class=" hidden sm:block" />
            <div class=" px-10 sm:px-40 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-1">
                    <h2
                        class="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                        Welcome back</h2>
                    <div>

                        <p class="text-white text-base font-medium leading-normal pb-2">Email</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your username" class="" v-model="email"></v-text-field>
                    </div>

                    <!-- form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white
                    focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] h-14
                    placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal -->

                    <div>

                        <p class="text-white text-base font-medium leading-normal pb-2">Password</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your password" type="password" class=""
                            v-model="password"></v-text-field>
                    </div>
                    <p class="text-[#a2c398] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Forgot
                        password?</p>
                    <div class="flex px-4 py-3">
                        <button
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#53d22c] text-[#162013] text-base font-bold leading-normal tracking-[0.015em]"
                            @click="login">
                            <span class="truncate">Log in</span>
                        </button>

                    </div>
                    <p @click="$router.push('/register')"
                        class="text-[#a2c398] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                        Don't have an account? Sign Up</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>