<template>
  <div class="flex items-center justify-between">
    <div class="sidebar-space">
    </div>
    <div class="w-full min-h-screen">
      <div class="display-none">
        <HeaderBg />
      </div>
      <About />
    </div>

  </div>
</template>
  
<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import HeaderBg from '@/components/HeaderBg.vue'

export default {
  name: 'HeaderView',
  components: {
    HeaderBg,
    About
  }
}
</script>
  
<style>
@media (min-width: 1024px) {
  .display-none {
    display: none;
  }
}
</style>