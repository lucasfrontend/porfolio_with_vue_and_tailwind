<template>
    <div class="">
      <SideBar msg="SideBar"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBar from '@/components/SideBar.vue'
  
  export default {
    name: 'SideBarView',
    components: {
        SideBar
    }
  }
  </script>
  