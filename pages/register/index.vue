<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');

const signUp = () => {
    // Handle sign-up logic here, e.g., send data to an API
    console.log('Signing up with:', {
        username: username.value,
        email: email.value,
        password: password.value,
    });
    alert('Account created!');
};
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden"
        style='font-family: Manrope, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <header
                class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2e4328] px-10 py-3">
                <div class="flex items-center gap-4 text-white">
                    <div class="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">FindingMe</h2>
                </div>
                <div class="flex flex-1 justify-end gap-8">
                    <div class="flex items-center gap-9">
                        <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">About</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Services</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Contact</a>
                    </div>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span class="truncate">Sign In</span>
                    </button>
                </div>
            </header>
            <div class="px-40 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
                    <h2
                        class="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                        Create your account</h2>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Username</p>
                            <input placeholder="Choose a username"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-14 placeholder:text-[#a2c398] p-4 text-base font-normal leading-normal"
                                v-model="username" />
                        </label>
                    </div>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Email</p>
                            <input placeholder="Your email address"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-14 placeholder:text-[#a2c398] p-4 text-base font-normal leading-normal"
                                v-model="email" />
                        </label>
                    </div>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Password</p>
                            <input type="password" placeholder="Create a password"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-14 placeholder:text-[#a2c398] p-4 text-base font-normal leading-normal"
                                v-model="password" />
                        </label>
                    </div>
                    <div class="flex px-4 py-3">
                        <button
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]"
                            @click="signUp">
                            <span class="truncate">Sign Up</span>
                        </button>
                    </div>
                    <p class="text-[#a2c398] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                        Already have an account? Sign in</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>