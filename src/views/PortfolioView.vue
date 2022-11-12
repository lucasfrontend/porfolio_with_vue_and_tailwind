<template>
    <div class="flex items-center justify-between">
        <div class="sidebar-space">
        </div>
        <div class="w-full min-h-screen">
            <Portfolio />
        </div>

    </div>
</template>
  
<script>
import Portfolio from '@/components/Portfolio.vue'

  export default {
    name: 'PortfolioView',
    components: {
        Portfolio
    }
  }
  </script>
   