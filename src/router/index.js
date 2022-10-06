import Vue, { defineAsyncComponent } from 'vue'
import VueRouter from 'vue-router'

const EmptyRouterView = () => import(/* webpackChunkName: "empty-router-view" */ '@/views/EmptyRouterView/index.vue')
const Login = () => import(/* webpackChunkName: "empty-router-view" */ '@/views/Login/index.vue')
const Dashboard = defineAsyncComponent(() => import("dashboard/Dashboard"))

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: EmptyRouterView,
    redirect: {
      path: '/login'
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior(to, from) {
        // always scroll to top when navigate to other route
    if (to.path !== from.path) {
      return { x: 0, y: 0 }
    }
  },
  routes
})


export default router