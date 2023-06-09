import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';
import PostDetails from '@/pages/PostDetails';
import PostPageWithStore from '@/pages/PostPageWithStore';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostDetails
  },
  {
    path: '/store',
    component: PostPageWithStore
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

