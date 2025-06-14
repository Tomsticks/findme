<script setup lang="ts">
import { ref } from 'vue';
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

// Define interfaces for better type safety
interface BusinessInfo {
  name: string;
  location: string;
  contactNumber: string;
  email: string;
  website: string;
}

interface Product {
  name: string;
  price: string; // Or number, if you want to perform calculations
  imageUrl: string;
}

// Reactive data
const searchQuery = ref<string>('');
const activeTab = ref<string>('products'); // 'overview', 'products', 'reviews'

const businessDetails: BusinessInfo = {
  name: 'The Pottery Studio',
  location: '123 Clay Street, Anytown, USA',
  contactNumber: '(555) 123-4567',
  email: 'info@thepotterystudio.com',
  website: 'www.thepotterystudio.com',
};

const products: Product[] = [
  {
    name: 'Handmade Ceramic Mug',
    price: '$25',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5j0yZ_R4HW7jMYXTIFdKp4mqVxVy7JWYUuLPj5sWAe_-mqYysn3gDeaS8qzNC0WngdSYbqTH_xU4JPoYipAb_7A0tJ8DgQuvJA-cVMNG9lNdCgSiErV8i0AYMo8gl899gEmNShaQ0wNMITP-gGc_EyTuef1iCeIbAARWQSXE2RmnGPD6lq5GQTPDUqujShAcRtaRfh5DcMzYJ7ZcHseIivqETRJMM1J5qaAHhad5lprfaZoCdDuMEQJBvYGLjj-jQch5GvnKhMjce',
  },
  {
    name: 'Pottery Kit for Beginners',
    price: '$50',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAIVm1Z_yFakMPCCfnfzrmhl0VlPpVNLf8E-JVLgu6Vm9SA03i-omooaMrc9Hz6rTnkty3MgmfFdlnMpFHzQjiZO6bCLleNEB3fXWXATTI6hufh01QzwCdvvcc5inuKDtaV8QVQeqS45KAQAPTHhNwCJnaMOlap_vIYDApdfGLyI7xR6VSw3fdryXv_loXOcgMbZsJkBhM6T-S08N6a3IAGZ7fjAmHExPP6tHRaKBvn2uFMr1fHMIVNzmW4p3ofrESQ9Ll6i2d4L3T',
  },
  {
    name: 'Sculpting Clay Set',
    price: '$30',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeTST_yGN_yUC6OaVyriqepHW6LMC7CqGpaGUPi-dd5dPVLm4lmlk4tXiaGIiwWBS3_Jj1d6QMUrbjxz5Ng7pywaWCV0sHd1izxf4UTCWqfCPKyD94tEtwZU5OTq6Cq7W3S6ya4_E46UXXh6QRe3E7LFI_IcnqSI5FRjD1DE-JdLa4dLg1k16lMLjaC1kuTl8yctav-mc4RUDXfVfvNQYvBu8slnNrcZvUAuZ272dQkXQTkBhP43eBX04IN3pB-tqNmMNwCCDmvib0',
  },
  {
    name: 'Glazing Workshop Voucher',
    price: '$75',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiIyDvIMWMwYLKhsYO05HzAWagRgw52Lq-5fdxZW6ZE5QEhUVAHrfksQi4vS2_VI_F5bbjdgpKQBTxzbEf-Eh2lkZXRSo1akeVfZGtyTLPJ0WmOAliAg71tbduBsM9Od9EKaXFCXXpgyxA4al3Y8F7-qcielS6ZKzZOcuZ6DZCb0MiRxV1Mjz9v1C96BoYJTOHnGvaQKaFx5MYSyzYbrwmuVHI5aB54lezEzU0rxGiZl7l1WtJDhgrO9jlJg10qjiWxBaIv17e3jAM',
  },
  {
    name: 'Ceramic Coasters Set',
    price: '$20',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfvUQVSsXyVkh6whT5uxi-XSb0aQv4lX1f6SIGvpAr3NfFVKNmTOhJX_U9siOD8vcNzdmJplKExy2hap3IG52K0ItpCJb5GMauPXm_uCFdhG0HWf2URpbDEpRapB8VqVvU-dslIusk3Te7vtgD9IU6U5nzQZbRT76ydbyb-vozYthweXloDXu7vc-k9Cms_WaYNNxAzXx4ZNpdIBLiLSV-_BSbRfcYXzw3vniE6Mu8JMNfTgUVS9jmh5VREERV4DfoFpNeUyGc0KQQ',
  },
  {
    name: 'Pottery Wheel Rental',
    price: '$40',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk48LCglCKZ0Lgd7HcQ-ZgiC8rB_rg9NIWj9fPkjOIt7bPulNn9rBg5m-apHl3fbg1N4r-qGSQbuIW88KRgY2tBfUWCde5JKKUH9tZ1C3KNZ_g5V4607F4KFQOc-u3nFLx4SdNlu3XhFVEXnntPf9dKn6YN_Y3UVBd0bS650BnDQfEgbS-pQvm__LJP4gx0NDfuCYTF9lmrkovTi30WXAxmWrgl7VBExFLek550VX_Lm35JR2f2wNUWszhm1BIpfJyfyfeFnoVL9sv',
  },
];

// Methods
const handleSearchInput = (event: Event) => {
  searchQuery.value = (event.target as HTMLInputElement).value;
  // In a real application, you'd likely trigger a search function here
};

const changeTab = (tab: string) => {
  activeTab.value = tab;
};

// You might consider extracting the SVG icons into their own small components
// For simplicity, they are kept inline here.
</script>

<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden"
    style='font-family: Manrope, "Noto Sans", sans-serif;'
  >
    <div class="layout-container flex h-full grow flex-col">
   <HomeHeader/>

      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <div class="flex min-w-72 flex-col gap-3">
              <p class="text-white tracking-light text-[32px] font-bold leading-tight">
                {{ businessDetails.name }}
              </p>
              <p class="text-[#a1c398] text-sm font-normal leading-normal">
                Ceramics and pottery classes
              </p>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#2e4328] text-white text-sm font-medium leading-normal"
            >
              <span class="truncate">Edit Business</span>
            </button>
          </div>

          <div class="p-4 grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#416039] py-5">
              <p class="text-[#a1c398] text-sm font-normal leading-normal">Business Name</p>
              <p class="text-white text-sm font-normal leading-normal">
                {{ businessDetails.name }}
              </p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#416039] py-5">
              <p class="text-[#a1c398] text-sm font-normal leading-normal">Location</p>
              <p class="text-white text-sm font-normal leading-normal">
                {{ businessDetails.location }}
              </p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#416039] py-5">
              <p class="text-[#a1c398] text-sm font-normal leading-normal">Contact Number</p>
              <p class="text-white text-sm font-normal leading-normal">
                {{ businessDetails.contactNumber }}
              </p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#416039] py-5">
              <p class="text-[#a1c398] text-sm font-normal leading-normal">Email</p>
              <p class="text-white text-sm font-normal leading-normal">
                {{ businessDetails.email }}
              </p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#416039] py-5">
              <p class="text-[#a1c398] text-sm font-normal leading-normal">Website</p>
              <p class="text-white text-sm font-normal leading-normal">
                {{ businessDetails.website }}
              </p>
            </div>
          </div>

          <div class="pb-3">
            <div class="flex border-b border-[#416039] px-4 gap-8">
              <a
                class="flex flex-col items-center justify-center pb-[13px] pt-4"
                :class="{
                  'border-b-[3px] border-b-[#50d22c] text-white': activeTab === 'overview',
                  'border-b-[3px] border-b-transparent text-[#a1c398]': activeTab !== 'overview',
                }"
                href="#"
                @click.prevent="changeTab('overview')"
              >
                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Overview</p>
              </a>
              <a
                class="flex flex-col items-center justify-center pb-[13px] pt-4"
                :class="{
                  'border-b-[3px] border-b-[#50d22c] text-white': activeTab === 'products',
                  'border-b-[3px] border-b-transparent text-[#a1c398]': activeTab !== 'products',
                }"
                href="#"
                @click.prevent="changeTab('products')"
              >
                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Products</p>
              </a>
              <a
                class="flex flex-col items-center justify-center pb-[13px] pt-4"
                :class="{
                  'border-b-[3px] border-b-[#50d22c] text-white': activeTab === 'reviews',
                  'border-b-[3px] border-b-transparent text-[#a1c398]': activeTab !== 'reviews',
                }"
                href="#"
                @click.prevent="changeTab('reviews')"
              >
                <p class="text-sm font-bold leading-normal tracking-[0.015em]">Reviews</p>
              </a>
            </div>
          </div>

          <template v-if="activeTab === 'products'">
            <h2
              class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Products
            </h2>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#50d22c] text-[#162013] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <div class="text-[#162013]" data-icon="Plus" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
                    ></path>
                  </svg>
                </div>
                <span class="truncate">Upload Product</span>
              </button>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div v-for="product in products" :key="product.name" class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  :style="{ backgroundImage: `url('${product.imageUrl}')` }"
                ></div>
                <div>
                  <p class="text-white text-base font-medium leading-normal">{{ product.name }}</p>
                  <p class="text-[#a1c398] text-sm font-normal leading-normal">
                    {{ product.price }}
                  </p>
                </div>
              </div>
            </div>
          </template>

          <template v-if="activeTab === 'overview'">
            <h2
              class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Overview Details
            </h2>
            <p class="text-[#a1c398] px-4">This section would contain more details about the business overview.</p>
          </template>

          <template v-if="activeTab === 'reviews'">
            <h2
              class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Customer Reviews
            </h2>
            <p class="text-[#a1c398] px-4">This section would display customer reviews.</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Any component-specific styles can go here. Tailwind is mostly utility-first,
   so you might not need much here unless for specific component states or animations. */
</style>