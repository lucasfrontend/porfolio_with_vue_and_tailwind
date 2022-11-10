<template>
  <div class="flex items-center justify-between bg-black">
    <div class="w-full min-h-screen">
      <!--
      <img alt="Vue logo" src="../assets/logo.png">
      -->
      <Header />
      <IamLucas />
      <SocialNet />
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import IamLucas from '@/components/IamLucas.vue'
import SocialNet from '@/components/SocialNet.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    IamLucas,
    SocialNet
  }
}
</script>
