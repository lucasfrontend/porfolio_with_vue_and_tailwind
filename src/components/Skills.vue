<template>
    <div class="px-6 py-3 mt-20">
        <HeaderBg />
        <div class="container flex items-center justify-center">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider mb-8 flex justifiy-center">
                Porfolio
            </h1>
        </div>
        <div class="w-full m-auto flex flex-wrap justify-center">
            <transition-group appear @before-enter="beforeEnter" @enter="enter">
            <div class="p-2 w-36"
                v-for="(skill, index) in skills" 
                :data-index="index" 
                :key="skill.id">
                    <v-card-skill
                        :img="skill.img"
                        :alt="skill.alt"
                        :title="skill.title"
                    />
                </div>
            </transition-group>  
        </div>    
    </div>
</template>

<script>
import VCardSkill from '@/components/cards/VCardSkill.vue'
import gsap from 'gsap'
import HeaderBg from '@/components/HeaderBg.vue'

export default {
  name: 'Skills',
  components: {
    VCardSkill,
    HeaderBg
  },
  data() {
    return {
        skills: [
            {
                id: 1,
                /*
                img: 'https://img.shields.io/badge/-HTML5-2E303A?style=for-the-badge&logo=html5',
                */
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/html-5.svg',
                title: 'Html5',
                alt: 'html logo'
            },
            {
                id: 2,
                /*
                img: 'https://img.shields.io/badge/-CSS3-2E303A?style=for-the-badge&logo=css3',
                */
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/css.3.svg',
                title: 'CSS',
                alt: 'CSS logo'
            },
            {
                id: 3,
                /*
                img: 'https://img.shields.io/badge/-CSS3-2E303A?style=for-the-badge&logo=css3',
                */
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png',
                title: 'Javascript',
                alt: 'JS logo'
            },
            {
                id: 4,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/sass.svg',
                title:'SASS',
                alt: 'SASS logo'
            },
            {
                id: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfk1AutjTfZ2vd4rQBqI-N8ior_RFGktgM16Y6do3aNZM14yepRP4vX_i0lzDA466bmA&usqp=CAU',
                title:'Tailwind',
                alt: 'Tailwind logo'
            },
            {
                id: 6,
                img: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
                title:'BOOSTRAP',
                alt: 'BOOSTRAP logo'
            },
            {
                id: 7,
                img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
                title: 'Figma',
                alt: 'Figma logo'
            },
            {
                id: 8,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/react.svg',
                title: 'ReactJS',
                alt: 'REACT logo'
            },
            {
                id: 9,
                img: 'https://vuejs.org/images/logo.png',
                title: 'VUEjs',
                alt: 'VUE logo'
            },
            {
                id: 10,
                img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png',
                title: 'Vuetify',
                alt: 'Vuetify logo'
            },
            {
                id: 11,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png',
                title: 'Nuxt',
                alt: 'Nuxt logo'
            },
            {
                id: 12,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/node.svg',
                title: 'NODEjs',
                alt: 'NODEjs logo'
            },
            {
                id: 13,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/json.svg',
                title: 'JSON',
                alt: 'JSON logo'
            },
            {
                id: 14,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/npm.svg',
                title: 'NPM',
                alt: 'NPM logo'
            },
            {
                id: 15,
                img: 'data:image/png;base64,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',
                title: 'YARN',
                alt: 'YARN logo'
            },
            {
                id: 16,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/git.png',
                title: 'GIT',
                alt: 'GIT logo'
            },
            {
                id: 17,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg',
                title: 'Github',
                alt: 'Github logo'
            },
            {
                id: 18,
                img: 'https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg',
                title: 'Flutter',
                alt: 'Flutter logo'
            },
            {
                id: 19,
                img: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
                title: 'Python',
                alt: 'Py logo'
            },
            {
                id: 20,
                img: 'https://static.djangoproject.com/img/logo-django.42234b631760.svg',
                title: 'Django',
                alt: 'Django logo'
            },
            {
                id: 21,
                img: 'https://webpack.js.org/icon-pwa-512x512.934507c816afbcdb.png',
                title: 'Webpack',
                alt: 'Webpack logo'
            },
            {
                id: 22,
                img: 'https://webimages.mongodb.com/_com_assets/cms/la1a1agcxt7ppntea-logo-marks.svg?auto=format%252Ccompress',
                title: 'MongoDB',
                alt: 'MongoDB logo'
            },
            {
                id: 23,
                img: 'data:image/png;base64,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',
                title: 'Axios',
                alt: 'Axios logo'
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