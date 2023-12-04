<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }} </caption>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>                    
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>                
            </thead>
            <tbody>
                <tr :key="user.USER_NO" v-for="(user) in userList"
                    @click="goToUserInfo(user.USER_NO)">
                    <td>{{ user.USER_NO }}</td>
                    <td>{{ user.USER_ID }}</td>
                    <td>{{ user.USER_NAME }}</td>
                    <td>{{ user.USER_GENDER }}</td>
                    <td>{{ user.JOIN_DATE }}</td>
                </tr>
            </tbody>
        </table>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="insertUserForm">등록</button>
        </div>
    </div>
</template>

<script>
    // npm install axios
    import axios from 'axios';
    import dayjs from 'dayjs';

    export default {
        data() {
            return {
                userList : []
            }
        },

        computed : {
            count() {
                return this.userList.length;
            }
        },
        created() {
            // 컴포넌트가 mount(컴포넌트가 부착도 되기전에)하기도 전에 초기화할 데이터 관련 진행
            this.getUserList();
        },
        mounted() {

        },
        methods : {
            async getUserList() {
                
                // 설정에는 origin만 바꾸기때문에.
                //
                let list = (await axios.get('/api/user').catch(err => {
                    console.log(err);
                }));

                console.log(list);
                let myThis = this;
                list.data.forEach(obj => {
                    const formatted = myThis.dateFormat(obj.JOIN_DATE);
                    obj.JOIN_DATE = formatted;
                })

                this.userList = list.data;
            },
            async goToUserInfo(userNo) {
                if(typeof userNo == "undefined")
                    return;
                
                // 라우터 링크를 쓰지않고 페이지 전환을 하는법
                this.$router.push({ path : '/userInfo', query : { userNo : userNo } });
                // name : route로 등록할 떄 사용한 name 속성
                // params : path 속성이 '/target/:id'일 때 { 'id' : 100 }});
            },
            dateFormat(value) {
                return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
            },
            insertUserForm() {
                this.$router.push({ path : '/userInsert' });
            }
        }

    }
</script>

<style scoped>

</style>
