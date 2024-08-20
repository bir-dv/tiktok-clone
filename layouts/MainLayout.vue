<template>
    <TopNav />
    <div :class="route.fullpath === '/' ? 'max - w - [1140px]' : ''"
        class="flex justify-between mx-auto lg:px-2.5 px-0 ">
        <div>
            <SideNavMain />
        </div>

    </div>


</template>

<script setup>

const route = useRoute()
</script>