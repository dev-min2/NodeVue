<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused">
    <!-- 컴포넌트를 동적으로 선택ㄴ -->
    <component v-bind:is="selected"></component>
    
  </div>
</template>

<script>
import PropsComponentVue from './components/PropsComponent.vue'
import SlotCom from './components/TextModal.vue'
import test from './components/CompositionInterface.vue'
import storeCom from './components/StoreComponent.vue'

export default {
  name: 'App',
  components: {
    PropsComponentVue,
    SlotCom,
    test,
    storeCom
  },
  data() {
    return {
      selected : 'PropsComponentVue',
      isFocused : false
    }
  }
}
</script>

<style>

</style>
