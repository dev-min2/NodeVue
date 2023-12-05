<template>
    <div class="container">
        <table class="table">
            <tr>
                {{$dateFormat('2023/12/05','yyyy-MM-dd')}}
            </tr>
            <tr>
                <th>제목</th>
                <td>{{ title }}</td>
                <th>조회슈크림빵먹고싶다</th>
                <td> {{ readInfo }}</td>
            </tr>
            <tr>
                <th>작성자</th>
                <td> {{ writer }}</td>
                <th>작성일자</th>
                <td> {{ regdate }}</td>
            </tr>
            <tr>
                <th>내용</th>
                <td>{{ content }}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <button @click="updateInfo">업데이트하기</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import commonMixin from '../../mixin';
    export default {
        mixins : [commonMixin], // mixins 프로퍼티에 사용할 믹스인 변수를 등록
        //props: ['title','count','writer','regdate','content']
        props : {
            title : String,
            count : {
                type : Number,
                default : 0
            },
            writer : {
                // 여러타입 가능
                type : [String, Object],
                default : function() {
                    return { first : 'Adward', second : 'King'}
                }
            },
            regdate : {
                required : true, // 무조건 부모에게 전달받아야하는 속성
                validator : function(value) {
                    let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/
                    return !(value.match(format) == null);    
                }
            },
            content : String

        },
        computed : {
            readInfo() {
                return this.count + 1;
            }
        },
        methods : {
            //이벤트 전달
            updateInfo() {
                this.$emit('helloChildEvent', this.readInfo);
            }
        },
        watch : {
            // 데이터 전달 변화를 감지하고 변경된 경우 emit을 통해 부모 컴포넌트한테 알림
            readInfo() {
                this.$emit('helloChildEvent')
            }
        }
    }
</script>

<style scoped>

</style>