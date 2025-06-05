<script setup>
import { ref } from 'vue';

const products = ref([
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1PvKFxkHbeB98LLqJ172i7Ej78XjABD1tY3-jLVgZ8SkcENsaD0g-mkdIK_1fQT5ECyXmhZTVRpXWDm3EW9l0cyxyZMZ2EC1N__Iv-5kWr4yMM7mDxuzw8hjfKRMYUJQsLIV2JxW90hLS_6fuFMUQAjR1Lz29ZGR6qlntF4Fxg3c8xZpBOQyAUBa64P8-dqsJpurUeWJwgKKsot7PN8XOgGRrCw4A5VhmjANZ0VE80bv99DMugdv9FPiuAEBrDs7PMbPla3PzcMYh",
    name: "Handmade Ceramic Mug",
    by: "The Clay Studio",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyRwOoZHngIv5N4mOpx6IU1pN2NCKwdLUcG9Ib3XL3imZGZwpmwAfdjmfboFfjwQgNZXXy2eJD31nxLjhyxYCiFeW7ZsH2d4eBqwGPNbrWxdBOYBnn4jzYvQymYkNMz1ZBvADwxj3lWnXkpiGlTJi0fp13VpW6-WskYo1yEsMceFPo4OXwyqcoUQ0Dt7MkpaOre1EBqVMPqRsi0JqMrq-NM_VZgSe5DOpf8GLSByLCy4gO-CGQlk8q_RAD_bBegWLnBY0dcnbtySpI",
    name: "Vintage Leather Journal",
    by: "The Leather Workshop",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcrkPlkUBkiEoE1VvOwsgTPiKackgXH1goCyHZjMY1CXqapR4QWUN-kAd5jMN3t2_7ZEgrpEWM4FGQGzfD3Eh-ng9lmz7QjUzaq1i5sWXCziO6ClbMglbqCjA-6HPgsSyUKhoFa2vQXhkYyREFJXf4X08t6LlakL5-PZI3QCE1tqA0k4UJrXC9FRPUyn9EY4NQI33SlYOhmz7D--NOw8K9VdHYHkPrU6PghFgKjefJLARBZQGjuTLZBOy1FI8mIx2KgTd4MN9OKUxK",
    name: "Artisan Soap Set",
    by: "The Soapery",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcm1X8tJaBXmsaidg7cpuB3rOLu3rpIHATQ9Dzoxi9og-tLUq14PCIUudy-n-FAxyV0q63K8_N-70xFWu-PpNpYRrywzqN2WVETq2UPPm67RDkGLq9PHxOHMib23YrYqN5jviGLsPsNFupfFDHnkSMCt3gtsUcGMot8A76s9PuibLQyifGXsmGz19OksOieIzMGUiE7Sz0gsu8qjahMWXSHznws8JURNUi3uw33qPJuhKDtZdcs1IWJgca5AxpNUIVq5DuhevxnKyF",
    name: "Knitted Wool Scarf",
    by: "The Knit Nook",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPlZLMYW1EDwB1TqUcY2hI3Pt1WlKXCQTTevDdOr7H1e0RYCpYsA44LfKGBFInyqJZqOfsNJ9IoSLCN0UaoJGt9-I4u25d4f5NElatye8Iwg1d2Wmry8dkF6sRSlu6wFbePDrt-kZMXwyx5LepvWIMVG6yA4-Acw4L7FZ2_sHujBxl5wV6Sqljq1xUHfq7v_qbT-StsXpEnulJD5seIwJuU7XIO_3Qzt9l8lvKWOQru-Y4bEhxFIZz4ckuI_1hC1kIbr2FjBOrZSRI",
    name: "Wooden Puzzle Toy",
    by: "The Woodcraft Shop",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Tov2P8kP3HNOIJkAc75E53QdIhBf4x3IVeuS-QuicTfx28pjPHSqgVOGyakEK5QSr8zNHlmSrGdoLFz_FqRpLVJBMhDn-Gi815qhaW3AX5d-SyUVroD0aMWsnxG9OkFbcMLuUZddmeNqci8JXNbB4e9N4ZOgCUTHdw3wxeHT-2PZKVonYSL0WlDB-I3cPYC8YIhG99nYA2pqj-C0MmeDu4f4Rg_Qh6Pojf8AJ0SlPzl98CRlvXAYTLRCO9vVplEOVFmBzcC2dPg2",
    name: "Organic Cotton Baby Blanket",
    by: "The Baby Boutique",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmH_TNkwnFc9bSTkSgQ6FnH_jHYJpiBmA0ObMoLcrsRo9SbpFWSVIAM_w0HZYBmhLrMyJ68ZSuAx556e7YNraMSBcX3yxqVZz0fMT3wKCxVn47XUHX6K6OQbVg1_lT1PllaqkttcTXhXsaj-l1fhY3PkwvCH0vLhMOb2SSrGoCkxay-nG1eBJ5eRMttsTfng1yXvuNLbMP-a7bGXgQZUnzOXRXipUW3B92yGcSAmoGSa-_ap-GyMLhr8B11LwLBYR1Q50Yrs0w3f5I",
    name: "Hand-Painted Silk Scarf",
    by: "The Silk Studio",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqEztSC8mvhdZR1NKPdTBu5rofyH8Ou6WFXP0ZCamop848-6e5DlvXX9YX5JcZwqKDuHTnejXwyxEywwIQPGuV3aooq5YAUJqhZQG_NRXnrIe2AcVWVB7uLWM1FVO5Jk2RrPVRNt39P7_qTgml5WBBHsdarC36GEUc_wUoYIW1r_I99vbI1bX4BUflfX1pRHUp80bNLNs8sxW2NWC9LwMfHhlCZI88GsFypk64w1S3CwKFoLmk3c_2vLwbeC_0dR7IKOYd6rUv-ZJs",
    name: "Recycled Paper Notebook",
    by: "The Paper Mill",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe2zo-hdOf2n9IVuaj3ozfD1o1z0OoZvilz8fDE5mEnyBmzHAyU2ci9MhDcAP1_IeIvaTvfGqylHKzzRmqTeLrV4spa7oRXBCBQbFsdBw18Xsybl4pC3mrKnTMzaEBVFQlwwqigFi3aPJlrbE0DjSFas4KAYD6K-fEh0KoBPSfSlk44F54XKgoZc7juOgBrX426ChWrihSDy-DuTynUm_p-JduYvLOX0GKCmRM_Jajy4x6nj_jBRZinRILEETTTtXqamNTsyioCaTI",
    name: "Handmade Beaded Bracelet",
    by: "The Bead Boutique",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaAWpCVqLBOEMq6r-1t8I3kRDllkKtJXGAMSefkBZer-I0uSTw55SooW22ABmbBIl05-hqmgQv81rs4R1dKDdAWuISoKZ3z4d6Y5iSQPateJAE2kBAT6_YbvsGqTnNnRMBEg2_zhLwyy4gnpgh7oWS8GJMSWeNFxPWZOBc0DjOTPjyzlCt555R4jVPp0De2Jw0VtUofJuDu1TudgSrSNtVK_QTCpnq5oAmODhYBvg71TQqg5un3Vu7rROK3O0HO-py1WHea69j94m9",
    name: "Upcycled Denim Tote Bag",
    by: "The Denim Depot",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwq5IMgGYRbOVSe6k92G8p85QmIwSjXK-IhxoAHVhzSS7W3sArmUf9vl0l-HY82Ly5Z1tXEdF4noO9SvdEtDEoJTLAKcAGuevcG4qJky-AcZ8JwAQcYnwyiMTA4c0byI6Z29a_DIxG17diDPyA6AQMbUxUSz92JpbRN9y5moChf5wD23wqz9vFQTO8eQirRXUn6VBm8wifk7TM7hk8Sgi2AuW9v_jdh9VNG-Y_IVNN7cuJ_dAAICkfKBY31l8czXgo9uyKGTF2kIyW",
    name: "Hand-Poured Soy Candle",
    by: "The Candle Co.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM5s1vPev8QEKq-a-FsMRKpTE7LhCr-nbK5rFuEOotLUfqvRyEticnFDLrwBnLiCsm1mYjjU5rMKYk1QER6zA1wjL2hBEEeWsDMaGwtmIcXfqYo1TSjlmkUJSfxYTqDd_QZisEIIqoD8TitFKKEyZ5GI1aJaIu2_bZjCfg3La5rHEO9rb_peWdtPErcZlRSid50wOPc3WhRgzDweGS_oBate0hBQ6Da6JteyFH3DdaFOUXiKRcNwO1DPNi5Gcr7_7_DrkVe13lvl22",
    name: "Hand-Carved Wooden Spoon",
    by: "The Woodcarver",
  },
]);
</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden"
    style='font-family: Manrope, "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2e4328] px-10 py-3">
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-4 text-white">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Finding Me</h2>
          </div>
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
                class="text-[#a2c398] flex border-none bg-[#2e4328] items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                  viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
                  </path>
                </svg>
              </div>
              <input placeholder="Search"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2e4328] focus:border-none h-full placeholder:text-[#a2c398] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value="" />
            </div>
          </label>
          <div class="flex gap-2">
            <button
              class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#2e4328] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
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
              class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#2e4328] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
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
          <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div v-for="(product, index) in products" :key="index" class="flex flex-col gap-3 pb-3">
              <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                :style='{ backgroundImage: `url("${product.image}")` }'></div>
              <div>
                <p class="text-white text-base font-medium leading-normal">{{ product.name }}</p>
                <p class="text-[#a2c398] text-sm font-normal leading-normal">By: {{ product.by }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>