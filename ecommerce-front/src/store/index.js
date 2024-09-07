import { createStore } from 'vuex'
import product from './modules/product'
import login from './modules/login'

const store = createStore({
    modules: {
        product,
        login
    }
});

export default store;