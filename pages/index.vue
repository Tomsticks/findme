<script setup>
import { ref } from 'vue';

const categories = ref([
  { name: 'All', active: true },
  { name: 'Ceramics', active: false },
  { name: 'Leather', active: false },
  { name: 'Textiles', active: false },
]);

const products = ref([
  {
    category: 'Ceramics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1PvKFxkHbeB98LLqJ172i7Ej78XjABD1tY3-jLVgZ8SkcENsaD0g-mkdIK_1fQT5ECyXmhZTVRpXWDm3EW9l0cyxyZMZ2EC1N__Iv-5kWr4yMM7mDxuzw8hjfKRMYUJQsLIV2JxW90hLS_6fuFMUQAjR1Lz29ZGR6qlntF4Fxg3c8xZpBOQyAUBa64P8-dqsJpurUeWJwgKKsot7PN8XOgGRrCw4A5VhmjANZ0VE80bv99DMugdv9FPiuAEBrDs7PMbPla3PzcMYh',
    name: 'Handmade Ceramic Mug',
    by: 'The Clay Studio',
    price: '$25',
    location: 'San Francisco, CA',
  },
  {
    category: 'Ceramics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8LIVPfkCO4aWWBReb98OouRWHNZisYEHYfrEqk4niOsymgiUwxPLHriRGk2-QDi6JcoKByDGn-d83upt2z3rVjVzuQw2szBWwwVhi0mHCwS_iaulsKo8TyeWcGcNTsCjD2gQ_2natjsHz8I5562Jgf5R9OL9kTbLHZ6mNV6kO3nxkOTIqLIqs5JDRrb21KoE_4_iStA3zLp4ZrHdlAeCaxYzdAi7J-2AJOswKYZtV_dG4bv-m5HL-BoH0VzAFpJz5jHJmb8v5pOLp',
    name: 'Ceramic Vase',
    by: 'The Clay Studio',
    price: '$45',
    location: 'San Francisco, CA',
  },
  {
    category: 'Ceramics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8cCr-JNWHCMjpZe8nbvDQZdjs34iv6gE3Zy9u66VOY2cBTuF3Unq4oUEULfDe1auKcCCsfA81tXnV0MBtlvc_sWtx7Wx8-8S1JxiqaybW06Yfk4ljNwLXefU-02amqi4xcdWczjz-D9FDHKOL_2OrzrEV0CIV1GAmKdYdLTBTbwuj93KWPE8mbveYc-Ffwssj68S7iBpwOffKPbxa6hZND0akKCui1chQcH0E-aPnZcjzlyVkcxl97_9Kp4uT30VMc07vf0GDSMc9',
    name: 'Ceramic Bowl',
    by: 'The Clay Studio',
    price: '$30',
    location: 'San Francisco, CA',
  },
  {
    category: 'Leather',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyRwOoZHngIv5N4mOpx6IU1pN2NCKwdLUcG9Ib3XL3imZGZwpmwAfdjmfboFfjwQgNZXXy2eJD31nxLjhyxYCiFeW7ZsH2d4eBqwGPNbrWxdBOYBnn4jzYvQymYkNMz1ZBvADwxj3lWnXkpiGlTJi0fp13VpW6-WskYo1yEsMceFPo4OXwyqcoUQ0Dt7MkpaOre1EBqVMPqRsi0JqMrq-NM_VZgSe5DOpf8GLSByLCy4gO-CGQlk8q_RAD_bBegWLnBY0dcnbtySpI',
    name: 'Vintage Leather Journal',
    by: 'The Leather Workshop',
    price: '$50',
    location: 'Los Angeles, CA',
  },
  {
    category: 'Leather',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHRUC2CsWCl_9JZkOSyoiYvVAVr5kJn7uG7EClWluMHTluV-HUBOSCa_A2k-JcDotPJgg0i0RnB8mes4-QaMUBdWRHeBSCoyo3P3_nVFF-GtDaF1p4SfRbL-Qfvw8gBLUt0bmb6O6qHmJPFwpix0p7jYmIVom4xjjVbkWpIcRooEziUsCTnXwACdlOqbAw3z4Pu_jDxUXPvz1T4uuUFvpvd2pDkCg8X_LRt3EElp9qnsN1g6l-Vyl6hz6roo-KxP8fVokV2Aqa3Wfv',
    name: 'Leather Wallet',
    by: 'The Leather Workshop',
    price: '$35',
    location: 'Los Angeles, CA',
  },
  {
    category: 'Leather',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHmfbTKB5q7v3fUUGr7U31p-OgW8QqC7q2frNrLvWUKCowR7YK0ycH1xTp1qHI_6sC3ZjdVZ10hIjzgbj9jmJC9baIWcJdtsaP7le2-Zw--_eu9lEu7pS62P6mWvqQtN3etxAIM13nT5I4qWM2P9hdO86qzqHRMkoHdE57uB4ZASMHbFw9ACvuJ9sptqQCAKrgyf48maIJNmw9zPG0tD2bZN7leYVQwKWtY-oT5sXb3erb-DGfXZ6zirVnD6fdHpZK4V9YppHz0xIO',
    name: 'Leather Belt',
    by: 'The Leather Workshop',
    price: '$40',
    location: 'Los Angeles, CA',
  },
  {
    category: 'Textiles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcm1X8tJaBXmsaidg7cpuB3rOLu3rpIHATQ9Dzoxi9og-tLUq14PCIUudy-n-FAxyV0q63K8_N-70xFWu-PpNpYRrywzqN2WVETq2UPPm67RDkGLq9PHxOHMib23YrYqN5jviGLsPsNFupfFDHnkSMCt3gtsUcGMot8A76s9PuibLQyifGXsmGz19OksOieIzMGUiE7Sz0gsu8qjahMWXSHznws8JURNUi3uw33qPJuhKDtZdcs1IWJgca5AxpNUIVq5DuhevxnKyF',
    name: 'Knitted Wool Scarf',
    by: 'The Knit Nook',
    price: '$60',
    location: 'New York, NY',
  },
  {
    category: 'Textiles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmH_TNkwnFc9bSTkSgQ6FnH_jHYJpiBmA0ObMoLcrsRo9SbpFWSVIAM_w0HZYBmhLrMyJ68ZSuAx556e7YNraMSBcX3yxqVZz0fMT3wKCxVn47XUHX6K6OQbVg1_lT1PllaqkttcTXhXsaj-l1fhY3PkwvCH0vLhMOb2SSrGoCkxay-nG1eBJ5eRMttsTfng1yXvuNLbMP-a7bGXgQZUnzOXRXipUW3B92yGcSAmoGSa-_ap-GyMLhr8B11LwLBYR1Q50Yrs0w3f5I',
    name: 'Hand-Painted Silk Scarf',
    by: 'The Silk Studio',
    price: '$75',
    location: 'New York, NY',
  },
  {
    category: 'Textiles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Tov2P8kP3HNOIJkAc75E53QdIhBf4x3IVeuS-QuicTfx28pjPHSqgVOGyakEK5QSr8zNHlmSrGdoLFz_FqRpLVJBMhDn-Gi815qhaW3AX5d-SyUVroD0aMWsnxG9OkFbcMLuUZddmeNqci8JXNbB4e9N4ZOgCUTHdw3wxeHT-2PZKVonYSL0WlDB-I3cPYC8YIhG99nYA2pqj-C0MmeDu4f4Rg_Qh6Pojf8AJ0SlPzl98CRlvXAYTLRCO9vVplEOVFmBzcC2dPg2',
    name: 'Organic Cotton Baby Blanket',
    by: 'The Baby Boutique',
    price: '$55',
    location: 'New York, NY',
  },
]);

const activeCategory = ref('All');

const filteredProducts = (category) => {
  if (category === 'All') {
    return products.value;
  }
  return products.value.filter((product) => product.category === category);
};

const activateCategory = (categoryName) => {
  activeCategory.value = categoryName;
  categories.value.forEach((category) => {
    category.active = category.name === categoryName;
  });
};
</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col bg-[#171f14] dark group/design-root overflow-x-hidden"
    style='font-family: Manrope, "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2f402b] px-10 py-3">
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-4 text-white">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Crafty</h2>
          </div>
          <v-btn>kdfhjdj</v-btn>
          <div class="flex items-center gap-9">
            <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
            <a class="text-white text-sm font-medium leading-normal" href="#">Shop</a>
            <a class="text-white text-sm font-medium leading-normal" href="#">Sell</a>
          </div>
        </div>
        <div class="flex flex-1 justify-end gap-8">
          <label class="flex flex-col min-w-40 !h-10 max-w-64">
            <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                class="text-[#a4be9d] flex border-none bg-[#2f402b] items-center justify-center pl-4 rounded-l-xl border-r-0"
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
                value="" />
            </div>
          </label>
          <div class="flex gap-2">
            <button
              class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[red] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div class="text-white" data-icon="Heart" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                  viewBox="0 0 256 256">
                  <path
                    d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z">
                  </path>
                </svg>
              </div>
            </button>
            <button
              class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#2f402b] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div class="text-white" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                  viewBox="0 0 256 256">
                  <path
                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z">
                  </path>
                </svg>
              </div>
            </button>
          </div>
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFR-DKZkEwxKg1qvUaVoZ0qFFYbcZ9Iq0MNRlYKD1odM73ANEKqVwARnC11ZnkcqpolqRjwM8N6gUtLpbJWTL1kFrt6lA_-FARFl-uSxq2QM0dafGpL3E7CAC4cLAErumno0Hw7bAAyc1XqQmkDG1oggTyoQnntm0lmA4fw4Nxvn9G7f6UfRp1Ebe9R-6uHX2jBesfrSJ9mRj_rZbPfIGLStfKdDT6Eu-nTU5lAjrDjwHEwwxB3Zz5o0VQWTqHENx01Vr22zKVx68j");'>
          </div>
        </div>
      </header>
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p class="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">For You</p>
          </div>
          <div class="flex gap-3 p-3 flex-wrap pr-4">
            <div v-for="category in categories" :key="category.name"
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 cursor-pointer"
              :class="category.active ? 'bg-[#53d22c] text-[#171f14]' : 'bg-[#2f402b] text-white'"
              @click="activateCategory(category.name)">
              <p class="text-sm font-medium leading-normal">{{ category.name }}</p>
            </div>
          </div>

          <template v-if="activeCategory === 'All'">
            <div v-for="category in categories.filter(c => c.name !== 'All')" :key="category.name">
              <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{{
                category.name }}</h2>
              <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div v-for="(product, index) in filteredProducts(category.name)" :key="index"
                  class="flex flex-col gap-3 pb-3">
                  <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    :style='{ backgroundImage: `url("${product.image}")` }'></div>
                  <div>
                    <p class="text-white text-base font-medium leading-normal">{{ product.name }}</p>
                    <p class="text-[#a4be9d] text-sm font-normal leading-normal">By: {{ product.by }}</p>
                    <p class="text-[#a4be9d] text-sm font-normal leading-normal">{{ product.price }} · {{
                      product.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{{
              activeCategory }}</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div v-for="(product, index) in filteredProducts(activeCategory)" :key="index"
                class="flex flex-col gap-3 pb-3">
                <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  :style='{ backgroundImage: `url("${product.image}")` }'></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">{{ product.name }}</p>
                  <p class="text-[#a4be9d] text-sm font-normal leading-normal">By: {{ product.by }}</p>
                  <p class="text-[#a4be9d] text-sm font-normal leading-normal">{{ product.price }} · {{ product.location
                    }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>