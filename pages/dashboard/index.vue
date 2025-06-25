<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-[#f9fbf9] dark:bg-[#162013] group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <DashboardHeader />
      <div class="layout-container flex h-full grow flex-col">
        <div class="md:10 sm:px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap  justify-between gap-3 p-4 items-center">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#121810] tracking-light text-[32px] font-bold leading-tight">Your Businesses</p>
                <p class="text-secondary text-sm font-normal leading-normal">Manage and track the performance of
                  your businesses in one place.</p>
              </div>
              <button
                class="flex w-42 items-center cursor-pointer border-2 justify-center overflow-hidden rounded-full py-3 bg-black  dark:bg-[#2f402b] text-white dark:text-white text-sm  leading-normal"
                @click="addBusiness">

                <svg data-slot="icon" class="h-6 text-white" fill="none" stroke-width="2" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>

                </svg><span class="truncate text-white  text-sm ">Add Business
                </span>
              </button>
            </div>
            <div class="flex flex-wrap gap-4 p-4">
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#ebf1ea]">
                <p class="text-[#121810] text-base font-medium leading-normal">Total Businesses</p>
                <p class="text-[#121810] tracking-light text-2xl font-bold leading-tight">{{ myBusiness.length }}</p>
              </div>
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#ebf1ea]">
                <p class="text-[#121810] text-base font-medium leading-normal">Total Views</p>
                <p class="text-[#121810] tracking-light text-2xl font-bold leading-tight">1,250</p>
              </div>
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#ebf1ea]">
                <p class="text-[#121810] text-base font-medium leading-normal">Recent Activity</p>
                <p class="text-[#121810] tracking-light text-2xl font-bold leading-tight">{{ 0 }} updates</p>
              </div>
            </div>
            <div v-if="!myBusiness || myBusiness.length === 0">
              <p>no business found</p>
            </div>
            <h2 v-else class="text-[#121810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your
              Businesses</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-3 p-4">
              <div v-for="business in myBusiness" :key="business.bus_id" @click="handleroute(business.bus_id)"
                class="flex flex-col gap-3 pb-3 cursor-pointer group">
                <!-- Image Background with dynamic binding -->
                <div
                  class="w-[200px] bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  :style="`background-image: url('${business.bus_img}')`"></div>

                <!-- Business Info -->
                <div>
                  <p class="text-[#121810] text-base font-medium leading-normal">
                    {{ business.bus_name }}
                  </p>
                  <p class="text-[#668a5c] text-sm font-normal truncate leading-normal">
                    {{ business.bus_desc }}
                  </p>
                  <p class="text-[#668a5c] text-sm font-normal leading-normal">
                    Last updated: {{ Date.now() }}
                  </p>
                </div>
              </div>
            </div>


            <h2 class="text-[#121810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Announcements &amp; Tips</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-[2_2_0px] flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <p class="text-[#121810] text-base font-bold leading-tight">Maximize Your Reach</p>
                    <p class="text-[#668a5c] text-sm font-normal leading-normal">Learn how to optimize your business
                      listings for better visibility and engagement.</p>
                  </div>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#ebf1ea] text-[#121810] text-sm font-medium leading-normal w-fit">
                    <span class="truncate">Learn More</span>
                  </button>
                </div>
                <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf6DmP1EpWpkIXTAen67Jtk7dhoTUqDdIIWLrCH3_XtyDoswH0hiQuK2qFoGbe8tQzc3wm-fTarabu4VpTgOCNyFHAt1zoo-cbcVZmGMu1Vicu5WOgBClZ0_b3t_RIBax7XNqZFPzxwO38kEHOgqlp8R_7s0KdFmoAxhiJreQ5eE8SsaW7vQqUzlGsmfMfJj3Di5ryE5QAOKuQEHSL5G15lplZT5mJlJ85XCTvfg1_Me-RqMtdR_yM7vRRlpizq1BiB1VcoATU0920");'>
                </div>
              </div>
            </div>
            <h2 class="text-[#121810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent
              Updates</h2>
            <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div class="flex flex-col items-center gap-1 pt-3">
                <div class="text-[#121810]" data-icon="PencilSimple" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                    viewBox="0 0 256 256">
                    <path
                      d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z">
                    </path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#d7e2d4] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col py-3">
                <p class="text-[#121810] text-base font-medium leading-normal">Updated The Cozy Corner Cafe listing
                </p>
                <p class="text-[#668a5c] text-base font-normal leading-normal">2 days ago</p>
              </div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#d7e2d4] h-2"></div>
                <div class="text-[#121810]" data-icon="Image" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                    viewBox="0 0 256 256">
                    <path
                      d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z">
                    </path>
                  </svg>
                </div>
                <div class="w-[1.5px] bg-[#d7e2d4] h-2 grow"></div>
              </div>
              <div class="flex flex-1 flex-col py-3">
                <p class="text-[#121810] text-base font-medium leading-normal">Added new photos to Tech Solutions
                  Inc.</p>
                <p class="text-[#668a5c] text-base font-normal leading-normal">1 week ago</p>
              </div>
              <div class="flex flex-col items-center gap-1 pb-3">
                <div class="w-[1.5px] bg-[#d7e2d4] h-2"></div>
                <div class="text-[#121810]" data-icon="ChartLine" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                    viewBox="0 0 256 256">
                    <path
                      d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-1 flex-col py-3">
                <p class="text-[#121810] text-base font-medium leading-normal">Checked analytics for Green Thumb
                  Gardens</p>
                <p class="text-[#668a5c] text-base font-normal leading-normal">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
definePageMeta({
  middleware: 'auth'
})
const myBusiness: any = ref(<[]>[]);

async function fetchBusiness() {
  try {
    const res: any = await $fetch('/api/business/mybusiness');
    myBusiness.value = res.business;
    
  } catch (error) {
    console.log(error);
  }
}


const router = useRouter();
// Define a type for your business object
interface Business {
  id: string | number;
  name: string;
  description: string;
  imageUrl: string;
}

function handleroute(id: string | number) {
  if (!id) {
    return;
  }
  router.push(`/dashboard/${id}`);
}


const addBusiness = () => {
  router.push('/dashboard/addbusiness');
  console.log('Add Business button clicked!');
};
onBeforeMount(async () => {
  await fetchBusiness();
});
</script>
