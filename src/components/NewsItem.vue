<template>
  <div class="news-item">
    <a :href="item.url" target="_blank" class="title">{{ item.title }}</a>
    <span class="domain">({{ item.domain }})</span>
    <div class="subtext">
      {{ item.points }} points by {{ item.user }} {{ item.time_ago }} | <router-link class="comment-link" :to="{name: 'news-detail', params: { id: item.id }}">{{ item.comments_count }} comments</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    item: Object,
  },
};
</script>

<style>
.news-item {
  margin-bottom: 5px;
  padding: 5px;
}

.news-item::before {
  counter-increment: news;
  content: counter(news) ". ";
}

a.title {
  color: #000;
  text-decoration: none;
}

.comment-link {
  text-decoration: none;
  color: #000
}

.comment-link:hover {
  text-decoration: underline;
}

span.domain {
  font-size: 8pt;
  color: #828282;
  margin-left: 10px;
}

div.subtext {
  font-size: 7pt;
  color: #828282;
}
</style>
