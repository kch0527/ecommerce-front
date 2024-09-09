import { createStore } from 'vuex'
import login from './modules/login'
import check from './modules/check'

const store = createStore({
    modules: {
        login,
        check
    }
});

export default store;