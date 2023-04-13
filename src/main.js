import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'


/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// import ElementPlus from 'element-plus'
import App from './App.vue'

library.add(faUserSecret)

// Use plugin with optional defaults

const app =createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VCalendar, {})
// app.use(ElementPlus)
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
