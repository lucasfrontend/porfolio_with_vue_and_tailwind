<template>
  <div>
    <SideBarView />   
    <!--
    <HeaderView />
    -->
    <RouterView />
  </div>
</template>

<script>
import SideBarView from './views/SideBarView.vue';
//import HeaderView from './views/HeaderView.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    SideBarView,
//    HeaderView
  },
  methods: {
  }
}
</script>