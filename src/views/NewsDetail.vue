<template>
  <div class="detail">
    <div v-if="isLoading">
      <h3>Loading...</h3>
    </div>
    <div class="news-detail" v-if="!isLoading">
      <NewsItem :item="newsDetail" />
      <Comment v-for="comment in newsDetail.comments" :key="comment.id" :data="comment" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

import NewsItem from '../components/NewsItem.vue';
import Comment from '../components/Comment.vue';

export default {
  name: 'NewsDetail',
  components: {
    NewsItem,
    Comment,
  },
  computed: {
    ...mapState([
      'newsDetail',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions([
      types.FETCH_NEWS_DETAIL,
    ]),
  },
  async created() {
    await this.FETCH_NEWS_DETAIL(this.$route.params.id);
  }
};
</script>
