
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Create Pinia instance
const pinia = createPinia()

// Use Pinia instance in the app
app.use(pinia)

app.mount('#app')