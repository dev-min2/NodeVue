<template>
    <div class="conatiner">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-center table-primary">EmpNo</th>
                    <td class="text-center">{{empInfo.EMP_NO}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">이름</th>
                    <td class="text-center">{{empInfo.FIRST_NAME + ' ' + empInfo.LAST_NAME}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">생일</th>
                    <td class="text-center">{{empInfo.BIRTH_DATE}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">성별</th>
                    <td class="text-center">{{empInfo.GENDER}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">급여</th>
                    <td class="text-center">{{empInfo.SALARY}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">부서번호</th>
                    <td class="text-center">{{empInfo.DEPT_NO}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">부서이름</th>
                    <td class="text-center">{{empInfo.DEPT_NAME}}</td>
                </tr>
                <tr>
                    <th class="text-center table-primary">고용날짜</th>
                    <td class="text-center">{{empInfo.HIRE_DATE}}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="modifyUserForm">수정하기</button>
            <router-link to="/" class="btn btn-success">목록</router-link>
            <button @click="deleteUser" class="btn btn-warning">삭제</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                empInfo : { 
                    EMP_NO : 0,
                    BIRTH_DATE : '',
                    FIRST_NAME : '',
                    LAST_NAME : '',
                    GENDER : '',
                    HIRE_DATE : '',
                    DEPT_NO : '',
                    FROM_DATE : '',
                    TO_DATE : '',
                    SALARY : 0
                }
            }
        },
        async created() {
            await this.getEmpInfo(this.$route.query.empNo);
        },
        methods : {
            async getEmpInfo(empNo) {
                let result = await axios.get('/api/emp/' + empNo).catch(err => console.log(err));
                if(result.status == 200) {
                    this.empInfo = result.data;
                    this.empInfo.BIRTH_DATE = this.format(this.empInfo.BIRTH_DATE);
                    this.empInfo.HIRE_DATE = this.format(this.empInfo.HIRE_DATE);
                    this.empInfo.GENDER = this.empInfo.GENDER == 'M' ? '남' : '여';
                }
            },
            format(value) {
                let date = new Date(value);
                let format = 'YYYY-MM-DD';
                return format.replace('YYYY', date.getFullYear())
                             .replace('MM', ('0' + (date.getMonth() + 1)).slice(-2))
                             .replace('DD', (('0' + date.getDate()).slice(-2)));
            },
            async deleteUser() {
                const value = prompt('퇴사날짜 입력');

                let result = await axios.delete('/api/emp/' + this.empInfo.EMP_NO, { data : { to_date : value } },{ 'Content-Type' : 'application/json'}).catch(err => console.log(err));
                if(result.status == 200) {
                    alert('삭제에 성공했음');
                    this.$router.push({path : '/'});
                }
                else {
                    alert('삭제 실패');
                }
            },
            modifyUserForm() {
                this.$router.push({path : '/empUpdate', query : {empNo : this.empInfo.EMP_NO}})
            }
        }
    }
</script>

<style scoped>

</style>