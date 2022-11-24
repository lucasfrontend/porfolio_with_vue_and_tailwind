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
                id: 2,
                /*
                img: 'https://img.shields.io/badge/-CSS3-2E303A?style=for-the-badge&logo=css3',
                */
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
                title: 'Javascript',
                alt: 'JS logo'
            },
            {
                id: 3,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/sass.svg',
                title:'SASS',
                alt: 'SASS logo'
            },
            {
                id: 4,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tailwind_logo.jpg',
                title:'Tailwind',
                alt: 'Tailwind logo'
            },
            {
                id: 5,
                img: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
                title:'BOOSTRAP',
                alt: 'BOOSTRAP logo'
            },

            {
                id: 4,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/react.svg',
                title: 'ReactJS',
                alt: 'REACT logo'
            },
            {
                id: 5,
                img: 'https://vuejs.org/images/logo.png',
                title: 'VUEjs',
                alt: 'VUE logo'
            },
            {
                id: 6,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/node.svg',
                title: 'NODEjs',
                alt: 'NODEjs logo'
            },
            {
                id: 7,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/json.svg',
                title: 'JSON',
                alt: 'JSON logo'
            },
            {
                id: 8,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/git.png',
                title: 'GIT',
                alt: 'GIT logo'
            },
            {
                id: 9,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg',
                title: 'Github',
                alt: 'Github logo'
            },
            {
                id: 10,
                img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/npm.svg',
                title: 'NPM',
                alt: 'NPM logo'
            },
            {
                id: 11,
                img: 'https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg',
                title: 'Flutter',
                alt: 'Flutter logo'
            },
            {
                id: 12,
                img: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
                title: 'Python',
                alt: 'Py logo'
            },
            {
                id: 13,
                img: 'https://static.djangoproject.com/img/logo-django.42234b631760.svg',
                title: 'Django',
                alt: 'Django logo'
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
        }
      )
    }
  }
}
</script>