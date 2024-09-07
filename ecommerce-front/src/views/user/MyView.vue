<template>
<h2>mypage</h2>
</template>

<script>
 import axios from 'axios';

 export default {
    name: "MyView",
    data() {
      return {
        user: null
      }
    }, 
    created() {
      this.getData()
    },
    methods: {
      getData() {
        axios
        .get('http://localhost:62430/users', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
      },
    }
 }

</script>