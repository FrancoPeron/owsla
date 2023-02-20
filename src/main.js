import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './style.css'

import "./firebase/firebase.config.js"

// ========== Router ========== //

import { createRouter, createWebHistory} from 'vue-router'

import Owsla from '@/views/Owsla.vue'
import Home from '@/views/home/Home.vue'
import Music from '@/views/music/Music.vue'
import Artists from '@/views/artists/Artists.vue'
import Videos from '@/views/videos/Videos.vue'
import Radio from '@/views/radio/Radio.vue'
import Contact from '@/views/contact/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: Owsla,
      children: [
        {
          // path: '/', name: 'Home', component: () => import('@/views/home/Home.vue')
          path: '/', name: 'Home', Home,
        },
        {
          // path: '/music', name: 'Music', component: () => import('@/views/music/Music.vue')
          path: '/music', name: 'Music', component: Music,
        },
        {
          // path: '/artists', name: 'Artists', component: () => import('@/views/artists/Artists.vue')
          path: '/artists', name: 'Artists', component: Artists,
        },
        {
          // path: '/videos', name: 'Videos', component: () => import('@/views/videos/Videos.vue')
          path: '/videos', name: 'Videos', component: Videos,
        },
        {
          // path: '/radio', name: 'Radio', component: () => import('@/views/radio/Radio.vue')
          path: '/radio', name: 'Radio', component: Radio,
        },

        {
          // path: '/Contact', name: 'Contact', component: () => import('@/views/contact/Contact.vue')
          path: '/contact', name: 'Contact', component: Contact,
        },
      ],
    },
    {
      path: '/admin', name: 'Admin', component: () => import('@/views/Admin.vue')
    },
  ]
})

// ========== APP ========== //

import { FragmentPlugin } from 'fragment-for-vue/vue3'
createApp(App).use(router).use(createPinia()).use(FragmentPlugin).mount('#app')