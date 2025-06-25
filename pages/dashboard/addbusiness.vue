<template>
    <div class="relative flex size-full min-h-screen flex-col light group/design-root overflow-x-hidden"
        style='font-family: Manrope, "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
            <DashboardHeader />
            <div class="sm:px-5 bg-[#f9fbf9] md:px-40 flex flex-col justify-center py-5    ">
                <div class="layout-content-container flex flex-col max-w-[960px]  flex-1">
                    <div class="flex flex-wrap justify-between gap-3 p-4">
                        <div class="flex min-w-72 flex-col gap-3">
                            <p class=" tracking-light text-3xl font-extrabold leading-tight text">Create
                                Business
                            </p>
                            <p class="text-secondary text-sm font-normal leading-normal">Manage your business details
                                and account settings.</p>
                        </div>
                    </div>

                    <h3 class="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Business
                        Information</h3>
                    <div class="  px-s rounded-md">

                        <div class="flex max-w-[480px] flex-wrap  items-end gap-4 px-4 py-3">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-gray-900 text-base font-medium leading-normal pb-2">Business Name</p>
                                <input
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-0 focus:ring-0 border border-gray- focus:border-primary h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                                    v-model="businessName" />
                            </label>
                        </div>
                        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-gray-900 text-base font-medium leading-normal pb-2">Contact Email</p>

                                <input
                                    class="form-input flex w-full min-w-0  focus:border-primary  flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300 h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                                    v-model="contactEmail" />
                            </label>
                        </div>
                        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-gray-900 text-base font-medium leading-normal pb-2">Phone Number</p>
                                <input
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300  focus:border-secondary h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                                    v-model="phoneNumber" />
                            </label>
                        </div>
                        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-gray-900 text-base font-medium leading-normal pb-2">location </p>
                                <input
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300  focus:border-secondary h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                                    v-model="location" />
                            </label>
                        </div>
                        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-gray-900 text-base font-medium leading-normal pb-2">Category</p>
                                <select v-model="category"
                                    class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300  focus:border-secondary h-14 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal appearance-none">
                                    <option value="">Select a category</option>
                                    <option value="Food">Food</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Health">Health</option>
                                    <option value="Education">Education</option>
                                </select>
                            </label>
                        </div>

                        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label class="flex flex-col min-w-40 flex-1">
                                <p class="text-gray-900 text-base font-medium leading-normal pb-2">Business Description
                                </p>
                                <textarea
                                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-0 focus:ring-0 border border-gray-300  focus:border-secondary min-h-36 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                                    v-model="businessDescription"></textarea>
                            </label>
                        </div>
                        <h3 v-if="base64Image"
                            class="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Uploaded
                            Images</h3>
                        <div class="flex ">
                            <div class=" w-36 bg-center bg-no-repeat aspect-square bg-contain rounded-xl"
                                :style='{ backgroundImage: `url("${base64Image}")` }'></div>
                        </div>

                        <div class="flex flex-col px-10 sm:px-5">
                            <div @click="triggerFileInput"
                                class="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-secondary  py-14">
                                <div class="flex max-w-[480px] flex-col items-center gap-2">
                                    <p v-if="selectedFile"
                                        class="text-gray-900 text-sm sm:text-xl font-normal leading-normal max-w-[480px] text-center">

                                        Change Logo or Banner</p>
                                    <p v-else
                                        class="text-gray-900 text-sm sm:text-xl font-normal leading-normal max-w-[480px] text-center">

                                        Upload your Business Banner or Logo</p>
                                </div>
                                <input type="file" ref="fileInput" accept="image/*" @change="onFileChange" />

                            </div>
                        </div>
                        <p class="text-gray-600 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                            Accepted file types: JPG, PNG. Maximum file size: 3MB.
                        </p>
                    </div>
                    <div class="flex px-4 py-3 justify-end">
                        <v-btn size='large' :loading="loading"
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
                            @click="upload">
                            <span class="truncate">Update Business Information </span>
                        </v-btn>

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
<script setup lang="ts">
import { ref } from 'vue'
const toast = useToast()
const router = useRouter()
definePageMeta({
    middleware: 'auth'
})


const fileInput = ref<HTMLInputElement | null>(null)
const triggerFileInput = () => {
    fileInput.value?.click()
}

const businessName = ref<string>('')
const contactEmail = ref<string>('')
const phoneNumber = ref<string>('')
const businessDescription = ref<string>('')
const location = ref<string>('')
const category = ref<string>('')
const loading = ref<boolean>(false)


const selectedFile = ref<File | null>(null)
const base64Image = ref<string | null>(null)

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] ?? null;

    if (!file || !file.type.startsWith('image/')) {
        alert('Only image files are allowed!');
        selectedFile.value = null;  
        base64Image.value = '';     
        target.value = '';          
        return;
    }

    selectedFile.value = file;

    const reader = new FileReader();
    reader.onload = () => {
        base64Image.value = reader.result as string;
    };
    reader.readAsDataURL(file);
};

async function upload() {
    loading.value = true
    if (!businessName.value || !contactEmail.value || !phoneNumber.value || !businessDescription.value || !location.value || !category.value) {
        loading.value = false
        return toast.error({
            title: 'error',
            message: "all fields are required"
        })

    }
    try {
        const res = await $fetch('/api/business/addbusiness', {
            method: 'POST',
            body: {
                businessName: businessName.value,
                businessDescription: businessDescription.value,
                businessAddress: location.value,
                businessPhone: phoneNumber.value,
                businessEmail: contactEmail.value,
                businessImage: base64Image.value,
                businessCategory: category.value,
            }

        })
        toast.success({
            title: 'sucess',
            message: res?.message
        })
        router.push('/dashboard')

    } catch (error: any) {
        loading.value = false
        toast.error({
            title: 'error',
            message: error.message
        })

    }
}




</script>