import { createApp } from 'vue'
import App from './App.vue'
import mixin from '../mixin.js'
import store from './store.js'

// 전역에서 mixin을 사용할 시 여기서 use처리
createApp(App)
.use(store)
.mixin(mixin)
.directive('focus', {
    mounted(el, binding, vnode, prevNode) {
        console.log('mounted', el, binding, vnode, prevNode);
        if(binding.value) {
            el.focus();
        }
    },
    updated(el, binding, vnode, prevNode) {
        console.log('mounted', el, binding, vnode, prevNode);
        if(binding.value) {
            el.style.color = "red";
        }
    }
})
.mount('#app')
