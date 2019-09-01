<template>
  <div>
    home
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

export default {
  name: 'Home',
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
