<template>
  <div class="container">
        
        <table class="table">
        <h2 v-show="empList.length <= 0">
          {{waitMsg}}
        </h2>
            <caption>Total : {{ totalCount }} </caption>
            <thead>
                <tr>
                    <th>EmpNo.</th>
                    <th>이름</th>                    
                    <th>성별</th>
                    <th>고용날짜</th>
                    <th>급여</th>
                    <th>부서번호</th>
                    <th>부서이름</th>
                </tr>                
            </thead>
            <tbody>
                <tr :key="emp.EMP_NO" v-for="(emp) in empList"
                    @click="goEmpView(emp.EMP_NO)">
                    <td>{{ emp.EMP_NO }}</td>
                    <td>{{ emp.FIRST_NAME + ' ' + emp.LAST_NAME }}</td>
                    <td>{{ emp.GENDER }}</td>
                    <td>{{ emp.HIRE_DATE }}</td>
                    <td>{{ emp.SALARY }}</td>
                    <td>{{ emp.DEPT_NO }}</td>
                    <td>{{ emp.DEPT_NAME }}</td>

                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example" id="hel">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" v-show="pageDTO.currentPage > 1" @click="showPage(pageDTO.currentPage - 1)">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li :key="emp.EMP_NO" v-for="(emp,idx) in empList" class="page-item">
              <template v-if="pageDTO.currentPage == (pageDTO.startPage + idx)">
                <a class="page-link active" href="#" @click="showPage(pageDTO.startPage + idx)">{{pageDTO.startPage + idx}}</a>
              </template>
              <template v-else>
                <a class="page-link" href="#" @click="showPage(pageDTO.startPage + idx)">{{pageDTO.startPage + idx}}</a>
              </template>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" v-show="pageDTO.lastPage != pageDTO.currentPage" @click="showPage(Number(pageDTO.currentPage) + 1)">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="row">
            <!--  -->
            <button class="btn btn-info" @click="insertEmpForm">등록</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmpListView',
  data() {
    return {
      empList : [],
      pageDTO : {},
      waitMsg : '데이터 받아오는중'
    }
  },
  computed : {
    totalCount() {
      return this.pageDTO.total;
    }
  },
  created() {
    this.getEmpList();
  }, 
  methods: {
    async getEmpList() {
      let result = await axios.get('/api/emp?pageNo=1').catch(err => {
                    console.log(err);
                });

      if(result.status == 200) {
        this.empList = result.data.empList;
        this.pageDTO = result.data.dto;
        console.log(this.pageDTO);
        this.empList.forEach( obj => {
          obj.HIRE_DATE = this.format(obj.HIRE_DATE);
        })
      }
    },
    goEmpView(empNo) {
      this.$router.push({ path : '/empView', query : { empNo : empNo } })
    },
    format(value) {
      let date = new Date(value);
      let formatter = 'YYYY-MM-DD';
      return formatter.replace('YYYY', date.getFullYear())
                      .replace('MM', (('0' + (date.getMonth() + 1)).slice(-2)))
                      .replace('DD', ('0' + date.getDate()).slice(-2));
    },
    async showPage(pageNo) {
      this.empList = []
      this.pageDTO = {}
      let result = await axios.get('/api/emp?pageNo=' + pageNo).catch(err => {
                    console.log(err);
                });
      if(result.status == 200) {
        this.empList = result.data.empList;
        this.pageDTO = result.data.dto;
        console.log(this.pageDTO);
        this.empList.forEach( obj => {
          obj.HIRE_DATE = this.format(obj.HIRE_DATE);
        })
      }    
    },
    insertEmpForm() {
      this.$router.push({ path : '/empInsertForm' });
    }
  }
}
</script>

<style>
  .pagination {
     justify-content : center; 
  }
</style>