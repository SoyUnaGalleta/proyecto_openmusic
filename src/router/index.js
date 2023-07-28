import { createRouter, createWebHistory } from 'vue-router'
import PopView from '../views/PopView.vue'
import RockView from '../views/RockView.vue'
import RapView from '../views/RapView.vue'
import NotFound from '../components/NotFoundComponent.vue'

const routes = [
  {
    path: '/',
    name: 'rock',
    component: RockView
  },
  {
    path: '/pop',
    name: 'pop',
    component: PopView
  },
  {
    path: '/rap',
    name: 'Rap',
    component: RapView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: "/:catchAll(.*)",
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
