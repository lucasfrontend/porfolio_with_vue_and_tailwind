<template>
  <div>
    <SideBarView />   
    <HeaderView />
    <RouterView />
  </div>
</template>

<script>
import SideBarView from './views/SideBarView.vue';
import HeaderView from './views/HeaderView.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    SideBarView,
    HeaderView
  },
  methods: {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700");
@import url("https://fonts.googleapis.com/css?family=Orbitron:700");
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");
a {text-decoration: none;}
* {transition: 0.4s ease;}

body {
    font-family: "Roboto";
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
    font-weight: 400;
    
}
</style>