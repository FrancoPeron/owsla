import { createApp } from 'vue'
import App from './App.vue'

import "./firebase/firebase.config.js"

// ========== Router ========== //

import { createRouter, createWebHashHistory , createWebHistory} from 'vue-router'

import Site from '@/site/Owsla.vue'

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [

    {
      path: '/', component: Site,
      children: [
        {
          path: '/', name: 'Home', component: () => import('@/views/Home.vue')
        },
        {
          path: '/music', name: 'Music', component: () => import('@/views/Music.vue')
        },
        {
          path: '/artists', name: 'Artists', component: () => import('@/views/Artists.vue')
        },
        {
          path: '/videos', name: 'Videos', component: () => import('@/views/Videos.vue')
        },
        {
          path: '/radio', name: 'Radio', component: () => import('@/views/Radio.vue')
        },
        {
          path: '/nest', name: 'Nest',component: () => import('@/views/Nest.vue')
        },
        {
          path: '/Contact', name: 'Contact', cocomponent: () => import('@/views/Contact.vue')
        },
      ],
    },
    {
      path: '/admin', name: 'Admin', component: () => import('@/site/Admin.vue')
    },
  ]
})

createApp(App).use(router).mount('#app')


// ========== Router ========== //


