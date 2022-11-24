<template>
    <div class="flex items-center justify-between">
        <div class="sidebar-space">
        </div>
        <div class="w-full min-h-screen">
            <HeaderBg />
            <Portfolio />
        </div>

    </div>
</template>
  
<script>
import Portfolio from '@/components/Portfolio.vue'
import HeaderBg from '@/components/HeaderBg.vue'

  export default {
    name: 'PortfolioView',
    components: {
        Portfolio,
        HeaderBg
    }
  }
  </script>
   