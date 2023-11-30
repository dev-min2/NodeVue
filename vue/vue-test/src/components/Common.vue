<template>
    <div>

    </div>
</template>

<script>
    export default {
        components : [

        ],
        data() {
            return {
                today : new Date()
            }
        },
        computed : {
            AfterYear() {
                return this.today.setFullYear(this.today.getFullYear() + 1);
            }
        },
        methods : {
            test() {
                console.log(this.$data, this.testData);
            }
        },
        watch : {
            
        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>