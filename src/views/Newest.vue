<template>
  <div class="newest-list-container">
    <span v-if="isLoading">Loading....</span>
    <NewsList v-if="!isLoading" :list="newest" />
    <span @click="more" class="more-link">More</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsList from '../components/NewsList.vue';

export default {
  name: 'Newest',
  components: {
    NewsList,
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapState([
      'isLoading',
      'newest',
    ]),
  },
  watch: {
    page(value) {
      this.FETCH_NEWEST(value);
    },
  },
  methods: {
    ...mapActions([
      types.FETCH_NEWEST,
    ]),
    more() {
      this.page += 1;
    },
  },
  async created() {
    await this.FETCH_NEWEST(this.page);
  },
};
</script>
