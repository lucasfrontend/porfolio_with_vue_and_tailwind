<template>
<div class="mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <section class="sm:bg-dark md:bg-dark lg:bg-black xl:bg-black px-4">
      <header class="text-white sm:pt-10 md:pt-10 lg:p-6 pt-10">
        <div>
          <h1 class="flex flex-col items-center justify-center text-3xl mt-8">{{ $t('about.idesign')}}</h1>
        </div>
      </header>
      <footer class="grid grid-col-6 sticky top-0 left-0 pt-6 pr-6">
        <div class="flex flex-col">
          <div class="flex justify-end">
              <a href="https://raw.githubusercontent.com/lucasfrontend/porfolio_with_vue_and_tailwind/main/src/assets/download/CV_Martinez_Lucas.pdf" download="cv_lucas.pdf" class="bg-gray-300 hover:bg-lightest text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>{{ $t('about.download')}}</span>
              </a>
          </div>
        </div>
      </footer>
    </section>
    <section class="bg-dark flex min-h-screen justify-center px-4">
      <div class="">
        <div class="mt-14">
          <h3 class="text-white mt-5 text-2xl font-medium tracking-tight lg:p-0 mb-6">Lucas Sebastian Martinez</h3>
          <div class="flex mb-4">
            <p class="text-white flex">{{ $t('about.birthday')}} <span class="text-lightest text-lightest font-code ml-2">{{ $t('about.july')}}</span></p>
        </div>
        <div class="flex mb-4">
            <p class="text-white flex">{{ $t('about.adress')}}<span class="text-lightest font-code ml-2">Recoleta, BsAs. ARG</span></p>
        </div>
        <div class="flex mb-4">
            <p class="text-white flex">Freelance: <span class="text-lightest font-code ml-2">{{ $t('about.available')}}</span></p>
        </div>
        <div class="flex mb-4">
          <p class="text-white flex flex-inline">{{ $t('about.phone')}}<span class="text-lightest font-code ml-2">+054 11 2386 8020 <a href="https://wa.me/541123868020?text=Hi%20Lucas!" class="cursor-pointer font-code ml-2 text-green"><font-awesome-icon icon="text-green fa-brands fa-whatsapp" /></a></span></p>
        </div>
        <div class="flex mb-6">
          <p class="text-white flex">email: <span><a href="mailto:lucasfrontenddev@gmail.com" class="text-blue-300 cursor-pointer font-code ml-2">lucasfrontenddev@gmail.com</a></span></p>
      </div>
        
        <div> 
            <h3 class="text-white text-2xl  mb-6">{{ $t('about.education')}}</h3>
        </div>
          <ul>
            <li class="relative flex items-baseline gap-6">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-200">
                  <a href="https://www.coderhouse.com/" target="_blank">
                      <span class="text-blue-300">CoderHouse </span>
                    </a>
                    2022
                </p>
                <p class="text-gray-200 mt-2">FullStack Developer</p>
                <p class="mt-2 text-gray-300 text-sm mb-20 font-code">{{ $t('about.coder')}}</p>
              </div>
            </li>
            <li class="relative flex items-baseline gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-200">
                  <a href="https://www.coderhouse.com/" target="_blank">
                      <span class="text-blue-300">CourseIT </span>
                    </a>
                    2020
                </p>
                <p class="text-gray-200 mt-2">Frontend Developer</p>
                <p class="mt-2 text-gray-300 text-sm mb-20 font-code">{{ $t('about.courseit')}}</p>
              </div>
            </li>
            <li class="relative flex items-baseline gap-6 pb-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
            </li>
          </ul>
          <div class="prose-lg text-white">
            <div>
              <h3 class="text-white text-2xl  mb-6">{{ $t('about.experience')}}</h3>
            </div>
            <ul>
              <li class="relative flex items-baseline gap-6">
                <div class="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-200">
                    <a href="https://www.argentina.gob.ar/jst" target="_blank">
                      <span class="text-blue-300">{{ $t('about.jst')}}</span>
                    </a>
                    {{ $t('about.2019')}}</p>
                    <p class="text-gray-200 mt-2">{{ $t('about.dev')}}</p>
                  <p class="mt-2 text-gray-300 text-sm mb-20 font-code">{{ $t('about.jst-description')}}</p>
                </div>
              </li>
              <li class="relative flex items-baseline gap-6 pb-5">
                <div class="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-200">
                  <a href="https://www.paracaidismochascomus.com/" target="_blank">
                      <span class="text-blue-300">{{ $t('about.sdch')}}</span>
                    </a>
                    {{ $t('about.2020')}}
                    <p class="text-gray-200 mt-2">{{ $t('about.dev-sdch')}}</p>
                    <p class="mt-2 text-gray-300 text-sm mb-20 font-code">{{ $t('about.dev-sdch-')}}</p>
                  </p>
                </div>
              </li>
              <li class="relative flex items-baseline gap-6 pb-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',

}
</script>