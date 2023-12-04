<template>
    <div class="container"> <!-- -->
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-center table-primary">No</th>
                    <td class="text-center">{{userInfo.USER_NO}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">ID</th>
                    <td class="text-center">{{userInfo.USER_ID}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">Password</th>
                    <td class="text-center">{{userInfo.USER_PWD}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">이름</th>
                    <td class="text-center">{{userInfo.USER_NAME}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">성별</th>
                    <td class="text-center">{{userGender}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">나이</th>
                    <td class="text-center">{{userInfo.USER_AGE}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">가입일자</th>
                    <td class="text-center">{{userInfo.JOIN_DATE}}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="modifyUserForm">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link>

            <button @click="deleteUser" class="btn btn-warning">삭제</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import dayjs from 'dayjs';

    export default {
        data() {
            return {
                searchNo : '',
                userInfo : {

                }
            }
        },
        computed : {
            userGender() {
                return this.userInfo.USER_GENDER === 'M' ? '남' : '여';
            }
        },
        created() {
            this.searchNo = this.$route.query.userNo;
            this.getUserInfo();
        },
        methods : {
            async getUserInfo() {
                console.log(this.searchNo);
                const result = await axios.get('/api/user/' + this.searchNo).catch(err => { console.log(err)});
                if(result.status === 200) {
                    this.userInfo = result.data;
                    this.userInfo.JOIN_DATE = this.dateFormat(this.userInfo.JOIN_DATE);
                }
            },
            dateFormat(value) {
                return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
            },
            async deleteUser() {
                const result = await axios.delete('/api/user/' + this.searchNo).catch(err => { console.log(err)});
                console.log(result.data);
                let count = result.data.affectedRows;
                console.log(count);
                if(count > 0) {
                    //this.$router.push({ path : '/' }); 혹은
                    this.$router.push({ name : 'userList' });
                }
            },
            modifyUserForm() {
                // params는 name과 사용되어야함
                const data = {
                    query : {
                        userNo : this.userInfo.USER_NO
                    }
                };

                console.log(data);
                this.$router.push({ path : '/userModify', query : { userNo : this.userInfo.USER_NO }});
            }
        }
    }
</script>

<style scoped>

</style>