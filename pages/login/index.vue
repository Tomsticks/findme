<script setup lang="ts">
import { ref } from 'vue'
const toast = useToast()
import { useRouter } from 'vue-router'
const { $setLocalStorage, $getLocalStorage, $removeLocalStorage }:any = useNuxtApp()
const router = useRouter()

const email = ref < string > ('')
const password = ref < string > ('')
const visible = ref < boolean > (false)
const loading = ref < boolean > (false)

interface LoginCredentials {
    email: string
    password: string
}
const login = async (): Promise<void> => {
 loading.value = true
    const credentials: LoginCredentials = {
        email: email.value,
        password: password.value,
    }
    if (!credentials.email || !credentials.password) {
        loading.value = false
        return toast.error({
            title: 'Error!',
            message: 'All fields are required'
      })
    }
    try {
        const res:any = await $fetch('/api/auth/signin', {
            method: 'POST',
            body: {
                email: credentials.email,
                password: credentials.password
            }
        })
        $setLocalStorage('user_id', res.user.id)
        if (res.status === 'success') {
            setTimeout(() => {
                
                router.push('/dashboard')
            }, 1000);
        }
        toast.success({
            title: 'Success',
        message:res.message
    })
    } catch (error: any) {
        loading.value = false
        toast.error({
            title: 'Error',
            message: error.message
        })
        // alert(error);
        
        
    }
   




}
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col dark:bg-[#162013] dark group/design-root overflow-x-hidden"
        style='font-family: Manrope, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <HomeLogo class="  fixed sm:block" />
            <div class=" px-10 sm:px-40 flex flex-1 justify-center mt-20 sm:mt-0 sm:items-center  py-5">
                <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-">
                    <h2
                        class="text-gray-900 dark:text-white tracking-light text-3xl font-extrabold sm:text-3xl  leading-tight  text-left pb-3 pt-5">
                        Welcome Back</h2>
                    <div>
                        <p class="dark:text-[#a2c398] text-lg font-normal leading-normal pb-3 pt-1  ">
                            Don't have an account? <span @click="$router.push('/register')"
                                class="text-primary dark:text-white font-extrabold text-lg">Create an
                                Account</span>,<br>
                            it takes less than a minute
                        </p>
                    </div>
                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Email</p>
                        <v-text-field class="b  text-gray-900 dark:text-white rounded-md" color="#426039"
                            variant="outlined" placeholder="Enter your email" v-model="email"></v-text-field>
                    </div>
                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Password</p>
                        <v-text-field class="  text-gray-900 dark:text-white rounded-md" color="#426039"
                            variant="outlined" @click:append-inner="visible = !visible"
                            :type="visible ? 'text' : 'password'"
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" placeholder="Enter your password"
                            v-model="password"></v-text-field>
                    </div>

                    <div class="flex px-4 py-3">
                        <v-btn size='large' :loading="loading"
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden hover:bg-[#53d22c]  h-12 px-4 flex-1 bg-[#093FB4] text-[#121810] text-sm font-bold leading-normal tracking-[0.015em]"
                            @click="login">
                            <span class="truncate text-white">Login</span>
                        </v-btn>
                    </div>

                    <p class="text-[gray]   text-md font-normal leading-normal pb-3 pt-1 px-4 underline">Forgot
                        password?</p>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>