const state = () => ({
  password: ''
});

const mutations = {
  setPassword(state, password) {
    state.password = password;
  }
};

const actions = {
  setPassword({ commit }, password) {
    commit('setPassword', password);
  }
};

const getters = {
  getPassword(state) {
    return state.password;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};