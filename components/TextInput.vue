<template>
    <div>
        <input :id="`input-${placeholder}`" :placeholder="placeholder"
            class="px-2.5 py-3 w-full block bg-[#f1f1f2] text-gray-800 focus:outline-none rounded-md border-gray-300 border  "
            :type="inputType" v-model="inputComputed" autocomplete="off" :maxlength="max">

        <span v-if="error" class="text-red-500 text-[14px] font-semibold">
            {{ error }}
        </span>
    </div>
</template>

<script setup>

const emit = defineEmits(['update:input'])

const props = defineProps(['input', 'placeholder', 'inputType', 'max', 'autoFocus', 'error'])
const { input, placeholder, inputType, max, autoFocus, error } = toRefs(props)

onMounted(() => {
    if (autoFocus.value) {
        document.getElementById(`input-${placeholder.value}`).focus()
    }
})

const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})

</script>