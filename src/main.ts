import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.css'
import './styles/variables.css'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
