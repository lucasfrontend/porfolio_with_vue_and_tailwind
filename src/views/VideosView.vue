<template>
  <div class="flex items-center justify-between">
      <div class="sidebar-space">
      </div>
      <div class="w-full min-h-screen">
        <HeaderBg />
        <Videos />
      </div>
  </div>
</template>
  
<script>
  // @ is an alias to /src
import Videos from '@/components/Videos.vue'
import HeaderBg from '@/components/HeaderBg.vue'
  
export default {
  name: 'VideosView',
  components: {
    HeaderBg,
    Videos
  }
}
</script>