import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faCircleCheck, faDollarSign, faCar, faGasPump, faHeart, faArrowRight} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCircleCheck, faDollarSign, faCar, faGasPump, faHeart, faArrowRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
