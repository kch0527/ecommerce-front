<template>
  <div class="my-page-container">
    <section class="profile-section">
      <div class="profile-header">
        <div class="profile-info">
          <h2 class="profile-name">{{ user.name }}</h2>
          <p class="profile-email">{{ user.email }}</p>
        </div>
      </div>
    </section>

    <section class="activity-section">
      <h3 class="section-title">My Orders</h3>
      <ul class="activity-list">
        
      </ul>
    </section>

    <section class="settings-section">
      <button @click="goEditForm(user.userId)">정보 수정</button>
      <button @click="goMain">Main</button>
    </section>
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
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
      },
      goEditForm(userId){
        this.$router.push({ name: 'CheckView' })
      },
      goMain(){
        this.$router.push({ name: 'MainView' })
      }
    }
 }

</script>

<style scoped>
.my-page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.profile-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.profile-info {
  font-size: 18px;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-email {
  color: gray;
}

.activity-section, .settings-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.activity-list {
  list-style: none;
  padding: 0;
}

.activity-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.activity-text {
  font-size: 16px;
}

.activity-date {
  font-size: 14px;
  color: gray;
}
</style>