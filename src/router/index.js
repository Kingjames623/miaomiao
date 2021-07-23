import Vue from 'vue'
import VueRouter from 'vue-router'


import movieRotter from './movie'
import cinemaRotter from './cinema'
import mineRotter from './mine'

Vue.use(VueRouter)

const routes = [
  movieRotter,
  cinemaRotter,
  mineRotter,
  {
    //上面路径都不匹配，重定向到/movie
    path:'/*',
    redirect:'/movie'
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
