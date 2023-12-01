<template>
    <div class="container">
        <table class="table">
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
                <tr :key="index" v-for="(user, index) in userList">
                    <td>{{ user.USER_NO }}</td>
                    <td>{{ user.USER_ID }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.join_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // npm install axios
    import axios from 'axios';

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
        methods : {
            async getUserList() {
                let list = (await axios.get('/user').catch(err => {
                    console.log(err);
                }));

                console.log(list);


                this.userList = list.data;
            }
            
        }

    }
</script>

<style scoped>

</style>
