<template>
    <div>
        <div class="row">
            <table class="table table-striped">
                <tr>
                    <th class="text-center table-primary">Password</th>
                    <td class="text-center"><input type="password" v-model="userInfo.USER_PWD" /> </td>
                </tr>
                <tr>
                    <th class="text-center table-primary">이름</th>
                    <td class="text-center"><input type="text" v-model="userInfo.USER_NAME" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">성별</th>
                    <td class="text-center">
                        <input type="radio" name="radioB" value="M" v-model="userInfo.USER_GENDER" />남
                        <input type="radio" name="radioB" value="F" v-model="userInfo.USER_GENDER" />여
                    </td>
                </tr>
                <tr>
                    <th class="text-center table-primary">나이</th>
                    <td class="text-center"><input type="number" v-model="userInfo.USER_AGE" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">가입일자</th>
                    <td class="text-center"><input type="date" v-model="userInfo.JOIN_DATE"  /></td>
                </tr>
            </table>
        </div>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="modifyUser">수정</button>
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
                userInfo : {}
            }
        },
        computed : {
            userGender() {
                return this.userInfo.USER_GENDER === 'M' ? '남' : '여';
            }
        },
        created() {
            console.log(this.$route);
            let data = this.$route.query.userNo;
            
            this.getUserInfo(data);
        },
        methods : {
            async getUserInfo(userNo) {
                let result = await axios.get('/api/user/' + userNo).catch(err => console.log(err));
                if(result.status === 200) {
                    this.userInfo = result.data;
                    this.userInfo.JOIN_DATE = this.dateFormat(this.userInfo.JOIN_DATE);
                    console.log(this.userInfo);
                }
            },
            getToday() {
                let today = new Date();
                const year = today.getFullYear();
                // 0
                const month = (('0' + (today.getMonth() + 1)).slice(-2));
                const day = (('0' + (today.getDate())).slice(-2));
                return `${year}-${month}-${day}`;
            },
            dateFormat(value) {
                return dayjs(value).format('YYYY-MM-DD');
            },
            async modifyUser() {
                let result = await axios.put('/api/user/' + this.userInfo.USER_NO, this.userInfo, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                });

                if(result.status === 200) {
                    alert('수정성공요');
                    
                    this.$router.push( { path : '/'});
                }
            }
        }

    }
</script>

<style scoped>

</style>