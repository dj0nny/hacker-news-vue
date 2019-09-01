<template>
  <div class="header">
    <div class="logo">
      <img src="https://news.ycombinator.com/y18.gif" />
      <span class="title">Hacker news</span>
    </div>
    <div class="menu-container">
      <ul id="menu">
        <li class="item"><router-link to="/">news</router-link></li> |
        <li class="item"><router-link to="/newest">newest</router-link></li> |
        <li class="item"><router-link to="/ask">ask</router-link></li> |
        <li class="item"><router-link to="/show">show</router-link></li> |
        <li class="item"><router-link to="/jobs">jobs</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style scoped>
.header {
  background-color: rgb(255, 102, 0);
  color: #222222;
  padding: 3px;
  display: flex;
}

.logo {
  display: flex;
}

.logo img {
  outline: 1px solid #fff;
}

.logo .title {
  display: block;
  margin-left: 5px;
  font-weight: bold;
}

ul#menu {
  margin: 0;
  list-style-type: none;
  padding-left: 15px;
}

ul#menu li.item {
  display: inline-block;
}

ul#menu li.item a {
  color: #222222;
  padding-right: 3px;
  padding-left: 3px;
  text-decoration: none;
}

ul#menu li.item:last-child a {
  margin-right: 0;
}

</style>
