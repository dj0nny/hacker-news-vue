<template>
  <div class="newest-list-container">
    <span v-if="isLoading">Loading....</span>
    <NewsList v-if="!isLoading" :list="show" />
    <span @click="more" class="more-link">More</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsList from '../components/NewsList.vue';

export default {
  name: 'Show',
  components: {
    NewsList,
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapState([
      'isLoading',
      'show',
    ]),
  },
  watch: {
    page(value) {
      this.FETCH_SHOW(value);
    },
  },
  methods: {
    ...mapActions([
      types.FETCH_SHOW,
    ]),
    more() {
      this.page += 1;
    },
  },
  async created() {
    await this.FETCH_SHOW(this.page);
  },
};
</script>
