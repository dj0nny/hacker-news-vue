<template>
  <div class="newest-list-container">
    <span v-if="isLoading">Loading....</span>
    <NewsList v-if="!isLoading" :list="jobs" />
    <span @click="more" class="more-link">More</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsList from '../components/NewsList.vue';

export default {
  name: 'Jobs',
  components: {
    NewsList,
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapState([
      'isLoading',
      'jobs',
    ]),
  },
  watch: {
    page(value) {
      this.FETCH_JOBS(value);
    },
  },
  methods: {
    ...mapActions([
      types.FETCH_JOBS,
    ]),
    more() {
      this.page += 1;
    },
  },
  async created() {
    await this.FETCH_JOBS(this.page);
  },
};
</script>
