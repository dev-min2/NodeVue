!<template>
    <div>
        <PageTitle v-bind:title="myMsg"/>
        <!-- <PageContent v-bind:title="header" :count="10" :writer="['Adward']" :regdate="'2023-12-05'" 
        :content="{ 
            first: 'Node.js',
            second : 'Vue.js'
        }" -->
        <PageContent v-bind="info" v-on:helloChildEvent="EventHandler" />

        <!--ref를 통해 부모 컴포넌트에서 자식 컴포넌트의 속성에 접근가능함. -->
        <RefCom ref="child" />
        <button @click="childHandler">자식제어</button>
    </div>
</template>

<script>
    import PageTitle from './PageTitle.vue'
    import PageContent from './PageContent.vue'
    import RefCom from './RefComponent.vue'
    export default {
        data() {
            return {
                header : '헤더임둥',
                myMsg : '멀봐염?',
                info : {
                    title : '집가고싶다',
                    count : 10,
                    writer : 'Adward',
                    regdate : '2023-12-05',
                    content : '내용 없음'
                }
            }
        },
        components : {
            PageTitle,
            PageContent,
            RefCom
        },
        methods : {
            EventHandler(data) {
                console.log(data);
                alert('눌렸음ㅋㅋ')
            },
            childHandler() {
                // 전역 refs에 등록된 child라는 id를 가진 컴포넌트로 접근(this.$refs.child)
                
                this.$refs.child.content = Number(this.$refs.child.content + 100);
                this.$refs.child.plusCount();

                // 자식의 refs 객체를 가져와서 cbtn에 졉근.
                this.$refs.child.$refs.cBtn.click();
            }
        }
    }
</script>

<style scoped>
</style>