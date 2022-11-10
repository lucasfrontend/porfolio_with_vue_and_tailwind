<template>
  <div class="flex items-center justify-between">
      <div class="sidebar-space">
      </div>
      <div class="w-full min-h-screen">
        <Videos />
      </div>
  </div>
</template>
  
<script>
  // @ is an alias to /src
import Videos from '@/components/Videos.vue'
  
export default {
  name: 'VideosView',
  components: {
      Videos
  }
}
</script>