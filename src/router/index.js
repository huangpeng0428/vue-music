/*
 * @Date: 2019-09-07 22:35:20
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-08 19:36:10
 */
import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'components/recommend/recommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }
  ]
})
