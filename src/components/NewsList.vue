<template>
  <div class="list">
    <NewsItem v-for="news in list" :key="news.id" :item="news" />
  </div>
</template>

<script>
import NewsItem from './NewsItem.vue';

export default {
  name: 'NewsList',
  components: {
    NewsItem,
  },
  props: {
    list: Array,
  },
};
</script>
