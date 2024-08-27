<template>
    <UploadError :errorType="errorType" />

    <UploadLayout>

        <div class="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4 ">
            <div class="">
                <div class="text-[23px] font-semibold  ">Upload video</div>
                <div class="text-gray-500 ml-1">post a video to your account</div>
            </div>
            <div class="mt-8 md:flex gap-6">
                <label v-if="!fileDisplay" for="fileInput" @drop.prevent="onDrop" @dragover.prevent
                    class="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 ">
                    <Icon name="mdi:cloud-upload" size="40" class="bg-[#b3b3b1]" />
                    <div class="mt-4 text-[17px]">Select video for upload</div>
                    <div class="text-gray-500 text-13 mt-1.5">Or drag and drop a file</div>
                    <div class="mt-12 text-sm text-gray-500">MP4</div>
                    <div class="mt-2 text-13 text-gray-400">Up to 30 minutes</div>
                    <div class="mt-2 text-13 text-gray-400">Less than 2 GB</div>
                    <div class="px-2 py-1.5 mt-8 text-white text-15 w-[80%] bg-[#f02c56] rounded-sm">
                        Select file</div>
                    <input ref="file" hidden type="file" id="fileInput" @input="onChange" accept=".mp4">

                </label>
                <div v-else
                    class="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative ">
                    <div class="bg-black h-full w-full" />
                    <img class="absolute z-20 pointer-events-none" src="/assets/images/mobile-case.png">
                    <img class="absolute right-4 bottom-6 z-20 " width="90" src="/assets/images/tiktok-logo-white.png">
                    <video autoplay loop muted class="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full"
                        :src="fileDisplay" />
                    <div
                        class="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300 ">
                        <div class="flex items-center truncate">
                            <Icon name="clarity:success-standard-line" size="16" class="min-w-[16px]" />
                            <div class="text-[11px] pl-1 truncate text-ellipsis  "> {{ fileData.name }} </div>

                        </div>
                        <button @click="$event => changeVideo()" class="text-[11px] ml-2 font-semibold">
                            Change
                        </button>

                    </div>

                </div>

                <div class="mt-4 mb-6 ">
                    <div class="flex bg-[#f8f8f8] py-4 px-6">
                        <div>
                            <Icon size="20" class="mr-4" name="mdi:box-cutter-off" />
                        </div>
                        <div>
                            <div class="text-[15px] font-semibold mb-1.5 "> Divide videos and edit</div>
                            <div class="font-semibold text-[13px] text-gray-400">
                                you can divide videos into multiple parts,
                                remove redundant parts and turn landscape videos into portrait video
                            </div>
                        </div>
                        <div class="flex justify-end max-w-[130px] w-full h-full text-center my-auto ">
                            <button class="px-8 py-1.5 text-white text-[15px] rounde-sm bg-[#f02c56] ">
                                Edit
                            </button>
                        </div>


                    </div>

                    <div class="mt-5">
                        <div class="flex items-center justify-between">
                            <div class="mb-1 text-[15px]">Caption</div>
                            <div class="text-gray-400 text-[12px]">{{ caption.length }}/150</div>
                        </div>

                        <input v-model="caption" maxlength="150" type="text"
                            class="w-full border p-2.5 rounded-md focus:outline-none">


                    </div>

                    <div class="flex gap-3">
                        <button @click="disCard()"
                            class="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm">Discard</button>
                        <button
                            class=" py-2.5 mt-8 border text-[16px] px-10 bg-[#f02c56] text-white rounded-sm">save</button>
                    </div>
                </div>

            </div>

        </div>

    </UploadLayout>

</template>

<script setup>
import UploadLayout from '~/layouts/UploadLayout.vue';
import UploadError from '~/components/UploadError.vue';

const fileDisplay = ref(null)
const errorType = ref(null)
const file = ref(null)
const fileData = ref(null)
const caption = ref('')

watch(() => caption.value, (caption) => {
    if (caption.length >= 150) {
        errorType.value = 'caption'
        return
    }
    errorType.value = null
})

const onChange = () => {
    fileDisplay.value = URL.createObjectURL(file.value.files[0])
    fileData.value = file.value.files[0]
}
//drag and drop function
const onDrop = (e) => {
    errorType.value = ''
    file.value = e.dataTransfer.files[0]
    fileData.value = e.dataTransfer.files[0]

    // this to extend file name after . dot
    let extension = file.value.name.substring(file.value.name.lastIndexOf('.') + 1)

    if (extension !== 'mp4') {
        errorType.value = 'file'
        return
    }

    fileDisplay.value = URL.createObjectURL(e.dataTransfer.files[0])

}

const disCard = () => {
    fileDisplay.value = null
    fileData.value = null
    file.value = null
    caption.value = ''

}

const changeVideo = () => {
    fileDisplay.value = null
    fileData.value = null
    file.value = null
}

</script>