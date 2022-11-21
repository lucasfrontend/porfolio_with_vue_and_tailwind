<template>
  <div class="flex items-center justify-between">
    <div class="sidebar-space">
    </div>
    <div class="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-white text-8xl">404</h1>
      <h5 class="text-3xl text-center text-white font-extrabold">{{ $t('404.notfound')}}</h5>
      <p class="text-xl text-center text-lightest mt-5 p-4">{{ $t('404.404description')}}</p>
      <div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'Page404View',
  }
  </script>