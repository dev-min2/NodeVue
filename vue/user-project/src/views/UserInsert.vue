<template>
    <div class="container"> <!-- -->
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-center table-primary">ID</th>
                    <td class="text-center"><input type="text" v-model="userInfo.USER_ID" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">Password</th>
                    <td class="text-center"><input type="text" v-model="userInfo.USER_PWD" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">이름</th>
                    <td class="text-center"><input type="text" v-model="userInfo.USER_NAME" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">성별</th> <!-- 라디오 -->
                    <td class="text-center">
                        <input type="radio" name="radioB" value="M" v-model="userInfo.USER_GENDER" />남
                        <input type="radio" name="radioB" value="F" v-model="userInfo.USER_GENDER" />여
                    </td>
                </tr>
                <tr>
                    <th class="text-center table-primary">나이</th>
                    <td class="text-center"><input type="text" v-model="userInfo.USER_AGE"/></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">가입일자</th>
                    <td class="text-center"><input type="date" v-model="userInfo.JOIN_DATE" v-bind="getToday" /></td>
                </tr>
            </table>
        </div>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="insertUser">저장</button>
            <router-link to="/" class="btn btn-success">목록</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import dayjs from 'dayjs';

    export default {
        data() {
            return {
                userInfo : {
                    USER_ID : '',
                    USER_PWD : '',
                    USER_NAME : '',
                    USER_GENDER : '',
                    USER_AGE : '',
                    JOIN_DATE : ''
                }
            }
        },
        created() {
            this.userInfo.JOIN_DATE = this.getToday();
        },
        methods : {
            async insertUser() {
                // 자바스크립트 객체를 JSON.stringify( JSON 문자열로 변환)로 변환하지 않더라도 axios에서 내부적으로 JSON 문자열로 변환해쥼
                // https://velog.io/@juno97/fetch-axios-%EB%B9%84%EA%B5%90
                
                // 유효검사 ㅎ

                const result = await axios.post('/api/user/', this.userInfo, {
                    headers : {
                        "Content-Type" : 'application/json'
                    }
                }).catch(err => { console.log(err)});
                if(result.status === 200) {
                    console.log(result);
                    
                    this.$router.push({ path : '/'});
                }
            },
            dateFormat(value) {
                return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
            },
            getToday() {
                let today = new Date();
                const year = today.getFullYear();
                // 0
                const month = (('0' + (today.getMonth() + 1)).slice(-2));
                const day = (('0' + (today.getDate())).slice(-2));
                return `${year}-${month}-${day}`;
            }
        }
    }
</script>

<style scoped>

</style>