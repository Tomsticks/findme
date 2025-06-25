<template>
    <div>
        <header
            class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ebf2e9] px-3 dark:border-b-[#2f402b] sm:px-10 shadow-sm py-3">

            <HomeLogo />
            <div class="flex flex-1 justify-end items-center gap-8 ">

                <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-avatar class="size-9 sm:size-10" v-bind="props">

                            <v-img alt="John"
                                src="https://i.pinimg.com/736x/71/f3/51/71f3519243d136361d81df71724c60a0.jpg"></v-img>
                        </v-avatar>
                    </template>
                    <v-list>
                        <v-list-item>
                            <div class=" flex gap-4">
                                <svg class="h-6" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                </svg>
                                <span>Settings</span>
                            </div>
                        </v-list-item>
                        <hr class="text-gray-200">
                        <v-list-item>
                            <div class=" flex gap-4">
                                <svg class="h-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                                    </path>
                                </svg>
                                <span>Profile</span>
                            </div>
                        </v-list-item>
                        <hr class="text-gray-200">
                        <v-list-item @click="logout">
                            <div class=" flex gap-4">
                                <svg class="h-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15">
                                    </path>
                                </svg>
                                <span>Logout</span>
                            </div>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const { $getLocalStorage, $setLocalStorage, $removeLocalStorage }: any = useNuxtApp()
const router = useRouter()

const user = $getLocalStorage('user_id')


const logout = async (): Promise<void> => {
    const res = await fetch(`/api/auth/signout`, {
        method: 'POST'
    })
    console.log(await res.json());
    $removeLocalStorage('user_id')
    if (res) {
        setTimeout(() => {
            
            router.push('/login')
        }, 1000);
}
    // window.reload
}
</script>