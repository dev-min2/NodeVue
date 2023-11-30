<!-- -->
<template>
    <div>
        <h1>{{ title + ' !!!' }}</h1>
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList"/>
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel" readonly>
        <input type="number" v-model.lazy="numberModel">

        <p> {{ typeof valueModel }}</p>
        <p> {{ 10000 + numberModel }}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>

        <p>{{ selectModel }}</p>
        <textarea v-model="textModel"/>
        <p>{{textModel}}</p>

        <input type="checkbox" v-model="chData" true-value="여" false-value="부" />
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city" />
            <input type="checkbox" value="대구" v-model="city" />
            <p>{{city}}</p>
        </div>
    </div>
</template>

<script>
    // 컴포넌트가 가져야할 속성을 정의
    export default {
        data() {
            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>피곤해</strong>',
                valueModel : 'Korea',
                numberModel : 0,
                selectModel : '',
                textModel : '',
                chData : '',
                city : ''
            }
        }
    }
</script>