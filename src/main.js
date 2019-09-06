import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Comment from './components/Comment.vue';

Vue.config.productionTip = false;

Vue.component('comment', Comment);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
