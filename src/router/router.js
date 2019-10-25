import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../view/login.vue'
Vue.use(VueRouter)
// eslint-disable-next-line no-undef
const router = new VueRouter({
  routes: [{
    path: '/login',
    component: login
  }]
})

export default router
