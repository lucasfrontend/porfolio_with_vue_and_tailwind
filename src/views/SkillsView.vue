<template>
  <div class="flex items-center justify-between">
      <div class="sidebar-space">
      </div>
      <div class="w-full min-h-screen">
        <Skills />
      </div>
  </div>
</template>
  
<script>
// @ is an alias to /src
import Skills from '@/components/Skills.vue'

export default {
  name: 'SkillsView',
  components: {
      Skills
  }
}
</script>
  