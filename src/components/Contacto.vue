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
              <form action="" method="post">
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
            </form>
            </div>
          </div>
        </div>
        <!--
    <div class="w-10/12 lg:w-9/12 xl:w-7/12 flex">
        <div class="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-lg lg:rounded-r-none"
            style="background-image: url('https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
        </div>
        <div class="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-l-none py-24 px-12">
            <h3 class="font-bold text-3xl text-red-600 text-center tracking-widest uppercase mb-4">Login</h3>
            <form class="bg-white">
                <div class="mb-4">
                    <label class="block mb-2 text-sm font-bold" for="username">
                        Username
                    </label>
                    <input type="text" id="username" class="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" placeholder="Username" />
                </div>
                <div class="mb-4">
                    <label class="block mb-2 text-sm font-bold" for="password">
                        Password
                    </label>
                    <input type="password" id="password" class="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" placeholder="***********" />
                </div>
                <div class="mb-4">
                    <button class="w-full p-3 font-bold text-white bg-red-500 rounded-full focus:outline-none" type="button">
                        Sign In
                    </button>
                </div>
                <hr class="mb-4 border-t" />
                <div class="text-sm text-center">
                    <a href="#">Create an Account</a>
                    <a href="#" class="text-blue-500 pl-2">Forgot Password ?</a>
                </div>
            </form>
        </div>
    </div> -->
        </div> 
    </div>
  </template>

<script>
export default {
  name: 'Contacto',

}
</script>