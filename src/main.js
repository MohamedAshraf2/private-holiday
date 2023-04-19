import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

/* import font awesome icon component */


/* add icons to the library */
// import ElementPlus from 'element-plus'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faArrowRight, faUserSecret,faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { faCircleChevronDown } from '@fortawesome/free-regular-svg-icons'
// import { faCircleChevronDown} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faArrowRight,faCircleChevronDown)

// Use plugin with optional defaults

const app =createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VCalendar, {})
// app.use(ElementPlus)
app.mount('#app')


import "bootstrap/dist/js/bootstrap.js"
