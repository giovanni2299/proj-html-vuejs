import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import
{ 
    faBars, 
    faCircleCheck, 
    faDollarSign, 
    faCar, 
    faGasPump, 
    faHeart, 
    faArrowRight, 
    faWrench,
    faQuoteRight,
    faLocationDot,
    faPhoneVolume,
    faArrowLeft,
    faCaretDown,
    
    
} from '@fortawesome/free-solid-svg-icons'

import {faThumbsUp, faEnvelope, faStar as faStarEmp} from '@fortawesome/free-regular-svg-icons'

import { faInstagram, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons' 

library.add(faBars, faCircleCheck, faDollarSign, faCar, faGasPump, faHeart, faArrowRight, faWrench, faThumbsUp, faStarEmp, faQuoteRight, faLocationDot, faPhoneVolume, faEnvelope, faInstagram, faFacebookF, faTwitter, faArrowLeft, faCaretDown)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
