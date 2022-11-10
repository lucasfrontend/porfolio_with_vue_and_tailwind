import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import './assets/tailwind.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faYoutube, faGithub, faInstagram, faFacebookF, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import {faBars, faHome, faAddressCard, faDownload, faList, faPlay, faChevronLeft, faChevronRight, faCircle} from '@fortawesome/free-solid-svg-icons'

import i18n from './i18n'

/* add icons to the library */
library.add(faBars, faHome, faAddressCard, faDownload, faList, faPlay, faChevronLeft, faChevronRight, faYoutube, faGithub, faInstagram, faFacebookF, faLinkedinIn, faCircle, faWhatsapp)

const app = createApp(App).use(i18n)

app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
