<template>
  <div class="comment">
    <span class="comment-meta">{{ data.user }} {{ data.time_ago }}</span>
    <div class="comment-body" v-html="data.content"></div>
    <div class="nested">
      <Comment v-for="comment in data.comments" :key="comment.id" :data="comment" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: [
    'data'
  ]
}
</script>

<style scoped>
span.comment-meta {
  display: block;
  font-size: 8pt;
  color: #828282;
  margin-left: 10px;
}

.comment {
  margin-bottom: 20px;
  max-width: 1215px;
  overflow: auto;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 9pt;
}

.comment-body {
  margin-left: 20px;
}

.nested {
  margin-left: 30px;
}

.nested .comment {
  margin-bottom: 0;
}
</style>