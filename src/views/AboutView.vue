<template>
  <div class="flex items-center justify-between">
    <div class="sidebar-space">
    </div>
    <div class="w-full min-h-screen">
          <Header />
      <About />
    </div>

  </div>
</template>
  
<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'HeaderView',
  components: {
      About,
      Header
  }
}
</script>
  