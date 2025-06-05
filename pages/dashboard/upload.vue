<script setup>
import { ref } from 'vue';

const handleFileSelect = (event) => {
    const files = event.target.files;
    // Handle file upload logic here (e.g., display previews, send to server)
    console.log('Selected files:', files);
};

const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
};

const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    // Handle file upload logic here for dropped files
    console.log('Dropped files:', files);
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
                    <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Finding Me</h2>
                </div>
                <div class="flex flex-1 justify-end gap-8">
                    <div class="flex items-center gap-9">
                        <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Services</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Portfolio</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">About</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Contact</a>
                    </div>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span class="truncate">Get a Quote</span>
                    </button>
                </div>
            </header>
            <div class="px-40 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div class="flex flex-wrap justify-between gap-3 p-4">
                        <p class="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Showcase Your
                            Business</p>
                    </div>
                    <div class="flex flex-col p-4">
                        <div class="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#426039] px-6 py-14"
                            @dragover="handleDragOver" @drop="handleDrop">
                            <div class="flex max-w-[480px] flex-col items-center gap-2">
                                <p
                                    class="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                                    Drag and drop images here</p>
                                <p class="text-white text-sm font-normal leading-normal max-w-[480px] text-center">Or
                                    click to select files from your computer</p>
                            </div>
                            <input type="file" multiple @change="handleFileSelect" class="hidden" id="file-upload" />
                            <button
                                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2e4328] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                                @click="() => document.getElementById('file-upload').click()">
                                <span class="truncate">Select Files</span>
                            </button>
                        </div>
                    </div>
                    <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                        Accepted file types: JPG, PNG. Maximum file size: 5MB. You can upload up to 10 images.
                    </p>
                </div>
            </div>
            <footer class="flex justify-center">
                <div class="flex max-w-[960px] flex-1 flex-col">
                    <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
                        <div
                            class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                            <a class="text-[#a2c398] text-base font-normal leading-normal min-w-40" href="#">Privacy
                                Policy</a>
                            <a class="text-[#a2c398] text-base font-normal leading-normal min-w-40" href="#">Terms of
                                Service</a>
                        </div>

                    </footer>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>