<template>
  <div class="news-list-container">
    <span v-if="isLoading">Loading....</span>
    <NewsList v-if="!isLoading" :list="news" />
    <span @click="more" class="more-link">More</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsList from '../components/NewsList.vue';

export default {
  name: 'Home',
  data: () => ({
    page: 1,
  }),
  watch: {
    page(value) {
      this.FETCH_NEWS(value);
    },
  },
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
    more() {
      this.page += 1;
    },
  },
  async created() {
    await this.FETCH_NEWS(this.page);
  },
};
</script>


<style>
span.more-link {
  display: block;
  color: #000;
  cursor: pointer;
}
</style>
