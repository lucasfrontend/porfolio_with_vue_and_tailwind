<template>
    <div class="px-6 py-3">
        <div class="flex items-center justify-between">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Titulo</h1>
            <h2 class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3">Seee all</h2>
        </div>
        <div class="w-full flex flex-wrap">
            <div class="p-2 w-48">
                <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                    <img src="../assets/tasks.png" alt="" class="h-auto w-full shadow mb-2">
                    <h1 class="text-sm font-semibold text-white tracking wide">culo</h1>
                    <h2 class="text-xs text-lightest tracking-wide">culo</h2>
                </div>
            </div>

            <h2 class="text-sm text-lightest"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cupiditate, repellendus vel, reiciendis ullam aliquid eum, et deleniti tempora veniam blanditiis fugit sequi porro saepe qui est at? Ipsum, architecto!
            </h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
        videos: [
            {
                id: 1,
                img: 'https://i.postimg.cc/x8y1N5jK/sports.png',
                title: 'sport',
                alt: '',
                description: '',
                url: ''
            },
            {
                id: 2,
                img: 'https://i.postimg.cc/RhRvZ0Gd/tandems.png',
                title: 'Tandems',
                alt: '',
                description: '',
                url: ''
            },
            {
                id: 3,
                img: 'https://i.postimg.cc/4xMsdqvD/courses.png',
                title: 'courses',
                alt: '',
                description: '',
                url: ''
            },
            {
                id: 4,
                img: 'https://i.postimg.cc/YCLTX9gP/justine.png',
                title: 'passengers',
                alt: '',
                description: '',
                url: ''
            }    
        ]
    }
  },

}
</script>

<i18n>
    {
        "en": {
            "sport": "Sport Jumps",
            "courses": "Courses",
            "passengers": "Passengers"            
        },
        "es": {
            "sport": "",
            "courses": "Cursos",
            "passengers": "Pasajeros"        }
    }
    </i18n>