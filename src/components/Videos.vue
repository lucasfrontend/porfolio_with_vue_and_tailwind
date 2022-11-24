<template>
    <section class="px-6 py-3 mt-20 text-gray-400 body-font mt-202">
        <div class="cont">
            <div class="px-6 py-3">
                <div class="flex items-center justify-center">
                    <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider mb-8">
                        Videos
                    </h1>
                </div>
                <div class="w-full flex flex-wrap justify-center">
                    <div class="p-2 w-64">
                        <a href="https://www.youtube.com/shorts/AnHfAJVYfU0" target="_blank">
                            <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                                <img src="../assets/courses.png" alt="" class="h-auto w-full shadow mb-2">
                                <h1 class="text-sm font-semibold text-white tracking wide"></h1>
                                <h2 class="text-xs text-lightest tracking-wide"></h2>
                            </div>
                        </a>
                    </div>
        
                    <div class="p-2 w-64">
                        <a href="https://www.youtube.com/shorts/cGhI9re2VYo" target="_blank">
                            <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                                <img src="../assets/vertical.png" alt="" class="h-auto w-full shadow mb-2">
                                <h1 class="text-sm font-semibold text-white tracking wide"></h1>
                                <h2 class="text-xs text-lightest tracking-wide"></h2>
                            </div>
                        </a>
                    </div>
        
                    <div class="p-2 w-64">
                        <a href="https://www.youtube.com/shorts/-3cmrjgYfJM" target="_blank">
                            <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                                <img src="../assets/tandems.png" alt="" class="h-auto w-full shadow mb-2">
                                <h1 class="text-sm font-semibold text-white tracking wide"></h1>
                                <h2 class="text-xs text-lightest tracking-wide"></h2>
                            </div>
                        </a>
                    </div>
                    
                    <div class="p-2 w-64">
                        <a href="https://www.youtube.com/shorts/X9ZrKaJIayY" target="_blank">
                            <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                                <img src="../assets/justine.png" alt="" class="h-auto w-full shadow mb-2">
                                <h1 class="text-sm font-semibold text-white tracking wide"></h1>
                                <h2 class="text-xs text-lightest tracking-wide"></h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
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