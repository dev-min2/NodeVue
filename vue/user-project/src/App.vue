<template>
<div>
  <Header/>
  <router-view/> <!--<router-view>태그는 페이지의 url이 이동했을 때 그 범위내에서 뿌려주는 태그. 즉 현재 라우팅된 컴포넌트를 렌더링 -->
</div>
</template>

<script>
import Header from './layouts/Header.vue'

export default {
  components : {
    Header
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
