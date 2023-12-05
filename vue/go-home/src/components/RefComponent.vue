<template>
    <div>
        <input type="text" v-model="content" />
        <p>{{ content }}</p>
        <button @click="plusCount">더하셈</button>

        <!-- 자식 컴포넌트가 아닌 태그에도 ref를 사용할 수 있씀 -->
        <button ref="cBtn" @click="plusCount">태그에도 ref를 달수있답니당</button>
    </div>
</template>

<script>
    export default {
        // 부모에서 ref를 통해 자식 컴포넌트인 content를 접근
        methods : {
            plusCount() {
                if((typeof this.content) == 'number') {
                    let sum = Number(this.content) + 100;
                    this.content = sum;
                }
                else {
                    alert('데이터 타입이 숫자가 아닌닌닌임임임ㅋㅋ..ㅜㅡ,')
                }
            }
        },
        data() {
            return {
                content : ''
            }
        },
    }
</script>

<style scoped>

</style>