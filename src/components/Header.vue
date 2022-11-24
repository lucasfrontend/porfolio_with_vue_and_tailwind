<template>
  <div class="flex justify-end fixed z-10 top-0 right-0">
    <div class="px-5 py-4">  
      <select id="locale" v-model="$i18n.locale"
        class=" form-select appearance-none
        flex
        inline-flex
        px-3
        py-1.5
        text-base
        font-normal
        text-lightest
        bg-dark bg-clip-padding bg-no-repeat
        border border-solid border-light
        rounded
        transition
        ease-in-out
        m-0
        " aria-label="Default select example">
        <option value="es">🇪🇸&emsp; {{ $t('t.en')}} </option>
        <option value="en">🇺🇸&emsp; {{ $t('t.es')}}</option>
        <span data-flag="US"></span>
        <!-- 
          <option v-for="locale in locales" 
          :key="locale.key" 
          :value="locale.key"
          > 
          <div class="">ES{{ locale.flag }} - {{ locale.label }} 🇪🇸&emsp;</div>
        </option>
        -->
      </select>
    </div>
  </div>
  <!--
  <div class="relative h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
    <div class="absolute z-30 flex w-full h-full">
      <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
        <h2 class="text-5xl">Tailwind responsive header</h2><span></span>
      </div>
      <div class="absolute top-0 right-0 flex w-full h-full">
        <div class="w-1/3 h-full bg-lightest"></div>
        <div class="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" class="absolute inset-y-0 z-20 h-full text-indigo-500">
            <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
          </svg><svg fill="currentColor" viewBox="0 0 100 100" class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
            <polygon points="0,0 100,0 50,100 0,100"></polygon>
          </svg></div>
      </div>
    </div>
    <div class="absolute top-0 right-0 block w-9/12 h-full"><img alt="Snowy mountain lake" class="object-cover min-w-full h-full" src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></div>
  </div>



      <div class="flex items-center">
        <button class="rounded-full bg-black w-8 h-8 mr-3 text-white">
          <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-2xl"/>
        </button>
        <button class="rounded-full bg-black w-8 h-8 text-white">
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-2xl"/>
        </button>
      </div>
-->

</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    locales: [
      { key: "es", label: "Español", flag: "&emsp;"},
      { key: "en", label: "English"}
    ]
  })/*
  watch: {
    '$i18n.locale': {
      handle(locale){
        localStorage.getItem('locale', locale);
      }
    }
  }*/

}
</script>