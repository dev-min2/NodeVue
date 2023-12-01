<template>
    <!--template안에는 하나이 dom node만 -->
    <div>
        <input type="text" v-model="grade">
        <p v-if="grade >= 90">성적 : A</p>
        <p v-else-if="grade >= 80">성적 : B</p>
        <p v-else-if="grade >= 70">성적 : B</p>
        <p  v-else-if="grade >= 60">성적 : C</p>
        <p v-else>성적 : D</p>
        <hr>
        <input type="checkbox" v-model="chData"> 선택
        <p v-show="chData">Hello, world!</p>

        <!-- 반복문과 if문을 결합해서 쓸땐 template을 다시선언 -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            grade : 100,
            chData: ''
        }
    }
}

</script>
