<template>
    <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden bg-light">
        <a :href='url' target="_blank" class="cursor-pointer">
            <img :src='img' :alt='alt' class="lg:h-48 md:h-36 w-full object-cover object-center transition-all duration-300 cursor-pointer">
        </a>
        <div class="p-6">
            <h3 class="title-font text-base font-medium text-white mb-3 break-words">{{ title }}</h3>
            <p class="leading-relaxed mb-3 text-xs break-words">{{ description }}</p>
            <div class="flex items-center flex-wrap ">
            <a :href='url' target="_blank" class="cursor-pointer text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">{{ $t('portfolio.go')}}
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
            <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                {{makew}}
            </span>
            <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                <div v-if="(makew === 'React')">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/react.svg" alt="ReactJs" class="icon"/>
                </div>
                <div v-if="(makew === 'Vuejs')">
                    <img src="https://vuejs.org/images/logo.png" alt="VueJs" class="vue"/>
                </div>
            </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VCardWork',
    props: {
        title: String,
        alt: String,
        description: String,
        img: String,
        makew: String,
        url: String
    }
}
</script>

<style>
.icon {
    width: 2rem;
    height: 2rem;
}

.vue {
    width: 1rem;
    height: 1rem;
}
</style>