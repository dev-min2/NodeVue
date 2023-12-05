// mixin.js (공통모듈집합)

export default {
    methods : {
        $dateFormat(value, format) {
            if((typeof format) == "undefined" || (typeof value) == "undefined")
                return null;
            
            let today = new Date(value);
            return format.replace('yyyy', today.getFullYear())
                         .replace('MM', (('0' + (today.getMonth() + 1)).slice(-2)))
                         .replace('dd', (('0' + today.getDate()).slice(-2)));
        }
    },
    created() {
        console.log('컴포넌트 생성!')
    },
    mounted() {
        console.log('DOM에 부착!');
    }
}