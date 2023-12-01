<!--
    vue에서 $로 시작하는 속성은 전역 객체 속성(변수,함수)이다.
    private하게 사용하는게 아닌 public하게 사용하는 속성
    vue에서 이벤트 핸들러에 이벤트 객체뿐아닌 내가 원하는 값도 등록해 받을 수 있음.

    이벤트 받는법
    <tag @event="이벤트 핸들러 함수 이름">
    <tag @event="이벤트 핸들러 함수 이름($event)">
    
-->
<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>

        <!-- 두개의 함수를 넣는것도 가능 -->
        <button type="button" @click="setCount(num, $event), msg()">Add {{num}}</button>
        <p>The Counter is : {{ counter }}</p>

        <!-- 수식어 기반 키 이벤트 조합 가능 
            @keyup.ctrl.enter = ""

            .stop == Event객체의 stopPropagation    
             -> 상위요소와 하위요소 모두 클릭 이벤트가 걸려있을 때 하위요소 클릭시. 상위요소 이벤트까지 차례대로 발생하는 것 -> 이벤트 버블링
            .prevent == Event 객체의 preventDefault
             -> @click.prevent
        -->
        <hr>
        <form @click.self="msg('form 선택했음')"> <!--  버블링시 자기자신은 제외 -->
            Form
            <div @click="msg('div 선택했음')">
                Div
                <p @click.stop="msg('p 선택했음')"> <!-- 이벤트 버블링 마금 -->
                    p <a href="http://www.naver.com" @click.prevent>네이버</a>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter : 0 ,
                num : 7
            }
        },
        methods : {
            increaseCounter(event) {
                console.log(event); // 이벤트 잘넘어옴
                this.counter++;
            },
            setCount(value, event) {
                console.log(event);
                this.counter = this.counter + value;
            },
            msg(msg) {
                alert(`${msg} 선택 ㅎ`);
            }
        }
    }
</script>

<style scoped>
    form, form * {
        margin: 10px;
        border : 1px solid black;
    }
</style>