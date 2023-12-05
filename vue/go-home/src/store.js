// store.js
// vuex (중앙저장소 -> 모든 컴포넌트가 접근 가능한 저장소)

import { createStore } from 'vuex'

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
    // actions : { 
    //     addProduct(state, info) {

    //     }
    // }
});

export default store;