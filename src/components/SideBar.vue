<template>
    <div>
        <div @click="setIsClose" :class="isOpen ? 'overlay open' : 'overlay'"></div>
    
        <button @click="setIsOpen" class="sidebar-btn">
          <font-awesome-icon icon="fa-sharp fa-bars" class="menu-btn m-3 text-3xl text-white"/>
        </button>
        
        <aside :class="isOpen ? 'sidebar open' : 'sidebar'">
        <a href="#" class="px-5 py-6 flex items-center justify-start">
            <img class="mx-auto rounded-full" src="../assets/lucasmardev.png" alt="">
            <!--
              <h1 class="font-semibold text-white text-4xl">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-2xl h-8 text-white"/>
                LM  /
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-2xl h-8 text-white"/>
              </h1>
              -->
        </a>
        <div class="mx-2">
            <router-link class="" to="/">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--  
                  <font-awesome-icon icon="fa-solid fa-home" class="mr-3"/>
                  -->
                  .
              {{ $t('sidebar.home')}}
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/about">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--
                    <font-awesome-icon icon="fa-solid fa-address-card" class="mr-3" />
                  -->
                  .
                  {{ $t('sidebar.aboutme')}}
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/about">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--  
                  <font-awesome-icon icon="fa-solid fa-list" class="mr-3"/>
                  -->
                  .
                  Quality
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/skills">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--  
                  <font-awesome-icon icon="fa-solid fa-list" class="mr-3"/>
                  -->
                  .
                  {{ $t('sidebar.skills')}}
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/page2">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--
                  <font-awesome-icon icon="fa-solid fa-list" class="mr-3"/>
                  -->
                  .
                  Service
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/portfolio">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--  
                  <font-awesome-icon icon="fa-solid fa-list" class="mr-3"/>
                   -->
                   .
                   Porfolio
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/videos">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--  
                  <font-awesome-icon icon="fa-solid fa-play" class="mr-3" />
                  --> 
                  .
                  Videos
                </button>
            </router-link>
        </div>
        <div class="mx-2 mb-4">
            <router-link class="" to="/contacto">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-semibold text-white hover:bg-light">
                  <!--  
                  <font-awesome-icon icon="fa-solid fa-list" class="mr-3"/>
                  -->
                  .
                  {{ $t('sidebar.contact')}}
                </button>
            </router-link>
        </div>
        <!--
        <ul class="menu">
            <li @click="onClick(index)" v-for="(item, index) in list" :key="item" :class="index === active ? 'menu__list active' : 'menu__list'">
            <a href="#" class="menu__link">
                <div v-html="item.svg"></div>
                <div class="menu__title">{{item.name}}</div>
            </a>
            </li>
        </ul>
        -->

      35 horas de full flow state, sin dormir, transcribiendo este coso echo en js vainilla y boostrap a vuejs con tailwind.
       
        </aside>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['toggle'],
  data() {
    return {
      active: 0,
      isOpen: false
    }
  },
  methods: {
    onClick(num) {
      this.active = num; 
    },
    setIsOpen() {
      this.isOpen = true;
    },
    setIsClose() {
      this.isOpen = false;
    }
  }
}
</script>

<style>

</style>