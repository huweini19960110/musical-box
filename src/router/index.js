import Vue from 'vue'
import Router from 'vue-router'

import navs from './nav'
import Navlist from '@/components/views/Search/Navlist'
import Searchheader from '@/components/views/Search/Seachhead'
import Aaabb from '@/components/views/Singer/Aaabb'
import Singerssong from '@/components/views/Singer/Singssong'
// 获取当前的push方法
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
// 改写push方法 每次返回相同的一个push方法
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

// 下面这些 走的 默认路由视图
// 如果是访问  / 路径  ===》新歌
// 如果访问   /rank  ===》 排行组件
// 如果访问   /plist  ===> 歌单组件
// 如果访问  /singer ===>歌手组件

// 走的是navBar路由视图   同时   导航位置  一直在显示  导航组件
//   只有点击搜索 才会切换navBar路由视图 ===》 搜索导航栏

// 多组件同时显示  需要用到多视图路由
export default new Router({
  routes: [
    ...navs,
    {
      path: '/navlist',
      name: 'Navlist',
      components: {
        Onav:Navlist,
        default: Searchheader
      }
    },
    {
      path:'/singer/Singerss/:id',
      name: 'Singerss',
      components: {
        Onav:Searchheader,
        default:Aaabb
      }
    },
    {
      path:'/singer/info/:singerid',
      name: 'Singerssong',
      component:Singerssong
    }
  ]
})
