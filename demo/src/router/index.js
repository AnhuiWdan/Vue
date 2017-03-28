import Vue from 'vue'
import Router from 'vue-router'
import Watch from '@/components/article/watch'
import Publish from '@/components/article/publish'
import add from '@/components/column/add'
import seeCm from '@/components/column/seeCm'
import index from '@/components/menu/index'
import psd from '@/components/menu/psd'
import system from '@/components/menu/system'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Publish',
      component: Publish
    },
    {
      path: '/Watch',
      component: Watch
    },
    {
      path: '/add',
      component: add
    },
    {
      path: '/seeCm',
      component: seeCm
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/psd',
      component: psd
    },
    {
      path: '/system',
      component: system
    },
    { path: '*', redirect: '/Publish' },


  ]
})
