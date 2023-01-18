import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import "./firebase/firebase.config.js"

// ========== Router ========== //

import { createRouter, createWebHashHistory , createWebHistory} from 'vue-router'

import Owsla from '@/views/Owsla.vue'

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [

    {
      path: '/', component: Owsla,
      children: [
        {
          path: '/', name: 'Home', component: () => import('@/views/home/Home.vue')
        },
        {
          path: '/music', name: 'Music', component: () => import('@/views/music/Music.vue')
        },
        {
          path: '/artists', name: 'Artists', component: () => import('@/views/artists/Artists.vue')
        },
        {
          path: '/videos', name: 'Videos', component: () => import('@/views/videos/Videos.vue')
        },
        {
          path: '/radio', name: 'Radio', component: () => import('@/views/radio/Radio.vue')
        },
        {
          path: '/nest', name: 'Nest',component: () => import('@/views/nest/Nest.vue')
        },
        {
          path: '/Contact', name: 'Contact', cocomponent: () => import('@/views/contact/Contact.vue')
        },
      ],
    },
    {
      path: '/admin', name: 'Admin', component: () => import('@/views/Admin.vue')
    },
  ]
})

// ========== Router ========== //

import { FragmentPlugin } from 'fragment-for-vue/vue3'
// import LazyTube from "vue-lazytube";
createApp(App).use(createPinia()).use(router).use(FragmentPlugin).mount('#app')