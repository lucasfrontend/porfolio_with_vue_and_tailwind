<template>
  <div class="flex flex-col items-center justify-center">  
      <img class="h-auto rounded-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-10 mt-12" alt="" src="../assets/moi_c_est_luca.png" /> 
      <h1 class="text-white text-4xl pr-4">{{ $t('iamlucas.iam')}}
      </h1> 
      <h1 class="text-white text-5xl">Lucas Mar</h1>
      <h1 class="text-white text-3xl"> 
          <span class="typed-text text-lightest">{{ typeValue }}</span>
          <span class="cursor text-white inline-block bg-white ml-1 w-1" :class="{'typing': typeStatus }">&nbsp;</span>
      </h1>
  </div>
</template>

<script>
export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Web Developer', 'App Developer', 'Video Editor'],
        typingSpeed: 100,
        erasingSpeed: 50,
        newTextDelay: 500,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style>
span.cursor.typing {
    animation: none;
}

.cursor{
    animation: cursorBlink 0.5s infinite;
}

@keyframes cursorBlink {
    49% { background-color: #fff;}
    50% { background-color: transparent;}
    94% { background-color: transparent;}
    99% { background-color: transparent;}

}
</style>

<i18n>
  {
      "en": {
          "iam": ['Web Developer', 'App Developer', 'Video Editor']
      },
      "es": {
          "iam": ['Web Developer', 'App Developer', 'Video Editor']
      }
  }
</i18n>