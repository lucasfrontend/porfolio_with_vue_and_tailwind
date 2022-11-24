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
                    <transition-group appear @before-enter="beforeEnter" @enter="enter">
                        <div class="p-2 w-64"
                            v-for="(video, index) in videos" 
                                :data-index="index" 
                                :key="video.id">
                                    <v-card-video
                                        :img="video.img"
                                        :alt="video.alt"
                                        :url="video.url"
                                    />
                        </div>
                </transition-group>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'
import VCardVideo from './cards/VCardVideo.vue';
export default {
  name: 'Videos',
  components: {
      VCardVideo
  },
  data() {
    return {
        videos: [
            {
                id: 1,
                img: 'https://i.postimg.cc/MTgyD3Mn/vertical.png',
                title: 'sport',
                alt: '',
                description: '',
                url: 'https://www.youtube.com/shorts/cGhI9re2VYo'
            },
            {
                id: 2,
                img: 'https://i.postimg.cc/RhRvZ0Gd/tandems.png',
                title: 'Tandems',
                alt: '',
                description: '',
                url: 'https://www.youtube.com/shorts/-3cmrjgYfJM'
            },
            {
                id: 3,
                img: 'https://i.postimg.cc/4xMsdqvD/courses.png',
                title: 'courses',
                alt: '',
                description: '',
                url: 'https://www.youtube.com/shorts/AnHfAJVYfU0'
            },
            {
                id: 4,
                img: 'https://i.postimg.cc/YCLTX9gP/justine.png',
                title: 'passengers',
                alt: '',
                description: '',
                url: 'https://www.youtube.com/shorts/X9ZrKaJIayY'
            }    
        ]
    }
  },
  methods: {
    beforeEnter(el){
        el.style.opacity = 0;
        el.style.transform = 'transitionY(60px)'
    },
    enter(el){
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: el.dataset.index * 0.2,
        }
      )
    }
  }

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