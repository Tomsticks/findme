<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const toast = useToast()
const visible = ref(false)

const name = ref<string>('')
const username = ref<string>('')
const email = ref<string>('')
const phone = ref<string>('')
const loading = ref<boolean>(false)
const password = ref<string>('')
const mail = ref<string>('email')

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
    loading.value = true
    if (!credentials.name || !credentials.password || !credentials.email || !credentials.phone || !credentials.username) {
        loading.value = false
        return toast.error({
            title: 'Error!',
            message: 'All fields are required'
        })
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
    
        toast.success({
            title: 'Success',
        message:res.message
        })
    setInterval(() => {
        
        router.push('/login')
    }, 3000);
    } catch (error:any) {
loading.value = false
        toast.error({
            title: 'Error',
            message: error.message
        })
        // alert(error)
        console.log(error.message);


    }
}
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col bg-white dark:bg-[#162013] group/design-root overflow-x-hidden"
        style='font-family: Manrope, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <HomeLogo class="hidde sm:block" />
            <div class="px-10 sm:px-40 flex flex-1 justify-center ">
                <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
                    <h2
                        class="text-gray-900 dark:text-white tracking-light text-2xl font-extrabold sm:text-3xl  leading-tight px-1 text-left pb-4 pt-5">
                        Create an Account</h2>
                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Full Name</p>
                        <v-text-field
                            class=" text-gray-900 dark:text-white rounded-md placeholder:text-[white]"
                            color="#426039" variant="outlined" placeholder="Enter your full name"
                            v-model="name"></v-text-field>
                    </div>

                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Email</p>
                        <v-text-field class=" text-gray-900 dark:text-white rounded-md"
                            color="#426039" variant="outlined" placeholder="Enter your email"
                            :type="mail"
                            v-model="email"></v-text-field>
                    </div>
                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Username</p>
                        <v-text-field class="  text-gray-900 dark:text-white rounded-md"
                            color="#426039" variant="outlined" placeholder="Enter your username"
                            v-model="username"></v-text-field>
                    </div>
                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Phone</p>
                        <v-text-field class="text-gray-900 dark:text-white rounded-md"
                            color="#426039" variant="outlined" placeholder="Enter your phone number"
                            v-model="phone"></v-text-field>
                    </div>

                    <div>
                        <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Password</p>
                        <v-text-field class="  text-gray-900 dark:text-white rounded-md"
                            color="#426039" variant="outlined" @click:append-inner="visible = !visible"
                            :type="visible ? 'text' : 'password'"
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" placeholder="Enter your password"
                            v-model="password"></v-text-field>
                    </div>
                    <div class="flex px-4 py-3">
                        <v-btn size='large' :loading="loading"
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden hover:bg-[#53d22c]  h-12 px-4 flex-1 bg-[#53d22c] text-[#121810] text-sm font-bold leading-normal tracking-[0.015em]"
                            @click="register">
                            <span class="truncate">Sign Up</span>
                        </v-btn>
                    </div>
                    <p @click="$router.push('/login')"
                        class="text-[#426039] dark:text-[#a2c398] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer">
                        Already have an account? Sign in</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* Add any component-specific styles here if necessary */
</style>