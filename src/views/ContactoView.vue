<template>

<div class="flex items-center justify-between">
    <div class="sidebar-space">
    </div>
    <div class="w-full min-h-screen">
      <Contacto />
      <SocialNet />
    </div>
</div>

</template>

<script>
import Contacto from '@/components/Contacto.vue'
import SocialNet from '@/components/SocialNet.vue'

export default {
  name: 'ContactoView',
  components: {
      Contacto,
      SocialNet
  }
}
</script>
