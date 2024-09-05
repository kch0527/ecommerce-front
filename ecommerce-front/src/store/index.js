import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            product: {}
        }
    },
    mutations : {
        setProduct(state, value) {
            state.product = value
        }
    }
})