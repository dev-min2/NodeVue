<template>
  <div class="container"> <!-- -->
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-center table-primary">EmpNo</th>
                    <td class="text-center"><input type="text" v-model="empInfo.EMP_NO" /></td>
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
                    <th class="text-center table-primary">Lastname</th> <!-- 라디오 -->
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
                    <th class="text-center table-primary">부서번호</th>
                    <td class="text-center">
                      <select v-model="mySelectItem">
                          <option
                            v-for="(item, index) in selectList" :key="index" :value="item.value">
                            {{ item.name }}
                          </option>
                      </select>
                    </td>
                </tr>
                <tr>
                    <th class="text-center table-primary">급여</th>
                    <td class="text-center"><input type="number" v-model="empInfo.SALARY "/></td>
                </tr>
            </table>
        </div>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="insertEmp">등록</button>
            <router-link to="/" class="btn btn-success">목록</router-link>
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
      },
      mySelectItem : '',
      selectList: [
        { name: "선택해주세요.", value: "" },
        { name: "Marketing", value: "d001" },
        { name: "Finance", value: "d002" },
        { name: "Human Resources", value: "d003" },
        { name: "Production", value: "d004" },
        { name: "Development", value: "d005" },
        { name: "Quality Management", value: "d006" },
        { name: "Sales", value: "d007" },
        { name: "Research", value: "d008" },
        { name: "Customer Service", value: "d009" },
      ]
    }
  },
  methods : {
    getToday() {
      const date = new Date();
      let format = 'YYYY-MM-DD';
      return format.replace('YYYY', date.getFullYear())
                   .replace('MM', ('0' +(date.getMonth() + 1)).slice(-2))
                   .replace('DD', ('0' + date.getDate()).slice(-2));
    },
    async insertEmp() {
      let employees = {
        EMP_NO : this.empInfo.EMP_NO,
        BIRTH_DATE : this.empInfo.BIRTH_DATE,
        FIRST_NAME : this.empInfo.FIRST_NAME,
        LAST_NAME : this.empInfo.LAST_NAME,
        GENDER : this.empInfo.GENDER,
        HIRE_DATE : this.getToday()
      }
      
      let deptEmp = {
        EMP_NO : this.empInfo.EMP_NO,
        DEPT_NO : this.mySelectItem,
        FROM_DATE : this.getToday()
      }

      let salaries = {
        EMP_NO : this.empInfo.EMP_NO,
        SALARY : this.empInfo.SALARY,
        FROM_DATE : this.getToday()
      }

      let assembleData = {
        employees,
        deptEmp,
        salaries
      }
      console.log(assembleData);
      //let sendData = JSON.stringify(assembleData);
      //console.log(sendData);

      let result = await axios.post('/api/emp',assembleData, {
        'Content-Type' : 'application/json'
      });

      if(result.status == 200) {
        alert('등록 성공')
        this.$router.push( {path : '/'});
      }
      else {
        alert('등록 실패')
      }

      console.log(result);
    }
  }
}
</script>

<style>
</style>