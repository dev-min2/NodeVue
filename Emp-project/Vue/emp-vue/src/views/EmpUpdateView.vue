<template>
    <div class="container"> <!-- -->
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-center table-primary">EmpNo</th>
                    <td class="text-center"><input type="text" v-model="empInfo.EMP_NO" readonly /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">생일</th>
                    <td class="text-center"><input type="date" v-model="empInfo.BIRTH_DATE" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">Firstname</th>
                    <td class="text-center"><input type="text" v-model="empInfo.FIRST_NAME" /></td>
                </tr>
                <tr>
                    <th class="text-center table-primary">Lastname</th> 
                    <td class="text-center">
                        <input type="text" v-model="empInfo.LAST_NAME" />
                    </td>
                </tr>
                <tr>
                    <th class="text-center table-primary">성별</th>
                    <input type="radio" name="radioB" value="M" v-model="empInfo.GENDER " />남
                        <input type="radio" name="radioB" value="F" v-model="empInfo.GENDER " />여
                </tr>
                <tr>
                    <th class="text-center table-primary">고용날짜</th>
                    <td class="text-center"><input type="date" v-model="empInfo.HIRE_DATE" /></td>
                </tr>
            </table>
        </div>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="updateEmp">수정</button>
            <button class="btn btn-success" @click="backBtn">돌아가기</button>
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
                    HIRE_DATE : ''
                }
            }
        },
        created() {
            this.getEmpInfo(this.$route.query.empNo)
        },
        methods : {
            async getEmpInfo(empNo) {
                let result = await axios.get('/api/emp/' + empNo).catch(err => console.log(err));
                if(result.status == 200) {
                    this.empInfo = result.data;
                    this.empInfo.HIRE_DATE = this.format(this.empInfo.HIRE_DATE);
                    this.empInfo.BIRTH_DATE = this.format(this.empInfo.BIRTH_DATE);
                }
                
            },
            backBtn() {
                this.$router.push({path : '/empView', query : { empNo : this.empInfo.EMP_NO }})
            },
            format(value) {
                let date = new Date(value);
                let format = 'YYYY-MM-DD';
                return format.replace('YYYY', date.getFullYear())
                             .replace('MM', ('0' + (date.getMonth() + 1)).slice(-2))
                             .replace('DD', (('0' + date.getDate()).slice(-2)));
            },
            async updateEmp() {
                console.log('updateEmp');
                console.log(this.empInfo);
                let sendData = {
                    BIRTH_DATE : this.format(this.empInfo.BIRTH_DATE),
                    FIRST_NAME : this.empInfo.FIRST_NAME,
                    LAST_NAME : this.empInfo.LAST_NAME,
                    GENDER : this.empInfo.GENDER,
                    HIRE_DATE : this.format(this.empInfo.HIRE_DATE)
                };
                
                console.log('updateEmp');
                console.log(sendData);

                let result = await axios.put('/api/emp/' + this.empInfo.EMP_NO,sendData, { 'Content-Type' : 'application/json'}).catch(err => console.log(err));
                if(result.status == 200) {
                    alert('수정에 성공');
                    this.$router.push({path : '/empView', query : { empNo : this.empInfo.EMP_NO}});
                }
                else {
                    alert('수정에 실패..');
                }
            }
        }
    }
</script>

<style scoped>

</style>