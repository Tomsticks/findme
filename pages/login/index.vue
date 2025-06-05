<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
    // Handle login logic here, e.g., send data to an API
    console.log('Logging in with:', {
        username: username.value,
        password: password.value,
    });
    alert('Logged in successfully!');
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
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">FindingMe</h2>
                </div>
                <div class="flex flex-1 justify-end gap-8">
                    <div class="flex items-center gap-9">
                        <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">About</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Contact</a>
                    </div>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span class="truncate">Sign up</span>
                    </button>
                </div>
            </header>
            <div class="px-40 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-1">
                    <h2
                        class="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                        Welcome back</h2>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Username</p>
                            <input placeholder="Enter your username"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] h-14 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
                                v-model="username" />
                        </label>
                    </div>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Password</p>
                            <input type="password" placeholder="Enter your password"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] h-14 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
                                v-model="password" />
                        </label>
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
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>