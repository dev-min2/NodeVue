// store.js
// vuex (중앙저장소 -> 모든 컴포넌트가 접근 가능한 저장소)

import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state() {
        return {
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A"
                }
            ],
            count : 0
        }
     },
    getters : { 
        cartCount(state) {
            return state.cart.length;
        }
    },
    // mutations, actions를 통한 속성 업데이트 가능.
    // mutations는 동기식으로 처리 actions는 비동기식
    mutations : { 
        increment(state) {
            state.count++;
        },
        addProduct(state, info) {
            state.cart.push(info);
        }
    },
    // vuex-persistedstate -> 로컬저장소에 저장
    actions : { 
        // actions에서 mutations 메소드에 접근할 수 있고, 그 접근 경로를 context매개변수로 들어오는 인자값을 사용한다(추적을 위해)
        async addProduct(context, info) {
            await setTimeout( () => {
                context.commit('addProduct', info);
            }, 1000);

            console.log('1초기달림?'); // 안기다림.. async await이 안먹는다
        }
    },
    plugins : [
        // 저장소에 있는 정보를 로컬 저장소에 저장
        // 개발자도구 -> application -> Local Storage에 저장.
        // 쿠키의 개념과 거의 같음.
        createPersistedState({
            // cart속성
            paths : ['cart']
        })
    ]
});

export default store;