<template>
    <a :href='url' target="_blank">
        <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
            <img :src='img' :alt='alt' class="h-auto w-full shadow mb-2">
            <h1 class="text-sm font-semibold text-white tracking wide"></h1>
            <h2 class="text-xs text-lightest tracking-wide"></h2>
        </div>
    </a>
</template>

<script>

export default {
    name: 'VCardVideo',
    props: {
        url: String,
        alt: String,
        img: String,
    }
}

</script>