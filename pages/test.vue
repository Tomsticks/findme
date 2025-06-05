<template>
    <div>
        <input type="file" accept="image/*" multiple @change="handleFile" />
        <div v-if="base64" class="mt-4">
            <p>Base64 Output:</p>
            <textarea class="w-full h-48" readonly>{{ base64 }}</textarea>
            <!-- <img :src="base64" alt="Preview" class="mt-4 max-w-sm" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { toBase64 } from '@/server/utils/tobase64'

const base64 = ref<string[]>([])


const handleFile = async (event: Event) => {
    const input = event.target as HTMLInputElement
    const file = input.files
    if (!input.files) return

    const files = Array.from(input.files)
    base64.value = await Promise.all(files.map(toBase64))

    const res = await $fetch('/api/business/addbusiness', {
        method: 'POST',
        body: {
            images: base64.value
        }
    })
    console.log('Uploaded Images:', res)


}
</script>