import Vue from 'vue'
import Router from 'vue-router'
import {CommonToken} from '@/common/CommonToken.js'
import $ from 'jquery'

const Error404 = () => import('@/components/Error/Error404')
const Detail = () => import('@/components/master_of_cleaning/detail')
const Home = () => import('@/components/Home')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Home }, // 根目錄
    // { path: '/about_pulo', name: 'about_pulo', component: AboutPULO }, // 關於PULO
    { path: '/error_404', name: 'error_404', component: Error404 }, // 404Error
    {path: '/detail/:info', name: 'detail', component: Detail},
    { path: '*', component: Error404 }
  ]}
)

export default router

router.afterEach(function (to) {
  if (to && to.name !== 'project_list') {
    window.scrollTo(0, 0)
  }
})
router.beforeEach(async(to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let commonToken = new CommonToken()
    const hasToken = commonToken.HasToken()
    if (hasToken === false) {
      $('#LoginModal').modal('show')
      // next({
      //   path: ''
      // })
    } else {
      next() // 必須向下走
    }
  } else {
    next() // 必須向下走
  }
})
