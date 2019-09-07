import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import types from './types';

const BASE_URL = 'https://api.hackernews.io';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    newsDetail: [],
    newest: [],
    isLoading: false,
  },
  mutations: {
    [types.IS_LOADING](state, status) {
      state.isLoading = status;
    },
    [types.SET_NEWS](state, newsList) {
      const uniqueNewsItems = {};
      state.news = state.news.concat(newsList).filter((item) => {
        if (!uniqueNewsItems[item.id]) {
          uniqueNewsItems[item.id] = true;
          return true;
        }
        return false;
      });
    },
    [types.SET_NEWS_DETAIL](state, details) {
      state.newsDetail = details;
    },
    [types.SET_NEWEST](state, newestList) {
      const uniqueNewestItems = {};
      state.newest = state.newest.concat(newestList).filter((item) => {
        if (!uniqueNewestItems[item.id]) {
          uniqueNewestItems[item.id] = true;
          return true;
        }
        return false;
      });
    },
  },
  actions: {
    async [types.FETCH_NEWS]({ commit }, page) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/news?page=${page}`);
      commit(types.SET_NEWS, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_NEWS_DETAIL]({ commit }, newsId) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/item/${newsId}`);
      commit(types.SET_NEWS_DETAIL, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_NEWEST]({ commit }, page) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/newest?page=${page}`);
      commit(types.SET_NEWEST, res.data);
      commit(types.IS_LOADING, false);
    },
  },
});
