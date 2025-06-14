<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const toast:any = useNuxtApp().$toast

const name = ref<string>('')
const username = ref<string>('')
const email = ref<string>('')
const phone = ref<string>('')
const password = ref<string>('')

interface RegisterCredentials {
    name: string
    username: string
    phone: string
    email: string
    password: string
}

const register = async (): Promise<void> => {
    const credentials: RegisterCredentials = {
        name: name.value,
        username:username.value,
        password: password.value,
        email: email.value,
        phone:phone.value
    }
    if (!credentials.name || !credentials.password || !credentials.email || !credentials.phone || !credentials.username) {
        return alert('all fields are Required')
    }
    try {
        const res = await $fetch('/api/auth/signup', {
            method: 'POST',
            body: {
                email: credentials.email,
                username: credentials.username,
                phone: credentials.phone,
                password: credentials.password,
                name:credentials.name
            }
        })
        console.log(res);
    
        toast.success(res.message)
    } catch (error) {
        console.log(error);


    }





}
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden"
        style='font-family: Manrope, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <HomeHeader class=" hidden sm:block" />
            <div class="px-10 sm:px-40 flex flex-1 justify-center ">
                <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
                    <h2
                        class="text-white tracking-light text-[25px] sm:text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                        Create your account</h2>
                    <div>
                        <p class="text-white text-base font-medium leading-normal pb-2">fullname</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your fullname" class="" v-model="name"></v-text-field>
                    </div>

                    <div>
                        <p class="text-white text-base font-medium leading-normal pb-2">username</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your username" class="" v-model="username"></v-text-field>
                    </div>
                    <div>
                        <p class="text-white text-base font-medium leading-normal pb-2">phone</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your phonenumber" class="" v-model="phone"></v-text-field>
                    </div>

                    <div>

                        <p class="text-white text-base font-medium leading-normal pb-2">Email</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your email" class="" v-model="email"></v-text-field>
                    </div>
                    <div>

                        <p class="text-white text-base font-medium leading-normal pb-2">Password</p>
                        <v-text-field bgColor="#21301c" color="#426039" variant="outlined"
                            placeholder="Enter your password" class="" v-model="password" type="password"></v-text-field>
                    </div>
                    <div class="flex px-4 py-3">
                        <button
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]"
                            @click="register">
                            <span class="truncate">Sign Up</span>
                        </button>
                    </div>
                    <p @click="$router.push('/login')" class="text-[#a2c398] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                        Already have an account? Sign in</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>