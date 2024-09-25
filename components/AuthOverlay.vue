<template>
    <div id="AuthOverlay"
        class="fixed flex items-center justify-center z-50 top-0 left-0  w-full h-full bg-black bg-opacity-50  ">
        <div class="relative bg-white w-full max-w-[470px] h-[90%] p-4 rounded-lg ">
            <div class="w-full flex justify-end">
                <button @click="$event => $generalStore.isLoginOpen = false" class="p-1.5 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>

            </div>
            <Login v-if="isRegister" />
            <Register v-else />

            <div class="absolute items-center flex left-0 bottom-0 justify-center py-5 border-t w-full ">
                <span class="text-14 text-gray-600">Don't have an account?</span>
                <button @click="isRegister = !isRegister" class="text-14 text-[#f02c56] font-semibold pl-1.5 ">
                    <span v-if="isRegister">Sign up</span>
                    <span v-else>Log in</span>
                </button>

            </div>

        </div>

    </div>
</template>

<script setup>

defineEmits(["close-model"])
const isRegister = ref(true)
////to control close the modal
const { $generalStore } = useNuxtApp()

</script>