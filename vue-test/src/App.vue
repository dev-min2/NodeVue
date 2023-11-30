<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="오늘 점심은 노브랜드 버거 App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<!-- 컴포넌트별로 style설정 가능 -->
<!-- 크롬 확장플글램 vue.js devtools 깔기-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
