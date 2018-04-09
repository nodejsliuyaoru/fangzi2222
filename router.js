import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue' 
import About from './views/About.vue' 
import Xiangqing from './views/Xiangqing.vue'   
import Lsdt from './views/Lsdt.vue' 
import Lianxi from './views/Lianxi.vue'  
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
    {
      path: '/detail/:id',
      name: 'xiangqing',
      component: Xiangqing
    },
    {
      path: '/lsdt',
      name: 'lsdt',
      component: Lsdt
    },
     {
      path: '/lianxi',
      name: 'lianxi',
      component: Lianxi
    },
    {
      path: '/detail2/:id',
      name: 'detail2',
      component: Detail
    },
  ]
})
