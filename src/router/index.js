import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/main/index'
import Like from '@/pages/like/index'
import Post from '@/pages/post/index'
import Media from '@/pages/media/index'
import Reply from '@/pages/reply/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/post/',
    children: [
      { path: '/like/', component: Like },
      { path: '/post/', component: Post },
      { path: '/media/', component: Media},
      { path: '/reply/', component: Reply },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
