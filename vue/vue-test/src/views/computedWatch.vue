<!-- Computed는 methods와 거의 동일. Computed는 
    둘다 Vue 인스턴스내의 정의된 데이터 값의 변경을 감시하고, 변경될 때 동작
    computed는 데이터. 값을 캐싱하고 있기에 변경이 일어날때만 함수안의 코드가 동작
    watch는 함수. 값이 변경되면 호출됨..ㅋㅋ!_!
-->

<template>
    <div>
        <input type="number" v-model="price"> 원
        <br>
        <input type="number" v-model="count"> 개
        <p>과세 금액 : {{ amount }}</p>
        <p>부가세 10% : {{ tax }}</p>
        <p>결제 금액 : {{ total }}</p>
    </div>
</template>

<script>
    const watch = {
        data() {
            return {
                price : 0,
                count : 0,
                amount : '',
                tax : '',
                total : ''
            }
        },
        // 정의된 데이터와 이름을 맞춤.
        // watch는 return구문 x 변경이 될 때 추가적인 action을 위한거
        watch : {
            price() { 
                this.amount = this.price * this.count;
            },
            count() {
                this.amount = this.price * this.count;
            },
            amount() {
                this.tax = this.amount * 0.1;
                this.total = this.amount + this.tax;
            }
        }
    }

    export default watch
    // export default {
    //     data() {
    //         return {
    //             price : 0,
    //             count : 0
    //         }
    //     },

    //     // computed는 readOnly 데이터를 정의하는 곳이며, 주로 계산되야할 데이터를 정의
    //     computed : {
    //         amount() {
    //             return this.price * this.count;
    //         },
    //         tax() {
    //             return this.amount * 0.1
    //         },
    //         total() {
    //             return this.amount + this.tax;
    //         }
    //     }
    // }
</script>
