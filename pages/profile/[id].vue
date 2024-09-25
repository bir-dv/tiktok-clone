<template>
    <MainLayout>
        <div
            class="pt-[80px] w-[calc(100%-90px)] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 pr-2  max-w-[1800px] 2xl:mx-auto ">
            <div class="flex w-[calc(100vh-230px)] ">
                <img class="rounded-full max-w-[120px]" src="https://picsum.photos/id/58/200/200">
                <div class="ml-5 w-full ">
                    <div class="text-[25px] font-bold truncate">
                        User name
                    </div>
                    <div class="text-gray-800 text-[15px] truncate ">
                        user name
                    </div>
                    <button @click="$event => $generalStore.isEditProfileOpen = true" v-if="true"
                        class="flex items-center border rounded-md py-1.5 px-3.5 mt-3 text-[13px] font-semibold hover:bg-gray-100   ">
                        <Icon name="mdi:pencil" size="18" class=" mt-0.5 mr-1" />
                        <div>Edit profile</div>

                    </button>
                    <button v-else
                        class="flex items-center rounded-md py-1.5 px-8 mt-3 text-[13px] text-white bg-[#f02c56] font-bold ">
                        Follow
                    </button>

                </div>

            </div>
            <div class="flex items-center mt-4 ">
                <div class="mr-4 ">
                    <span class="font-bold">10K</span>
                    <span class="font-light text-gray-500 text-[15px] pl-1.5 ">Following</span>

                </div>

                <div class="mr-4">
                    <span class="font-bold">47K</span>
                    <span class="text-gray-500 text-[15px] font-light pl-1.5 ">Followers</span>

                </div>
                <div class="mr-4">
                    <span class="font-bold">7K</span>
                    <span class="text-gray-500 text-[15px] font-light pl-1.5 ">Likes</span>

                </div>

            </div>

            <div class="pt-4 mr-4 text-gray-500 font-light text-[15px] max-w-[500px] pl-1.5 ">
                this is bio section
            </div>

            <div class="flex items-center border-b w-full pt-4 ">
                <div class="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black ">
                    Video
                </div>
                <div class="w-60 font-semibold text-gray-500 text-center py-2 text-[17px] ">
                    <Icon name="mdi:lock-open" class="-mb-0.5" /> Liked

                </div>

            </div>

            <div class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">

                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />
                <post-user />


            </div>


        </div>

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const { $generalStore } = useNuxtApp()
</script>