// createApp es mi primara instania de vue y esta es una instancia global
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
