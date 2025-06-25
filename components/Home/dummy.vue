<template>
    <div>
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid px-10 py-3"
            :class="isDarkMode ? 'border-b-[#2f402b]' : 'border-b-gray-200'">
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-4" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                    <div class="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 class="text-lg font-bold leading-tight" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                        LocalBiz</h2>
                </div>
                <div class="items-center gap-9 hidden lg:flex">
                    <NuxtLink class="text-sm font-medium leading-normal"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'" to="/">Home</NuxtLink>
                    <NuxtLink class="text-sm font-medium leading-normal"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'" to="/">About</NuxtLink>
                    <NuxtLink class="text-sm font-medium leading-normal"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'" to="/">Services</NuxtLink>
                    <NuxtLink class="text-sm font-medium leading-normal"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'" to="/">Contact</NuxtLink>
                </div>
            </div>
            <div class="flex flex-1 justify-end items-center gap-8">
                <label class="md:flex flex-col min-w-40 !h-10 max-w-64 hidden">
                    <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div class="flex border-none items-center justify-center pl-4 rounded-l-xl border-r-0"
                            :class="isDarkMode ? 'bg-[#2f402b] text-[#a4be9d]' : 'bg-gray-100 text-gray-500'"
                            data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
                                </path>
                            </svg>
                        </div>
                        <input placeholder="Search"
                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow- rounded-xl focus:outline-0 focus:ring-0 border-none focus:border-none h-full px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            :class="isDarkMode ? 'bg-[#2f402b] text-white placeholder:text-[#a4be9d]' : 'bg-gray-100 text-gray-900 placeholder:text-gray-500'" />
                    </div>
                </label>

                <button @click="toggleDarkMode"
                    class="p-2 rounded-full hidden lg:flex items-center justify-center transition-colors"
                    :class="isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'">
                    <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-sun">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="M4.93 4.93l1.41 1.41" />
                        <path d="M17.66 17.66l1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="M4.93 19.07l1.41-1.41" />
                        <path d="M17.66 6.34l1.41-1.41" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-moon">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                </button>

                <div v-if="user" @click="logout"
                    class="bg-center cursor-pointer bg-no-repeat aspect-square bg-cover hidden lg:flex items-center"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                    <span class="truncate">Sign out</span>
                </div>
                <div v-else @click="$router.push('/login')"
                    class="bg-center cursor-pointer bg-no-repeat aspect-square bg-cover hidden lg:flex items-center"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                    <span class="truncate">Sign in</span>
                </div>
                <NuxtLink to="/dashboard"
                    class="hidden lg:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow- rounded-full h-10 px-4 bg-[#8cd279] text-[#171f14] text-sm font-bold leading-normal tracking-[0.015em]">
                    <span class="truncate">List Your Business</span>
                </NuxtLink>

                <div class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
                    :class="isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'">
                    <svg data-slot="icon" class=" h-6 " fill="none" stroke-width="2" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
                        </path>
                    </svg>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

// Assuming these are globally available via NuxtApp, or you might need to import/define them
// if not using Nuxt or if they are specific to your project's utility setup.
// For a standalone Vue app, you might use localStorage directly.
declare const useNuxtApp: any;

const { $getLocalStorage, $setLocalStorage, $removeLocalStorage } = useNuxtApp();
const router = useRouter();

// User state
const user = ref<string | null>(null);

// Dark Mode state
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleDarkMode = (): void => {
    isDarkMode.value = !isDarkMode.value;
    // Save preference to localStorage
    $setLocalStorage('dark_mode_enabled', isDarkMode.value.toString());
    updateHtmlClass();
};

// Function to update the 'dark' class on the HTML element
const updateHtmlClass = (): void => {
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// Load user and dark mode preference on component mount
onMounted(() => {
    user.value = $getLocalStorage('user_id');
    const savedDarkMode = $getLocalStorage('dark_mode_enabled');
    if (savedDarkMode === 'true') {
        isDarkMode.value = true;
    }
    updateHtmlClass(); // Apply the initial theme
});

// Watch for changes in isDarkMode and update HTML class
watch(isDarkMode, () => {
    updateHtmlClass();
});


const logout = async (): Promise<void> => {
    try {
        const res = await fetch(`/api/auth/signout`, {
            method: 'POST'
        });
        const data = await res.json();
        console.log(data);
        $removeLocalStorage('user_id');
        user.value = null; // Clear user state
        router.push('/');
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
</script>

<style scoped>
/* You can add component-specific styles here if needed */
/* Ensure your global Tailwind setup is configured for dark mode with 'class' strategy */
</style>