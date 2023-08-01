import { createRouter, createWebHistory } from 'vue-router'
import MakaleEkle from '../views/MakaleEkle.vue'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ekle',
      name: 'Ekle',
      component:MakaleEkle
    }
  ]
})

export default router
