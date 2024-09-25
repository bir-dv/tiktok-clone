<template>
    <div class="text-center font-bold text-[28px] mb-4 ">Sign up</div>
    <div class="px-6 pb-2 ">
        <TextInput placeholder="Full name" v-model:input="name" inputType="text" :autoFocus="true" error="" />
    </div>

    <!-- <div class="text-[15px] pb-1.5 px-6 text-gray-900"> Password</div> -->
    <div class="px-6 pb-2">
        <TextInput placeholder="Email address" v-model:input="email" inputType="email" />
    </div>
    <div class="px-6 pb-2">
        <TextInput placeholder="Password" v-model:input="password" inputType="password" />
    </div>
    <div class="px-6 pb-2">
        <TextInput placeholder="Confirm password" v-model:input="confirmPassword" inputType="password" />
    </div>
    <!-- <div class="px-6 pb-2 text-[12px] text-gray-600">

        Forget password
    </div> -->

    <div class="px-6 mt-6 pb-2 ">

        <button :disabled="(!email || !password || !confirmPassword || !name)"
            :class="(!email || !password || !confirmPassword || !name) ? 'bg-gray-200' : 'bg-[#f02c56] hover:bg-[#f02c60]'"
            class="w-full font-semibold text-[17px] text-white py-3 rounded-sm ">
            Sign up
        </button>

    </div>

</template>

<script setup>
const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
const name = ref(null)
const error = ref(null)

</script>