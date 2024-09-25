<template>
    <div id="editprofileoverlay"
        class="flex fixed justify-center  md:pt-[105px] z-50 left-0 top-0 w-full h-full bg-black bg-opacity-50 overflow-auto ">
        <div :class="!uploadedImage ? 'h-[655px]' : 'h-[580px]'"
            class="relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-md mb-10 ">
            <div
                class="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-grray-300 ">

                <div class="font-medium text-[22px] ">
                    Edit profile

                </div>

                <button @click="$event => $generalStore.isEditProfileOpen = false">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>

            </div>

            <div class="h-[calc(500px-200px)]" :class="!uploadedImage ? 'mt-16' : 'mt-[58px]'">
                <!-- if uploaded image is empity -->
                <div v-if="!uploadedImage">

                    <div id="ProfilePhotoSection"
                        class="flex flex-col border-b sm:h-[118px] h-[145px]  px-1.5 py-2 w-full ">
                        <div
                            class=" font-semibold text-[15px] sm:mb-0 mb-1 sm:w-[160px] sm:text-left text-gray-700 text-center ">
                            profile photo
                        </div>

                        <div class="flext items-center justify-center ">

                            <label for="image" class="absolute cursor-pointer sm:mt-2">
                                <img class="rounded-full" width="70" src="https://picsum.photos/id/58/300/300">

                                <div
                                    class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 left-11  border-gray-300 inline-block w-[32px]  ">

                                    <Icon name="ph:pencil-simple-line-bold" size="17" class="-mt-1 ml-0.5" />
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class=" size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg> -->


                                </div>

                            </label>

                            <input class="hidden" id="image" type="file" @input="getUploadedImage"
                                accept="image/png, image/jpeg, image/jpg">

                        </div>


                    </div>

                    <div id="usernameSection" class="flex flex-col border-b  sm:h-[130px] px-1.5 py-2 mt-1.5 w-full ">
                        <div
                            class="text-[15px] text-gray-700 font-semibold sm:mb-0 mb-1 sm:w-[160px]  sm:text-left text-center ">
                            Username
                        </div>

                        <div class="flex items-center justify-center sm:-mt-1 ">

                            <div class="sm:w-[60%] w-full max-w-md ">

                                <TextInput placeholder="Username" v-model:input="userName" input-type="text" max="30" />
                                <div class=" text-[11px] text-gray-500 mt-3">
                                    usernames can only contain letters, numbers, underscores, and perioda.
                                    changing your username will also change your profile link.
                                </div>

                            </div>

                        </div>

                    </div>

                    <div id="bioSection" class="flex flex-col border-b sm:h-[170px] px-1.5 py-2 mt-1.5 w-full ">
                        <div
                            class="text-[15px] text-gray-700 font-semibold sm:mb-0 mb-1 sm:w-[160px]  sm:text-left text-center ">
                            Bio

                        </div>
                        <div class="flex items-center justify-center sm:-mt-2 ">

                            <div class="sm:w-[60%] w-full max-w-md ">

                                <textarea name="" id="" cols="30" rows="4" maxlength="80" v-model="userBio"
                                    class="resize-none w-full text-gray-800 bg-[#f1f1f2] border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none ">

                                </textarea>

                                <div v-if="userBio" class="text-[11px] text-gray-500 ">
                                    {{ userBio.length }} /80

                                </div>

                                <!-- <TextInput placeholder="Username" v-model:input="userName" input-type="text" max="30" />
                                <div class=" text-[11px] text-gray-500 mt-3">
                                    usernames can only contain letters, numbers, underscores, and perioda.
                                    changing your username will also change your profile link.
                                </div> -->

                            </div>

                        </div>

                    </div>

                </div>

                <div v-else class="w-full h-[430px] ">
                    <Cropper class="h-[430px]" ref="cropper" :stencil-props="{
                        aspectRatio: 10 / 12
                    }" :stencil-component="CircleStencil" :src="uploadedImage" />

                </div>

            </div>

            <div id="ButtonSection" class="absolute p-4 left-0 bottom-0 border-t border-t-gray-300 w-full ">
                <div id="UpdateInfoButtons" v-if="!uploadedImage" class="justify-end flex items-center">
                    <button @click="$event => $generalStore.isEditProfileOpen = false"
                        class="flext border items-center rounded-md px-3 py-[6px] hover:bg-gray-100 ">
                        <span class="px-2 font-medium text-[15px] text-gary-800">Cancel</span>
                    </button>

                    <button @click="$event => cropAndUpdateImage()"
                        class="flex items-center bg-[#f02c56] text-white border rounded-md ml-3 px-3 py-[6px] ">
                        <span class="mx-4 font-medium text-[15px] ">Apply</span>

                    </button>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { CircleStencil, Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
import { storeToRefs } from 'pinia';

const uploadedImage = ref(null)
const cropper = ref(null)
const file = ref(null)
const userImage = ref(null)
const userBio = ref(null)
const userName = ref(null)
const isUpdated = ref(false)


const { $generalStore, $userStore, $profileStore } = useNuxtApp()
const { name, bio, image } = storeToRefs($userStore)

onMounted(() => {
    userBio.value = bio.value
    userName.value = name.value
    userImage.value = image.value
})
// const { isEditProfileOpen } = storeToRefs($generalStore)

const getUploadedImage = (e) => {
    file.value = e.target.files[0]
    uploadedImage.value = URL.createObjectURL(file.value)

}

watch(() => userName.value, () => {
    if (!userName.value || userName.value === name.value) {
        isUpdated.value = false
    } else {
        isUpdated.value = true
    }
})

watch(() => userBio.value, () => {
    if (!userBio.value || userBio.value.length < 1) {
        isUpdated.value = false
    } else {
        isUpdated.value = true
    }
})

</script>
