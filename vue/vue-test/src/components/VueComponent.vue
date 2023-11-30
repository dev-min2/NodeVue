<!-- vue 컴포넌트는 template, script, style로 구성 -->
<!-- 템플릿은 화면(HTML)-->
<template> 
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{ msg }}</p>
    </div>
</template>

<!-- msg는 input과 연결 -->
<script>
    export default {
        name : 'VueComponent',
        data() {
            return {
                msg : ''
            }
        }
    }
</script>

<!-- 해당 컴포넌트에만 style을 적용하고싶다면 scope를 이용해야함 -->
<style scoped>
    p {
        background-color: burlywood;
    }
</style>