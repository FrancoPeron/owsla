// ========== Router ========== //

import { createRouter, createWebHistory} from 'vue-router'

import Owsla from '@/layout/Owsla.vue'
import Admin from '@/layout/Admin.vue'

// import Home from '@/views/HomeView.vue'
import Music from '@/views/MusicView.vue'
import Artists from '@/views/ArtistsView.vue'
import Videos from '@/views/VideosView.vue'
import Radio from '@/views/RadioView.vue'
import Contact from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: Owsla,
      children: [
        {
          path: '/', name: 'Home', component: () => import('@/views/HomeView.vue')
          // path: '/', name: 'Home', Home,
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
      path: '/admin', name: 'Admin', component: Admin,
    },
  ]
})

export default router