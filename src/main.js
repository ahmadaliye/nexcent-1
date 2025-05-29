import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHome, faCog } from '@fortawesome/free-solid-svg-icons'


library.add(faUser, faHome, faCog)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Global komponent qilish

createApp(App).mount('#app')
