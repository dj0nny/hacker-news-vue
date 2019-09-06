import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NewsDetail from './views/NewsDetail.vue';
import Newest from './views/Newest.vue';
import Ask from './views/Ask.vue';
import Show from './views/Show.vue';
import Jobs from './views/Jobs.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetail,
    },
    {
      path: '/newest',
      name: 'newest',
      component: Newest,
    },
    {
      path: '/ask',
      name: 'ask',
      component: Ask,
    },
    {
      path: '/show',
      name: 'show',
      component: Show,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
  ],
});
