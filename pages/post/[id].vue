<template>
    <div id="postpage"
        class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto ">
        <div class="lg:w-[calc(100%-540px)] h-full relative ">
            <NuxtLink class="absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800 ">
                <!-- <Icon name="mdi:close" size="28" class="bg-white" /> -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="white" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </NuxtLink>
            <div v-if="true">
                <button :disabled="!isLoaded" @click="$event => loopThroughPostsUp()"
                    class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1 hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                </button>

                <button :disabled="!isLoaded" @click="$event => loopThroughPostsDown()"
                    class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1 hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </button>

            </div>
            <img class="absolute top-[18px] left-[65px] mx-auto lg:mx-0 rounded-full " width="45"
                src="/assets/images/tiktok-logo-small.png" />

            <video v-if="true" class="object-cover h-screen w-full my-auto absolute z-[-1] "
                src="public/backgroundvideo.mp4" />

            <div v-if="!isLoaded"
                class="flex items-center justify-center bg-black bg-opacity-70 h-screen lg:min-w-[480px] ">
                <Icon name="mingcute:loading-line" size="100" class="animate-spin ml-1 bg-[#ffffff] " />

            </div>
            <div class="flex lg:min-w-[480px] bg-black bg-opacity-90 ">
                <video v-if="true" ref="video" loop muted class="h-screen mx-auto " src="public/backgroundvideo.mp4" />

            </div>


        </div>

        <div id="infoSection" v-if="true" class="bg-white lg:max-w-[550px] w-full h-full ">
            <div class="py-7 " />
            <div class="flex items-center justify-between px-8 ">
                <div class="flex items-center ">
                    <nuxt-link href="/">
                        <img class="rounded-full max-w-[60px]" src="https://picsum.photos/id/58/200/200">
                    </nuxt-link>

                    <div class="ml-3 pt-o.5  ">
                        <div class="text-[17px] font-semibold ">
                            User name
                        </div>
                        <div class="text-gray-800 -mt-5 text-[13px] font-light ">
                            user name
                            <span class="relative text-[30px] top-[-2px] pr-0.5">.</span>
                            <span class="font-medium">Date here</span>
                        </div>


                    </div>
                </div>

                <svg v-if="true" @click="$event => deletePost()" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>


            </div>

            <div class="text-sm mt-4  px-8 ">
                This is the post text
            </div>

            <div class="flex px-8 mt-4 text-sm font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>

                <!-- <Icon name="mdi:music" size="17" /> -->
                original sound - User name

            </div>

            <div class=" flex items-center px-8 mt-8 ">
                <div class="pb-4 text-center flex items-center  ">
                    <button class="cursor-pointer rounded-full p-2 bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path
                                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </button>
                    <span class="pl-2 text-gray-800 font-semibold text-xs pr-4">123</span>

                </div>
                <div class="pb-4 text-center flex items-center  ">
                    <button class="cursor-pointer rounded-full p-2 bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd"
                                d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                                clip-rule="evenodd" />
                        </svg>

                    </button>
                    <span class="pl-2 text-gray-800 font-semibold text-xs pr-4">123</span>

                </div>

            </div>

            <div id="comment" class="bg-[#f5f5f5] w-full z-0 h-[calc(100%-273px)] border-t-2 overflow-auto ">
                <div class="pt-2" />
                <div v-if="false" class="text-center mt-6 text-xl text-gray-500 ">
                    No comments...

                </div>

                <div v-else class="flex items-center justify-between px-8 pt-4">

                    <div class="flex items-center relative w-full ">
                        <NuxtLink to="/">
                            <img class="absolute top-0  mx-auto lg:mx-0 rounded-full " width="45"
                                src="https://picsum.photos/id/58/200/200" />


                        </NuxtLink>

                        <div class="ml-14 pt-0.5 w-full ">
                            <div class="flex items-center font-semibold text-[17px] justify-between">
                                User name
                                <svg v-if="true" @click="$event => deletePost()" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="size-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </div>
                            <div class="font-light text-[13px] pt-1 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus iste consectetur
                                excepturi, iusto placeat minima cumque tempora consequatur laudantium! Sapiente odit
                                dolores, in ad sequi nisi quidem fuga eius!

                            </div>

                        </div>

                    </div>

                </div>

                <div class="mb-28" />

            </div>

            <div id="creatComment" v-if="true"
                class="absolute flex items-center justify-between bottom-0 bg-white h-[58px] lg:max-w-[550px] w-full py-5 px-8 border-t-2 ">
                <div :class="inputFocused ? 'border-2 border-gray-400' : 'border-2 border-[f1f1f2]'"
                    class="bg-[#f1f1f2] flex items-center rounded-lg w-full lg:max-w-[420px]  ">
                    <input v-model="comment" @focus="$event => inputFocused = true"
                        @blur="$event => inputFocused = false"
                        class="bg-[f1f1f2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg"
                        type="text" placeholder="Add Comment...">

                </div>

                <button :disabled="!comment" @click="$event => addComment()"
                    :class="comment ? 'text-[#f02c56] cursor-pointer' : 'text-gray-400'"
                    class="font-semibold text-sm ml-5 pr-1 ">
                    Post

                </button>

            </div>


        </div>

    </div>
</template>

<script setup>

const route = useRoute()
const router = useRouter()

const comment = ref(null)
const inputFocused = ref(false)

const video = ref(null)
const isLoaded = ref(false)

onMounted(() => {
    isLoaded.value = true
    video.value.play()
    // video.value.addEventListener('loadeddata', (e) => {
    //     if (e.target) {
    //         setTimeout(() => {
    //             isLoaded.value = true
    //         }, 200)
    //     }
    // })
})


onBeforeUnmount(() => {
    video.value.pause()
    video.value.currentTime = 0
    video.value.src = ''
})

watch(() => isLoaded.value, () => {
    if (isLoaded.value) {
        setTimeout(() => video.value.play(), 500)
    }

})
</script>