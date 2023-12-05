<template>
    <div>
        <!-- slot이 있는 경우 여는태그 닫는태그로 나눔-->
        <Layout>
            <template v-slot:header>
                <h1>팝업제목</h1>
            </template>
            <template v-slot:default>
                <p>팝업 컨텐츠 1</p>
                <p>팝업 컨텐츠 2</p>
            </template>
            <template v-slot:footer>
                <button type="button">닫기</button>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from './ModalLayout.vue'
    export default {
        components : {
            Layout
        }
    }
</script>

<style lang="sass" scoped>

</style>