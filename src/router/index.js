import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/common/login'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/calendar',
      component: resolve => require(['@/views/common/index'], resolve),
      meta: {
        KEY: 'aside',
        child: true,
      },
      children: [
        {
          path: '/index/calendar',
          name: 'calendar',
          component: resolve => require(['@/views/calendar/calendar'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-date',
            localekey: 'calendar'
          },
        },
        {
          path: '/index/echart',
          name: 'echart',
          component: resolve => require(['@/views/eCharts/eCharts'], resolve),
          meta: {
            child: true,
            hidden: false,
            icon: 'el-icon-office-building',
            localekey: 'echart'
          },
          children: [
            {
              path: '/index/echart1',
              name: 'echart1',
              component: resolve => require(['@/views/eCharts/eCharts1'], resolve),
              meta: {
                child: false,
                hidden: false,
                icon: 'el-icon-office-building',
                localekey: 'echart1'
              },
            },
            {
              path: '/index/echart2',
              name: 'echart2',
              component: resolve => require(['@/views/eCharts/eCharts2'], resolve),
              meta: {
                child: false,
                hidden: false,
                icon: 'el-icon-office-building',
                localekey: 'echart2'
              },
            }
          ]
        },
        {
          path: '/index/fullScreen', // 测试用例scss
          name: 'fullScreen',
          component: resolve => require(['@/views/fullScreen/fullScreen'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-full-screen',
            localekey: 'fullScreen',
          }
        },
        {
          path: '/index/table', // 测试用例 组件保持当前状态 国际化时 测试用例
          redirect: '/index/table',
          component: resolve => require(['@/views/table/index'], resolve),
          meta: {
            child: false,
            hidden: false,
            icon: 'el-icon-tickets',
            localekey: 'table',
            keepAlive: true,
          },
          children: [
            {
              path: '/index/table', // 测试用例 组件保持当前状态 国际化时 测试用例
              name: 'table',
              component: resolve => require(['@/views/table/table'], resolve),
              meta: {
                child: false,
                hidden: false,
                localekey: 'table',
                keepAlive: true,
              },
            },
            {
              path: '/index/table/detail',
              name: 'detail',
              component: resolve => require(['@/views/table/detail'], resolve),
              meta: {
                child: false,
                hidden: true,
                localekey: 'detail',
              }
            }
          ]
        }
      ]
    }
  ]
})


