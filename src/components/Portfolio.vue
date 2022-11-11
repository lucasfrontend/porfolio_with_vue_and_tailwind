<template>
    <section class="text-gray-400 body-font">
        <div class="container px-5 mx-auto">
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
                img: 'https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-1/237101055_10227026837887456_841183135952431021_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=L9FT1BeiwRoAX8m8QPg&_nc_ht=scontent.faep14-3.fna&oh=00_AfCoo83efCkEw8-kQv8Ju1kSCroZ4JAA2rjD0XVKjRQpjA&oe=63600BD3',
                alt: 'alt',
                title: 'task_title',
                description: 'lorem ipsu bla bla bla',
                url: ''
            },
            {
                id: 2,
                img: 'https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-1/237101055_10227026837887456_841183135952431021_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=L9FT1BeiwRoAX8m8QPg&_nc_ht=scontent.faep14-3.fna&oh=00_AfCoo83efCkEw8-kQv8Ju1kSCroZ4JAA2rjD0XVKjRQpjA&oe=63600BD3',
                title: 'car_insurance',
                description: 'lorem ipsu bla bla bla',
                url: 'https://car-insurance-git-main-barriletefeliz.vercel.app/'
            },
            {
                id: 3,
                img: 'https://images2.imgbox.com/0d/28/1huIafC8_o.png',
                title:'Tasks',
                description: 'normalize y skeleton',
                url: 'https://administrador-de-tareas.vercel.app/'
            },
            {
                id: 4,
                img: 'https://scontent.faep14-2.fna.fbcdn.net/v/t1.18169-9/13590367_10209590482940113_1374771010547161280_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w5Ldwb8JdwoAX9-BykC&tn=bKilL2iJ8sFJBF40&_nc_ht=scontent.faep14-2.fna&oh=00_AfAOhIiQjLR13wJ2a4BDooTJcH9ViuW0rlPRx9d-OA-S9A&oe=638202E7',
                title: 'Cryptos',
                description: 'lorem ipsu bla bla bla',
                url: 'https://crypyomonedas.vercel.app/'
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
        "task_title": "Tasks Note",
        "car_insurance": "Car insurance"
    },
    "es": {
        "task_title": "Anotador de tareas",
        "car_insurance": "Cotizador de Seguros"
    }
}
</i18n>