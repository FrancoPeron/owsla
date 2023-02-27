import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/baseStyles.css'
import './style.css'

import "./firebase/firebase.config.js"

// Router
import router from '@/router/router.js'

// ========== APP ========== //
createApp(App).use(router).use().mount('#app')