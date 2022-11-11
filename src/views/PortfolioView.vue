<template>
    <div class="flex items-center justify-between">
        <div class="sidebar-space">
        </div>
        <div class="w-full min-h-screen">
            <HeaderView />
            <Portfolio />
        </div>

    </div>
</template>
  
<script>
import Portfolio from '@/components/Portfolio.vue'
import HeaderView from '@/views/HeaderView.vue'

  export default {
    name: 'PortfolioView',
    components: {
        Portfolio,
        HeaderView
    }
  }
  </script>
   