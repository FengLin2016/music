import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Hot from '@/components/Hot/Hot'
import Search from '@/components/Search/Search'
import Theme from '@/components/Theme/Theme'
import Song from '@/components/Song/Song'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/theme',
      name: 'Theme',
      component: Theme
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/song',
      name: 'Song',
      component: Song
    },
    {
      path: '/*',
      redirect: '/home',
      component: Home
    }
  ]
})
