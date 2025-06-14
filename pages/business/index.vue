<script setup lang="ts">
import { ref } from 'vue';

// Define interfaces for better type safety
interface Business {
    name: string;
    locationContact: string; // Combined location and contact for simplicity from the HTML
    imageUrl: string;
    category: string; // Added category for filtering
}

interface Category {
    name: string;
    value: string;
}

// Reactive data
const searchQuery = ref<string>('');
const selectedCategory = ref<string>('all-categories'); // Holds the currently selected category filter

const categories: Category[] = [
    { name: 'All Categories', value: 'all-categories' },
    { name: 'Restaurants', value: 'restaurants' },
    { name: 'Retail', value: 'retail' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Services', value: 'services' },
    { name: 'Health & Wellness', value: 'health-wellness' },
];

const businesses: Business[] = [
    {
        name: 'The Corner Cafe',
        locationContact: '123 Main St, Anytown, USA · (555) 123-4567',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_IAsfji1LwcIXV7ixZ3zZoi9ItqtMuoqN3Ef08W9kNId8pD5YXIBhe9dXlIte_9e-w-BJqa3RwsMvnpCIsk-T419WONLpsVujTUWxZhHpuXz98qFYJZNUzJgsrmm4oy97BX7ketZTPCAcGz-jl9e-CkSmG7sw9SbrqUJ65fkJVULPkrFiQGooa1aE2685MbQoqdWtOf_gXUxd8gOxBNr7WBesBYhit66zOLrhBNLt66EtXx0C0tYx0L63Yo3q4ymqcG3pip3lLn2U',
        category: 'restaurants',
    },
    {
        name: 'Fashion Forward Boutique',
        locationContact: '456 Elm St, Anytown, USA · (555) 987-6543',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwGsKNBffVeHZhbnU-TS6YgcsqLgVwoKcfr1WknE_jtB9yQ8cOfI5QTm0ATdd-rYc_RVIFHNF059Gzi_NGg82FwbOsmz2nDd_yhTGUqeNptuUNtmQGZDevwwkveLVienQRgzx6e3-IMnDtmmR2FeHhvpSaI8gUKQBU3wLCHh5xRv8wv1jfhyLX45CcwvMA34cSsxUQqbiF_kn6WT7ZRNBuOur74ElzMno_Hw_5NSxLde8C_zhuoxu7Oc1upe_a05iCAjWHNZneuNxO',
        category: 'retail',
    },
    {
        name: 'Tech Solutions Inc.',
        locationContact: '789 Oak Ave, Anytown, USA · (555) 456-7890',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSZ1vfUddFwUaw82x1arseTAf2mlk-Y1-auG8Si76eALIIMQRlSdNwuPqtpp-t-bn2c1U3k1-mESh3iJEULiEO7eXl3WlEmXoAPaZYKH8LlolCimbwKsbB0qG-j0rFJFo6cvsZRlO7woCoWRKWLW06AME0M2aOEbwx5Cl2UPtmmX7mMXLn15luVhciK0rKY0Tl6dUdm1l4-t8yRb9O5ePY8Vp74-FelK7bjgZk3bFoNay8KcMZ4LLLsLiANGuMQOkD3EJiP0I-cUR4',
        category: 'services',
    },
    {
        name: 'Serenity Spa',
        locationContact: '101 Pine Ln, Anytown, USA · (555) 321-0987',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJCbld22nEozN4Mo2WhEmAMneV3y_6Xm-vTLMAV4AzHYveCvP3vZQeoimQdQMll_jFGE3iR2-qhLIRC8c_k0p1ZoNqG5zCN811et1RIkrKCoGlIKg-z6_hF5Omrv46l2GrryV0TlnNe1l_AywcuW3FZKsK6nIKiIRi5hR36HN6w6cPxkYDyKz3D8x8a-M3BTEPBzsDOpHQHlxuKQgWdKygqlYNpUlrTJPGbX3G91N2C7oTQfdXH_OU3exkQHK-GtpQfyXw7clyJ0_e',
        category: 'health-wellness',
    },
    {
        name: 'The Book Nook',
        locationContact: '222 Maple Dr, Anytown, USA · (555) 789-0123',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIAZbmKkXT1rgCnLfpu3q6GS7U43aRyRD9fSOgi--CGdYvNGTInVNe9DxkrbhLRv33yKXBTYhJmrjhUFvb5bv6pyaM8xVl_rajN42ENLx6V9mtkTV1faHWOLZqHLUK5Go_O1qm7mWplG_EjHYdkuOmmV6MRbWBU_V9yD3tgSxDOOeA9-S3BE9yQxepI0TVaJgiP-Bj1PbLKXeOoz7JcrCUzvawP71UQIZFPMzp3nWJjaf9RHDLdhT6Z5j2KD_7Dgz_wfqTwiEDrBXW',
        category: 'retail',
    },
    {
        name: 'Green Thumb Garden Center',
        locationContact: '333 Cedar Rd, Anytown, USA · (555) 654-3210',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi628EtfbrkTpQYVVOOzii6jSwPoDZJV30pyrweTYImSZm7Yii7MqG1CWMLioGYXlNhU15lDQrONJxGjoygqMlawuf53ADKjZWBt_3PgEui7SsKKHLELKYpubkgcOKUWe1ZX6awd8OVjLYi_1ACtbmMoMHHDiRwG62niI9LF-l47OKgTv8leTdM7XJIbbc8YTapFysVZo7F7oUx9odYT7zc7l6uVdD4PBtRIfcF33Vj6oUWupkluhameQWJ-j0-OoAo2OxO9CHJ0sx',
        category: 'services', // Assuming gardening services
    },
    {
        name: 'Artisan Bakery',
        locationContact: '444 Birch Ct, Anytown, USA · (555) 234-5678',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSTd8UXEVS6gSjWkRMiaavuDKtEsP530pTy4Cus-aTlDKFPKugTxQGwdNFXoB1h6Bu3IsgEjIrIUY5EuffjOEj8Ar9uf7h8XWmzViwgY3lBt-A5VbZ6fEtXFulbaEmSCba8zA3DCA5H2Co2m3d5b7JNWDCxWQbVaoe3KsdWqluaZRfz27QcwxN6p1RtzDGw4F4grxdrjL08Yx9N19H07BN8CndRmsSxQy0aKqBqvrSJpwd0geLtLN7xMenHBT-dW6xqlLYIouhu6wX',
        category: 'restaurants',
    },
    {
        name: 'Fitness First Gym',
        locationContact: '555 Willow Pl, Anytown, USA · (555) 876-5432',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-9Z8800hU6jkaMVvgDublg378kfMoWI0vXPbN-dSK69B8hgNTaDWBEl-BVaeOSiyWSCZJ-3IVs7a5eOh_dYLp5MIP2mK33yqHE80aSBxo6pJTCCcJky8WiQYxxaYWmZrVJIFX1Ltl6aAo47HXstbYTbP1TgqMSb13dORQAmJkOoiBNfzE7OXAB-tUIXQmUZ9bNP2eJnmfqIU2QdUgs8p07yqRgWwmB6f3OhO_HA9O7bmRgE7r2MsqFxHQfUtbo2_vdXbwuC9lFeny',
        category: 'health-wellness',
    },
    {
        name: 'Pet Paradise Store',
        locationContact: '666 Aspen Way, Anytown, USA · (555) 543-2109',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Kz9-ZyxBP-chC_ny-zgRNFVEIbU3loesxYxbwL-dOWRt3eB3nzIMR6g9Cif9RGCUflBgwRUpz2-OQdidNBiXL-5cyIqg5eQj6ojTSSUUX1-RTFyoWuaDmInRKnSEdd3VGhQk4kwLXwovBhiRapy1CmfqDYj_KnuG_-IGKvR5CN5__d7HbSsZSWNwUXXkDC9FoXMf4VgRIDE85X6MyBBBI1Zv1hhK8AJ5edF4K3TyHG7v1d6N8_uxl7wCpyQW4x7IT-zXX-GRFZP_',
        category: 'retail', // Assuming pet supplies retail
    },
    {
        name: 'Music Makers Studio',
        locationContact: '777 Spruce Ave, Anytown, USA · (555) 109-8765',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe7q1DklATCAyC6zyK2AgG-rpHyC1uL6F53rTS3wsRBUBXdnL0CfFkJmHO5SmHxENhNZn5DdPgrZlMCBGe1aVLn_AJKNiaCAdx65kdAYCOCZHA48fCGKL-1JNo7ADMenuc8X0AYOTX3ch5ZQjX2Gl2TnuQ6rUruziUsojJjP_QB2sVQjmk9daMMpRm7tTctFR9aR9nx-FflMwd0cGEc0kQbtWuo_T1bBS_AlbMwZpSkzWfWAESSmftDjvvGvxLEnoCrh4oUgXBlzbl',
        category: 'services', // Assuming music lessons/studio services
    },
];

// Computed property to filter businesses based on selected category and search query
import { computed } from 'vue';

const filteredBusinesses = computed(() => {
    let result = businesses;

    if (selectedCategory.value !== 'all-categories') {
        result = result.filter(business => business.category === selectedCategory.value);
    }

    if (searchQuery.value) {
        const lowerCaseQuery = searchQuery.value.toLowerCase();
        result = result.filter(
            business =>
                business.name.toLowerCase().includes(lowerCaseQuery) ||
                business.locationContact.toLowerCase().includes(lowerCaseQuery)
        );
    }

    return result;
});

// Methods
const handleSearchInput = (event: Event) => {
    searchQuery.value = (event.target as HTMLInputElement).value;
};

const handleCategoryChange = (event: Event) => {
    selectedCategory.value = (event.target as HTMLInputElement).value;
};
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col bg-[#171f14] dark group/design-root overflow-x-hidden"
        style="--radio-dot-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(140,210,121)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e'); font-family: Manrope, 'Noto Sans', sans-serif;">
        <div class="layout-container flex h-full grow flex-col">
            <!-- <header
                class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2f402b] px-10 py-3">
                <div class="flex items-center gap-8">
                    <div class="flex items-center gap-4 text-white">
                        <div class="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">LocalBiz</h2>
                    </div>
                    <div class="flex items-center gap-9">
                        <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">About</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Services</a>
                        <a class="text-white text-sm font-medium leading-normal" href="#">Contact</a>
                    </div>
                </div>
                <div class="flex flex-1 justify-end gap-8">
                    <label class="flex flex-col min-w-40 !h-10 max-w-64">
                        <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div class="text-[#a4be9d] flex border-none bg-[#2f402b] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
                                    </path>
                                </svg>
                            </div>
                            <input placeholder="Search"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2f402b] focus:border-none h-full placeholder:text-[#a4be9d] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                v-model="searchQuery" @input="handleSearchInput" />
                        </div>
                    </label>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#8cd279] text-[#171f14] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span class="truncate">List Your Business</span>
                    </button>
                    <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuChIRU4xNnJsn_vady5jhVIhIA7uE02CUMQ-4rnSsc9-J3PdbtLB_ujmVgA4wduyKB-n2Xn2WCfjqzpTgg-D3hM3HVxVKKLPrtB5xCwhsCa4NTa9GMvNiXaXnoH58M0Hm72GEzT3GSwNHzpomhrytcdpbZOYOCI6grJ_nkdcfgx7dDKJ8ezapZJeiygu9xD0t6N68wK1NJt9J3U7_zByApuE9WsIID2YQCptNs3Ccw3B4FkZJbJooW5PS-EAAOSo8K4gvXBLvyL0eyJ");'>
                    </div>
                </div>
            </header> -->
            <HomeHeader />
            <div class="gap-1 px-6 flex flex-1 justify-center py-5 h">
                <div class="layout-content-container flex-col w-80 hidden md:flex">
                    <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Categories
                    </h2>
                    <div class="flex flex-col gap-3 p-4">
                        <label v-for="category in categories" :key="category.value"
                            class="flex items-center gap-4 rounded-xl border border-solid border-[#445c3d] p-[15px]">
                            <input type="radio"
                                class="h-5 w-5 border-2 border-[#445c3d] bg-transparent text-transparent checked:border-[#8cd279] checked:bg-[image:var(--radio-dot-svg)] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#8cd279]"
                                name="category-filter" :value="category.value" v-model="selectedCategory"
                                @change="handleCategoryChange" />
                            <div class="flex grow flex-col">
                                <p class="text-white text-sm font-medium leading-normal">{{ category.name }}</p>
                            </div>
                        </label>
                    </div>
                </div>



                <div class="layout-content-container flex flex-col max-w-[960px] flex-1">

                    <div class="flex flex-wrap flex-col justify-between gap-3 p-4">
                        <p class="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                            Explore Businesses
                        </p>
                        <div class=" py-2 md:hidden ">
                            <!-- <h2 class="text-white text-lg font-bold mb-3">Categories</h2> -->

                            <div class="flex flex-wrap gap-2 ">
                                <button v-for=" category in categories" :key="category.value"
                                class="py-1 px-2 rounded-full inline-flex " :class="{
                                        'bg-[#8cd279] text-[#171f14]': selectedCategory === category.value,
                                        'bg-[#2f402b] text-white': selectedCategory !== category.value,
                                    }">
                                <span class="text-sm font-medium">{{ category.name }}</span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div v-for="(business, index) in filteredBusinesses" :key="index"
                            class="flex flex-col gap-3 pb-3">
                            <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                :style="{ backgroundImage: `url('${business.imageUrl}')` }">

                            </div>
                            <div>
                                <p class="text-white text-base font-medium leading-normal">{{ business.name }}</p>
                                <p class="text-[#a4be9d] text-sm font-normal leading-normal">
                                    {{ business.locationContact }}
                                </p>
                            </div>
                            <!-- <img :src="business.imageUrl" alt=""> -->

                        </div>
                        <p v-if="filteredBusinesses.length === 0" class="text-white text-center col-span-full">
                            No businesses found matching your criteria.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* You might need to adjust or add styles here if your custom radio button rendering requires it beyond Tailwind */
</style>