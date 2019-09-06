import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import types from './types';

const BASE_URL = 'https://api.hackernews.io';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    isLoading: false,
  },
  mutations: {
    [types.IS_LOADING](state, status) {
      state.isLoading = status;
    },
    [types.SET_NEWS](state, newsList) {
      const { news } = state;
      const newsComplete = news.concat(newsList);
      state.news = newsComplete;
    },
  },
  actions: {
    async [types.FETCH_NEWS]({ commit }, page) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/news?page=${page}`);
      commit(types.SET_NEWS, res.data);
      commit(types.IS_LOADING, false);
    },
  },
});
