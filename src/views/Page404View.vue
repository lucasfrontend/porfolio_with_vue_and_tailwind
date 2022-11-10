<template>

<div class="flex items-center justify-between">
        <div class="sidebar-space">
        </div>
        <div class="w-full min-h-screen flex flex-col items-center justify-center">
          <h1 class="text-white text-9xl">404</h1>
            <h2 class="text-4xl text-white font-extrabold">{{ $t('404.notfound')}}</h2>
            <p class="text-xl text-lightest mt-5">{{ $t('404.404description')}}</p>
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