const state = {
    product: {}
  };
  
  const mutations = {
    setProduct(state, value) {
      state.product = value
    }
  };
  
  const getters = {
    getProduct: state => state.product
  };
  
  const actions = {
    setProduct({ commit }, value) {
      commit('setProduct', value)
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
  };