import { Route, Redirect, withRouter } from 'react-router-dom'
import routerMap from '@/router/index'
import { HashNavigator } from '@tma.js/sdk'
// import userInfoModel from '@/store/store'
const BasicRoute = (props: any) => {
  // const { token } = userInfoModel()
  const pathname = props.location.pathname
  const targetRouter = routerMap.find((item: any) => item.path === pathname)
  // const isLogin = token
  console.log('sdsd')
  if (!targetRouter) {
    return <Redirect to="/404" />
  }
  if (targetRouter?.redirect) {
    return <Redirect to={targetRouter.redirect} />
  }
  if (!targetRouter?.auth) {
    return <Route exact path={targetRouter.path} component={targetRouter.component} />
  }
  // if (targetRouter.auth) {
  //   // 要登录授权
  //   if (isLogin) {
  //     // 已登录
  //     return <Route exact path={targetRouter.path} component={targetRouter.component} />
  //   } else {
  //     // 未登录，要保留住之前的传参方式，哎react传参方式真多，params没做，案例只确认传参方式只会选择一下其中一种
  //     let redirect = pathname
  //     const query = JSON.stringify(props.location?.query)
  //     const state = JSON.stringify(props.location?.state)
  //     const search = props.location?.search
  //     if (query) {
  //       // 是否是query传参
  //       redirect += `&{"query":${query}}`
  //     }
  //     if (state) {
  //       // 是否是state传参
  //       redirect += `&{"state":${state}}`
  //     }
  //     if (search) {
  //       // 是否是search传参
  //       redirect += `&{"search":"${search}"}`
  //     }
  //     redirect = encodeURIComponent(redirect)
  //     return <Redirect to={`/login?redirect=${redirect}`} />
  //   }
  // }
}
export default withRouter(BasicRoute);