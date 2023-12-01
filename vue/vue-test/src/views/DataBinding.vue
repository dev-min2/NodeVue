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
        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
            <hr>
            <img v-bind:style="styleData" v-bind:src="imgUrl" />
            <br>
            <!-- 여러개 바인딩 가능 -->
            <img v-bind:style="[backSetting, addStyle]" v-bind:src="imgUrl" />
            <!-- 뷰에 등록된 데이터가 아닌 style의 -->
            <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError }">
                Class Binding First
            </div>

            <!-- 바인딩 데이터에 style 클래스명을 달수있음. -->
            <div v-bind:class="myClass">Class Binding Second</div>
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
                city : [], // check박수 는 배열이여야해,
                hobby : '운동',
                imgUrl : 'https://kr.vuejs.org/images/logo.png',
                styleData : {
                    backgroundColor : "skyblue",
                    width: '200px'
                },
                backSetting : 'background-color:skyblue; width: 200px;',
                addStyle : 'height : 200px; ',
                isActive : false,
                isRed : false,
                myClass : 'active'
            }
        },
        // 템플릿에서 사용할만한 복잡한 로직을 여기서 사용
        // 연결성을 가지고 동작을 할 때.(methods와 사실상 동일한데, computed는 캐싱을 사용하여 변한게없다면 이전 결과값을 저장했다가 리턴.)
        computed : {
            hasError() {
                return !this.isActive;
            }
        }
    }
</script>
<style scoped>
    container {
        width: 100%;
        height: 200px;
    }

    .active {
        background-color : aquamarine;
        font-weight: bold;
    }

    .text-red {
        color : red;
    }

</style>
