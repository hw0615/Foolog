import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import User from './components/User/User'
import Calendar from './components/Calendar/Calendar'
import Post from './components/Post/Post'
import Search from './components/Search'
import Statistics from './components/Statistics'

// routes setting

export const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home
    }
  },
  {
    path: '/user',
    components: {
      default: User
    }
  },
  {
    path: '/calendar',
    components: {
      default: Calendar
    }
  },
  {
    path: '/post',
    components: {
      default: Post
    }
  },
  {
    path: '/search',
    components: {
      default: Search
    }
  },
  {
    path: '/statistics',
    components: {
      default: Statistics
    }
  },
]