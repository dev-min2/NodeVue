<template>
    <div>
        <h3>{{title}}</h3>
        <p>저자 : {{author.name}}</p>
        <template v-if="isWrited">
            <p :key="idx" v-for="(info,idx) in author.books">
                {{info}}
            </p>
        </template>
        <p v-else>아직 출간한책이 없슴다</p>
        <button @click="plusBookInfo">정보 업데이트</button>

    </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
// data 옵션 : reactive, ref
// computed 옵션 : computed
// watch 옵션 : watch
// methods 옵션 : 내부에 함수로 서넌

const author = reactive( {
    name : 'Jon Doe',
    books : [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const title = ref('제목을 입력해'); // title.value로 접근
const isWrited = computed(()=> {
    return author.books.length > 0 ? 'Yes Hyunjin' : 'No KyungSeok';
});

watch(author.books, (info) => {
    console.log(info[info.length-1]);
})

const plusBookInfo = () => {
    let info = 'Node.js - Javascript Run'
    author.books.push(info);
}

</script>

<style lang="sass" scoped>

</style>