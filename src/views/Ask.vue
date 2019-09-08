<template>
  <div class="newest-list-container">
    <span v-if="isLoading">Loading....</span>
    <NewsList v-if="!isLoading" :list="ask" />
    <span @click="more" class="more-link">More</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsList from '../components/NewsList.vue';

export default {
  name: 'Ask',
  components: {
    NewsList,
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapState([
      'isLoading',
      'ask',
    ]),
  },
  watch: {
    page(value) {
      this.FETCH_ASK(value);
    },
  },
  methods: {
    ...mapActions([
      types.FETCH_ASK,
    ]),
    more() {
      this.page += 1;
    },
  },
  async created() {
    await this.FETCH_ASK(this.page);
  },
};
</script>
