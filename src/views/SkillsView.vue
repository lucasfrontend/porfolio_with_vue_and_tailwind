<template>
  <div class="flex items-center justify-between">
      <div class="sidebar-space">
      </div>
      <div class="w-full min-h-screen">
        <HeaderVue />
        <Skills />
      </div>
  </div>
</template>
  
<script>
// @ is an alias to /src
import Skills from '@/components/Skills.vue'
import HeaderVue from '@/views/HeaderView.vue';



export default {
  name: 'SkillsView',
  components: {
      HeaderVue,
      Skills
  }
}
</script>
  