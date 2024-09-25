<template>
    <div id="TopNav" class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]">
        <div :class="route.fullpath === '/' ? 'max-w-[1150px]' : ''"
            class="flex items-center justify-between w-full px-6 mx-auto">
            <div :class="route.fullpath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
                <nuxt-link to="/">
                    <img width="115" src="/assets/images/tiktok-logo.png" alt="png">
                </nuxt-link>

            </div>
            <div class="hidden md:flex items-center bg-[#f1f1f2] p-1 rounded-full max-w-[380px] w-full">
                <input type="text"
                    class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none "
                    placeholder="Search accounts">
                <div>
                    <Icon name="ic:round-search" style="color:darkgray" size="24" class="mr-2" />
                </div>

            </div>
            <div class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full ">
                <button class=" flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100  ">
                    <Icon name="material-symbols:add" color="#000000" size="24" />
                    <span>Upload</span>
                </button>
                <div v-if="!$userStore.id" class="flex items-center ">
                    <button @click="$event => $generalStore.isLoginOpen = true"
                        class="flex items-center bg-[#f02c56] text-white border rounded-md px-3 py-[6px] ">
                        <span class="mx-4 font-medium text-[15px]">Log in</span>

                    </button>
                    <Icon name="mdi:dots-vertical" color="#161724" size="25" />
                </div>
                <div v-else class="flex items-center gap-2">
                    <Icon name="carbon:send-alt" color="#161724" size="30" />
                    <Icon name="bx:message-detail" color="#161724" size="27" />

                    <div class="relative">
                        <button @click="$event => showMenu = !showMenu" class="mt-1">
                            <img class="rounded-full" width="33" src="https://picsum.photos/id/24/300/300">
                        </button>

                        <div v-if="showMenu" id="PopupMenu"
                            class="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2 ">
                            <nuxt-link @click="$event => showMenu = false"
                                class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer ">
                                <Icon name="ph:user" size="20" />
                                <span class="pl-2 font-semibold text-sm">Profile</span>
                            </nuxt-link>
                            <div
                                class="flex items-center justify-start py-3 px-1.5 border-t hover:bg-gray-100 cursor-pointer ">
                                <Icon name="solar:login-2-outline" size="20" />
                                <span class="pl-2 font-semibold text-sm">Log out</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
const route = useRoute()
const showMenu = ref(false)

//this is to control signin modal visiblity in top
const { $generalStore, $userStore } = useNuxtApp()

</script>