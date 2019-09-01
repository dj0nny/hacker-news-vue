<template>
  <div class="news-list-container">
    <span v-if="isLoading">Loading....</span>
    <NewsList v-if="!isLoading" :list="news" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsList from '../components/NewsList.vue';

export default {
  name: 'Home',
  components: {
    NewsList,
  },
  computed: {
    ...mapState([
      'news',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions([
      types.FETCH_NEWS,
    ]),
  },
  async created() {
    await this.FETCH_NEWS();
  },
};
</script>
