import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import './assets/css/card-list.css'

createApp(App).mount('#app')
const app = createApp(App)

app.use(router)

app.mount('#app')