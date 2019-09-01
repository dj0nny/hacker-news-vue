<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>


<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: #828282;
  background-color: rgb(246, 246, 239);
  width: 85%;
  margin: auto;
}
</style>