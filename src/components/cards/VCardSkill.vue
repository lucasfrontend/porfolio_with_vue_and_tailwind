<template>
    <div class="bg-light w-full min-h-full p-5 rounded-lg shadow-md flex flex-col">
        <img :src='img' :alt='alt' class="w-full m-auto mb-2">
        <h1 class="text-sm font-semibold text-lightest text-center tracking wide mt-auto">{{ title }}</h1>
    </div>
</template>

<script>

export default {
    name: 'VCardSkill',
    props: {
        title: String,
        alt: String,
        img: String,
    }
}

</script>