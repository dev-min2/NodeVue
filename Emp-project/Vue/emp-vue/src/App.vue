<template>
  <Header />
  <router-view/>
  <Footer />

</template>

<script>
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'

export default {
  components : {
    Header,
    Footer
  }
}
</script>

<style>

</style>
