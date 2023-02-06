<template>
    <section class="px-6 py-3 mt-20 text-gray-400 body-font mt-202">
        <div class="container px-5 mx-auto">
            <div class="flex items-center justify-center">
                    <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider mb-8">
                        Portfolio
                    </h1>
                </div>
            <div class="flex flex-wrap -m-4 justify-center"> 
                <transition-group appear @before-enter="beforeEnter" @enter="enter">
                    <div class="p-4 md:w-1/3" 
                        v-for="(work, index) in works" 
                        :data-index="index" 
                        :key="work.id">
                        <v-card-work 
                            :img="work.img"
                            :alt="work.alt"
                            :title=$t(work.title)
                            :description=$t(work.description)
                            :makew="work.makew"
                            :url="work.url"
                        />
                    </div>
                </transition-group>           
            </div>
        </div>
    </section>
</template>

<script>
import VCardWork from '@/components/cards/VCardWork.vue'
import gsap from 'gsap'

export default {
  name: 'Portfolio',
  components: {
    VCardWork
  },
  data() {
    return {
        works: [
            {
                id: 1,
                img: 'https://i.postimg.cc/prb9mRx0/sdchpage.png',
                title: 'sdchalumnos',
                alt: '',
                description: 'sdchdescrip',
                url: 'https://chascomus-alumnos.vercel.app/',
                makew: 'Vuejs',
            },
            {
                id: 2,
                img: 'https://i.postimg.cc/DZ1mR12z/jst.png',
                title: 'gob.ar',
                alt: '',
                description: 'jstdescript',
                url: 'https://so.jst.gob.ar/idiomasJST/',
            },
            {
                id: 2,
                img: 'https://i.postimg.cc/8cRvC1gz/seguros.png',
                title: 'car_insurance',
                alt: 'Autos',
                description: 'cardescript',
                url: 'https://car-insurance-git-main-barriletefeliz.vercel.app/',
                makew: 'React',
            },
            {
                id: 3,
                img: 'https://i.postimg.cc/MZ7fVKgW/tasks.png',
                alt: '',
                title:'task_title',
                description: 'taskdescript',
                url: 'https://administrador-de-tareas.vercel.app/',
                makew: 'React',
            },
            {
                id: 4,
                img: 'https://i.postimg.cc/SsX7mFKn/cryptos.png',
                alt: '',
                title: 'cryptos',
                description: 'cryptosdescript',
                url: 'https://crypyomonedas.vercel.app/',
                makew: 'React',
            },
            
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
        })

    }
  }

}
</script>

<i18n>
{
    "en": {
        "sdchalumnos": "Skydiving students",
        "sdchdescrip": "In construction - 2022",
        "task_title": "Tasks Note",
        "taskdescript": "",
        "car_insurance": "Car insurance",
        "cardescript": "",
        "cryptos": "Cryptocurrency converter",
        "cryptosdescript": "",
        "gob.ar": "Government page",
        "jstdescript": "Government website in english"
        
    },
    "es": {
        "sdchalumnos": "Cursos de paracaidismo",
        "sdchdescrip": "Sitio para alumnos, en contrucción. Maquetado con Tailwind.",
        "task_title": "Anotador de tareas",
        "taskdescript": "Maquetado con normalize y skeleton.",
        "car_insurance": "Cotizador de Seguros",
        "cardescript": "Proyecto maquetado con Normalize y Skeleton.",
        "cryptos": "Convertidor de criptomonedas",
        "cryptosdescript": "Maquetado con Bootswatch, Normalize y Emotion.",
        "gob.ar": "Web JST",
        "jstdescript": "Argentina.gob.ar, sitio traducido al inglés."

    }
}
</i18n>