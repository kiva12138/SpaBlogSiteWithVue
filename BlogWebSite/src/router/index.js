import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/components/NotFound'
import Recommand from '@/components/Recommand'
import Blog from '@/components/Blog'
import Question from '@/components/Question'
import Resource from '@/components/Resource'
import Person from '@/components/Person'

import BlogPage from '@/components/BlogPage/BlogPage'
import QuestionPage from '@/components/QuestionPage/QuestionPage'
import ResourcePage from '@/components/ResourcePage/ResourcePage'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '页面不见了QWQ'
      }
    },
    {
      path: '/',
      name: 'Default',
      component: Recommand,
      meta: {
        title: 'HB博客论坛社区'
      }
    },
    {
      path: '/recommand',
      name: 'Recommand',
      component: Recommand,
      meta: {
        title: 'HB博客论坛社区'
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: {
        title: 'HB博客区'
      }
    },
    {
      path: '/blog/article/:id',
      name: 'BlogArticle',
      component: BlogPage,
      meta: {
        title: 'BlogTitle'
      }
    },
    {
      path: '/question',
      name: 'Question',
      component: Question,
      meta: {
        title: 'HB论坛区'
      }
    },
    {
      path: '/question/article/:id',
      name: 'QuestionArticle',
      component: QuestionPage,
      meta: {
        title: 'QuestionTitle'
      }
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource,
      meta: {
        title: 'HB资源区'
      }
    },
    {
      path: '/resource/article/:id',
      name: 'ResourceArticle',
      component: ResourcePage,
      meta: {
        title: 'ResourceTitle'
      }
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
      meta: {
        title: '个人中心'
      }
    }
  ]
})

export default router
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {})
