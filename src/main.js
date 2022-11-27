import { createApp } from 'vue'
import App from './App.vue'

import "./firebase/firebase.config.js"

// ========== Router ========== //

import { createRouter, createWebHashHistory , createWebHistory} from 'vue-router'

import Site from '@/site/Owsla.vue'

import Home from '@/views/Home.vue'
import Music from '@/views/Music.vue'
import Artists from '@/views/Artists.vue'
import Videos from '@/views/Videos.vue'
import Radio from '@/views/Radio.vue'
import Nest from '@/views/Nest.vue'
import Contact from '@/views/Contact.vue'

import Admin from '@/site/Admin.vue'

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [

    {
      path: '/', component: Site,
      children: [
        {
          path: '/', name: 'Home', component: Home
        },
        {
          path: '/music', name: 'Music', component: Music
          // component: () => import('@/views/Music.vue')
        },
        {
          path: '/artists', name: 'Artists', component: Artists
          // component: () => import('@/views/Music.vue')
        },
        {
          path: '/videos', name: 'Videos', component: Videos
          // component: () => import('@/views/Music.vue')
        },
        {
          path: '/radio', name: 'Radio', component: Radio
          // component: () => import('@/views/Music.vue')
        },
        {
          path: '/nest', name: 'Nest', component: Nest
          // component: () => import('@/views/Music.vue')
        },
        {
          path: '/Contact', name: 'Contact', component: Contact
          // component: () => import('@/views/Music.vue')
        },
      ],
    },
    {
      path: '/admin', name: 'Admin', component: Admin
    },
  ]
})

createApp(App).use(router).mount('#app')


// ========== Router ========== //


