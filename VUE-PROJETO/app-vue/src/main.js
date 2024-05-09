import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext';


const app = createApp(App)

app.component('InputText',InputText)
app.use(router)
app.use(PrimeVue)

app.mount('#app')
