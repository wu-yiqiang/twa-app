import React, { Children } from 'react'
const Home = React.lazy(() => import('@/pages/home/index')) // 路由懒加载
const Mine = React.lazy(() => import('@/pages/mine/index'))
const Charge = React.lazy(() => import('@/pages/charge/index'))
const Miss = React.lazy(() => import('@/pages/404/index'))
const Crypto = React.lazy(() => import('@/pages/crypto/index'))
const routerMap: any[] = [
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home,
    auth: false,
    title: '首页',
    footerShow: false,
    meta: {
      icon: 'home'
    }
  },
  {
    path: '/crypto',
    component: Crypto,
    auth: false,
    title: 'crypto',
    footerShow: false,
    meta: {
      icon: 'charge'
    }
  },
  {
    path: '/mine',
    component: Mine,
    auth: false,
    title: '我的',
    footerShow: false,
    meta: {
      icon: 'mine'
    }
  },
  {
    path: '/charge',
    component: Charge,
    auth: false,
    title: '交易',
    footerShow: false,
    meta: {
      icon: 'charge'
    }
  },
  {
    path: '/404',
    component: Miss,
    auth: false,
    title: '交易',
    footerShow: false,
    meta: {
      icon: 'miss'
    }
  }
]

export default routerMap
