import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NewsDetail from './views/NewsDetail.vue';

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
  ],
});
