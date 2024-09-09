import axios from 'axios'
export default {
  state: {
    token: localStorage.getItem('token') || null
  },
  mutations: {
    LOGIN_SUCCESS(state) {
      window.location.href="/main"
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      window.location.href="/main"
    },
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  actions: {
    login (dispatch, loginObj) {
      axios
        .post('http://localhost:8000/user-service/login', loginObj, {withCredentials: true})
        .then((response) => {
          const token = response.headers['token']
          localStorage.setItem('token', token)
          const userId = response.headers.get('userId')
          localStorage.setItem('userId', userId)
          //axios.defaults.headers.common.Authorization = `Bearer ${token}`
          this.dispatch('success_commit')
        }).catch((err) => {
            alert('이메일과 비밀번호를 확인하세요.')
        })
    },
    success_commit({commit}){
      commit('LOGIN_SUCCESS')
    },
    logout ({ commit }) { 
      commit('logout')
    },

  }
};

