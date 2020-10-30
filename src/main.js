import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/main.css'
import ClassesButton from './components/global/ClassesButton'

const app = createApp(App)

app.component('classes-button', ClassesButton)

app.mount('#app')
