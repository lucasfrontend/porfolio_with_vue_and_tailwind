<template>
    <div>
        <div @click="setIsClose" :class="isOpen ? 'overlay open' : 'overlay'"></div>
    
        <button @click="setIsOpen" class="sidebar-btn">
          <font-awesome-icon icon="fa-sharp fa-bars" class="menu-btn m-0 text-3xl text-lightest"/>
        </button>
        
        <aside :class="isOpen ? 'sidebar open' : 'sidebar'">
        <a href="#" class="px-5 py-6 flex items-center justify-start">
            <img class="mx-auto rounded-full" src="../assets/lucasmardev.png" alt="">
            <!--
              <h1 class="font-medium uppercase text-sm text-white text-4xl">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-2xl h-8 text-white"/>
                LM  /
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-2xl h-8 text-white"/>
              </h1>
              -->
        </a>
        <div class="mx-2">
            <router-link class="" to="/">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-medium uppercase text-sm text-white hover:bg-light">
                  Home
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/about">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-medium uppercase text-sm text-white hover:bg-light">
                  {{ $t('sidebar.aboutme')}}
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/skills">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-medium uppercase text-sm text-white hover:bg-light">   
                  {{ $t('sidebar.skills')}}
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/portfolio">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-medium uppercase text-sm text-white hover:bg-light">
                   Porfolio
                </button>
            </router-link>
        </div>
        <div class="mx-2">
            <router-link class="" to="/videos">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-medium uppercase text-sm text-white hover:bg-light">
                  Videos
                </button>
              </router-link>
            </div>
        <div class="mx-2 mb-4">
            <router-link class="" to="/contacto">
                <button class="w-full rounded px-3 py-2 flex items-center justify-start text-sm font-medium uppercase text-sm text-white hover:bg-light">
                  {{ $t('sidebar.contact')}}
                </button>
            </router-link>
        </div>
        </aside>
    </div>
</template>

<script>0
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