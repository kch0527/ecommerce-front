<template>
  <div class="product-detail">
    <h2>{{ user.email }}</h2>
    <p>{{ user.name }}</p>
    <button @click="go">정보 수정</button>
    <button @click="goBack">뒤로 가기</button>
  </div>
</template>

<script>
 import axios from 'axios';

 export default {
    name: "MyView",
    data() {
      return {
        user: {}
      }
    }, 
    created() {
      const userId = localStorage.getItem('userId')
      this.getData(userId)
    },
    methods: {
      getData(userId) {
        axios
        .get('http://localhost:8000/user-service/users/'+userId, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
      },
    }
 }

</script>

<style scoped>
.product-detail {
  padding: 2rem;
  text-align: center;
}
.product-detail img {
  max-width: 100%;
  height: auto;
}
</style>