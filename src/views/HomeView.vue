<template>
  <div class="flex items-center justify-between bg-black">
    <div class="w-full min-h-screen">
      <!--
      <img alt="Vue logo" src="../assets/logo.png">
      -->
      <IamLucas />
      <SocialNet />
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import IamLucas from '@/components/IamLucas.vue'
import SocialNet from '@/components/SocialNet.vue'

export default {
  name: 'HomeView',
  components: {
    IamLucas,
    SocialNet
  }
}
</script>
