
<script setup>
import { ref } from 'vue';

const businessName = ref('');
const contactEmail = ref('');
const phoneNumber = ref('');
const businessDescription = ref('');

// Example image URLs (you'd likely get these from an API or prop)
const uploadedImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBqWA352RW72ZMxWfQn9AlSHs0yEB0aelm1_x-cbqtv99_8tk_F13yAaGvwWGNaAkaadtZDiePAe0tV5Me2xztVcXz_23Nbv0e0Ax1-h9SpSYSI-YzxsYXn3E0a1pxQyai3vtukuan2yWcqj-DmhgdHHkEurJuliwRqAfv9ArQqlxqN-KLE1EOirE7TdCLgWjjONS93d0PZW_yBfI_kezRQc6TgxtEQ64RmP6xE7U0FGDpSWMkxFH_69EV5WhlQpRBQTTYcKznvp6GV",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvTiz0oahL80wvBj2X4eGO4LBnf3M2lNz76zTsNcSfPRs1OG3SsM33fvLeHIUiacAGyHQPqX3v1u8ke9SZDvKSPjJHZXIvbT_3J-q0y07C29N-6rQsHkHMVNMfIJj3Gah1J8akB8iHLSwQcxAe4ByjldBG7rmvWS_FlQuMlDELHH_ymYBfpPKikT_CXf4PhVhHjAkcpBOHTp0q2fbMfHbdudXxfBC7uKztml10pf5vwIrX8YW5T20FZDIhFx_oPAZbB3XE48-WG_W7",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBGPGOopG3U90uP6oh4nYHADNkQfW0lL-NkRkGi46vM3OjmuHyk1cH4YXjE8-Udggsa54mdzBEhpnxyEgSndJE1cJzBMW1qvfJGac-GNLTznyVQ7X6L3nfNqpFcyjHyQ8AtUaPgqudK9cEyZyawu-O2CtqcCbnvbp956Z3muq9e2ZzgvOk1pj1xzwECYuqu1NgDlxAXhMfJsz83DWbMJY5XX8yPlHmpNGyNiH_Izm9ucpgcEfW99oYYSPmbyQomrFvMZji4IIqrNj2G",
];

const updateBusinessInformation = () => {
    // Handle the update logic here, e.g., send data to an API
    console.log('Updating business information:', {
        businessName: businessName.value,
        contactEmail: contactEmail.value,
        phoneNumber: phoneNumber.value,
        businessDescription: businessDescription.value,
    });
    alert('Business information updated!');
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
                        <!-- <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                fill="currentColor"></path>
                        </svg> -->
                    </div>
                    <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Finding Me</h2>
                </div>
                <div class="flex flex-1 justify-end gap-8">
                    <div class="flex items-center gap-9">
                        <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Services</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">About</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Contact</a>
                    </div>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span class="truncate">Get Started</span>
                    </button>
                    <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwDiAtFByKyHGhhEP6Umg9B44KcDHz4jD6Jwe9r3QgyA4BpCoB5OXF06VtUwLN51jsSnrjydkVaABpav5rtnMBqXB4RHDvvKrZGBMSvveOjvwXuAxW_JZGZfHPG5Gplj4BfDyJjdfawTXpJCBp5nH9Gdo9FYFrfO_7lVTgjXNyINBiF23MLr6EkYXQWdhhMNBvejDhGjngtNaU3aWCiB_kE86JxIz7oXLvyA6GsNGsJT4gAgklCjPWcnkwPslJZ-eSC_HM4bthzoTj");'>
                    </div>
                </div>
            </header>
            <div class="px-40 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div class="flex flex-wrap justify-between gap-3 p-4">
                        <div class="flex min-w-72 flex-col gap-3">
                            <p class="text-white tracking-light text-[32px] font-bold leading-tight">Business Dashboard
                            </p>
                            <p class="text-[#a2c398] text-sm font-normal leading-normal">Manage your business details
                                and account settings.</p>
                        </div>
                    </div>
                    <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Business
                        Information</h3>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Business Name</p>
                            <input
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] h-14 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
                                v-model="businessName" />
                        </label>
                    </div>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Contact Email</p>
                            <input
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] h-14 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
                                v-model="contactEmail" />
                        </label>
                    </div>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Phone Number</p>
                            <input
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] h-14 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
                                v-model="phoneNumber" />
                        </label>
                    </div>
                    <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label class="flex flex-col min-w-40 flex-1">
                            <p class="text-white text-base font-medium leading-normal pb-2">Business Description</p>
                            <textarea
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] min-h-36 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
                                v-model="businessDescription"></textarea>
                        </label>
                    </div>
                    <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Uploaded
                        Images</h3>
                    <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div v-for="(image, index) in uploadedImages" :key="index" class="flex flex-col gap-3">
                            <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                :style='{ backgroundImage: `url("${image}")` }'></div>
                        </div>
                    </div>
                    <div class="flex px-4 py-3 justify-end">
                        <button
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]"
                            @click="updateBusinessInformation">
                            <span class="truncate">Update Business Information</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
```