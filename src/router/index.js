import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('views/home'),
    meta: {
      title: '租售服务',
      deepth: 1,
      keepAlive: true
    }
  },
  {
    path: '/house',
    name: 'house',
    component: () => import('views/house'),
    meta: {
      title: '房屋详情',
      deepth: 2
    }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition
    }
    // Workaround for transitions scrolling to the top of the page
    // However, there are still some problems being fixed by the vue team
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position)
      }, 100)
    })
  }
})

router.beforeEach((to, from, next) => {
  // 页面切换时，自定义title
  document.title = to.meta.title || '租售服务'
  next()
})

export default router
