<template>
    <div class="w-full min-h-full bg-black">
      <div class="h-screen overflow-hidden flex items-center justify-center">
        <div class="container">
          <div class="mx-auto w-full md:w-1/2 py-8 px-4">
            <!-- Title -->
            <div class="flex items-center mb-6">
              <h1 class="text-4xl text-white mr-6">
                <span>{{ $t('contact.contactme')}} </span>
              </h1>
            </div>

            <!-- New Todo Input -->
            <div class="input-wrapper relative">
              <form action="https://formsubmit.co/lucasfrontenddev@gmail.com" method="post">
                <input
                  type="text"
                  :placeholder="$t('contact.yourname')"
                  class="p-4 mb-4 w-full bg-transparent border-grey-light text-white border rounded"
                />
                <input
                  type="text"
                  :placeholder="$t('contact.youremail')"
                  class="p-4 mb-4 w-full bg-transparent border-grey-light text-white border rounded"
                />
                <textarea 
                  type="text area"
                  :placeholder="$t('contact.writeme')"
                  class="p-4 mb-4 w-full bg-transparent border-grey-light text-white border rounded"
                ></textarea>

                <input class="bg-transparent hover:bg-dark w-full text-white cursor-pointer font-semibold px-4 border border-gray-400 rounded shadow p-4 mb-4 border rounded" type="submit" :value="$t('contact.send')"/> 
              </form>
            </div>
          </div>
        </div>

        </div> 
    </div>
  </template>

<script>
export default {
  name: 'Contacto',

}
</script>