<template>
    <section class="px-6 py-3 mt-20 text-gray-400 body-font mt-202">
        <div class="container px-5 mx-auto">
            <div class="flex items-center justify-center">
                    <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider mb-8">
                        Porfolio
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
                            :description="work.description"
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
                description: 'Construcción - 2022',
                url: 'https://chascomus-alumnos.vercel.app/',
                makew: 'Vuejs',
            },
            {
                id: 2,
                img: 'https://i.postimg.cc/VsFLz7JR/jst.png',
                title: 'gob.ar',
                alt: '',
                description: 'Government website in english',
                url: 'https://so.jst.gob.ar/idiomasJST/',
            },
            {
                id: 2,
                img: 'https://i.postimg.cc/8cRvC1gz/seguros.png',
                title: 'car_insurance',
                alt: 'Autos',
                description: 'lorem i... 2019',
                url: 'https://car-insurance-git-main-barriletefeliz.vercel.app/',
                makew: 'React',
            },
            {
                id: 3,
                img: 'https://i.postimg.cc/MZ7fVKgW/tasks.png',
                alt: '',
                title:'task_title',
                description: 'normalize y skeleton 2019',
                url: 'https://administrador-de-tareas.vercel.app/',
                makew: 'React',
            },
            {
                id: 4,
                img: 'https://i.postimg.cc/SsX7mFKn/cryptos.png',
                alt: '',
                title: 'cryptos',
                description: 'lorem ipsu ...',
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
        "sdch-descrip": "En contruccion - 2022",
        "task_title": "Tasks Note",
        "car_insurance": "Car insurance",
        "cryptos": "Cryptocurrency converter",
        "gob.ar": "Government page"
        
    },
    "es": {
        "sdchalumnos": "Cursos de paracaidismo",
        "sdch-descrip": "2022",
        "task_title": "Anotador de tareas",
        "car_insurance": "Cotizador de Seguros",
        "cryptos": "Convertidor de criptomonedas",
        "gob.ar": "Web JST"
    }
}
</i18n>