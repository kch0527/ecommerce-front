<template>
    <header class="header">
      <h1>My Shop</h1>
      <nav>
        <ul>
          <li><a href="/main">Home</a></li>
          <li v-if="!isLoggedIn"><a href="/login">Login</a></li>
          <li v-if="!isLoggedIn"><a href="/join">Sign up</a></li>
          <li v-if="isLoggedIn"><a href="/mypage">My Page</a></li>
          <li v-if="isLoggedIn"><a href="#" @click.prevent="logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'Header',
    computed: {
    ...mapGetters(['isLoggedIn']),  // Vuex의 로그인 상태 가져오기
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  nav ul li a {
    text-decoration: none;
    color: #333;
  }
  </style>