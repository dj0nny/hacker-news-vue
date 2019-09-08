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
    ask: [],
    show: [],
    jobs: [],
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
    [types.SET_ASK](state, askList) {
      const uniqueAskItems = {};
      state.ask = state.ask.concat(askList).filter((item) => {
        if (!uniqueAskItems[item.id]) {
          uniqueAskItems[item.id] = true;
          return true;
        }
        return false;
      });
    },
    [types.SET_SHOW](state, showList) {
      const uniqueShowItems = {};
      state.show = state.show.concat(showList).filter((item) => {
        if (!uniqueShowItems[item.id]) {
          uniqueShowItems[item.id] = true;
          return true;
        }
        return false;
      });
    },
    [types.SET_JOBS](state, jobsList) {
      const uniqueJobsItems = {};
      state.jobs = state.jobs.concat(jobsList).filter((item) => {
        if (!uniqueJobsItems[item.id]) {
          uniqueJobsItems[item.id] = true;
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
    async [types.FETCH_ASK]({ commit }, page) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/ask?page=${page}`);
      commit(types.SET_ASK, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_SHOW]({ commit }, page) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/show?page=${page}`);
      commit(types.SET_SHOW, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_JOBS]({ commit }, page) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/jobs?page=${page}`);
      commit(types.SET_JOBS, res.data);
      commit(types.IS_LOADING, false);
    },
  },
});
