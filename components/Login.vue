<template>
    <div class="text-center font-bold text-[28px] mb-4 ">Login</div>
    <div class="text-[15px] pb-1.5 px-6 text-gray-900"> Email address</div>
    <div class="px-6 pb-2 ">
        <TextInput placeholder="email address" v-model:input="email" inputType="email" :autoFocus="true" error="" />
    </div>

    <div class="text-[15px] pb-1.5 px-6 text-gray-900"> Password</div>
    <div class="px-6 pb-2">
        <TextInput placeholder="password" v-model:input="password" inputType="password" />
    </div>
    <div class="px-6 pb-2 text-[12px] text-gray-600">

        Forget password
    </div>

    <div class="px-6 mt-6 pb-2 ">

        <button :disabled="(!email || !password)"
            :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#f02c56] hover:bg-[#f02c60]'"
            class="w-full font-semibold text-[17px] text-white py-3 rounded-sm ">
            Log in
        </button>

    </div>

</template>

<script setup>
const email = ref(null)
const password = ref(null)
const error = ref(null)

</script>