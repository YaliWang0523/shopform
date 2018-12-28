import Vue from 'vue'
import Router from 'vue-router'
import {CommonToken} from '@/common/CommonToken.js'
import $ from 'jquery'

const Error404 = () => import('@/components/Error/Error404')
const SellerLogin = () => import('@/components/seller/seller_login')
const BuyerLogin = () => import('@/components/buyer/buyer_login')
const BuyerList = () => import('@/components/buyer/buyer_list')
const SellerList = () => import('@/components/seller/seller_list')
const SellerCreateOrder = () => import('@/components/seller/seller_create_order')
const Home = () => import('@/components/Home')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Home }, // 根目錄
    // { path: '/about_pulo', name: 'about_pulo', component: AboutPULO }, // 關於PULO
    { path: '/error_404', name: 'error_404', component: Error404 }, // 404Error
    {path: '/seller_login', name: 'seller_login', component: SellerLogin},
    {path: '/buyer_login', name: 'buyer_login', component: BuyerLogin},
    {path: '/buyer_list/:info', name: 'buyer_list', component: BuyerList},
    {path: '/seller_list/:info', name: 'seller_list', component: SellerList},
    {path: '/seller_create_order', name: 'seller_create_order', component: SellerCreateOrder},
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
