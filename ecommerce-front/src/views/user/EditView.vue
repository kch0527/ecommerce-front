<template>
  <div class="my-page-container">
    <section class="profile-section">
      <div class="profile-header">
        <div class="profile-info">
          <h2>Edit Form</h2>
          <div>
            이름 <input type="text" id="name" name="name" placeholder="name을 입력하세요." v-model="editUser.name" required />
           </div>
           <div>
            패스워드 <input type="password" id="pwd" name="pwd" placeholder="password를 입력하세요." v-model="editUser.pwd" minlength="8"required /> 
            <button type="button" id="toggle" @click="togglePassword">비밀번호 확인</button>
          </div>
        </div>
      </div>
    </section>

    <section class="settings-section">
        <button @click="update">수정</button>
        <button @click="cancle">취소</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: "EditView",
    props: ['userId'],
    data() {
      return {
        editUser: { name: '', pwd: '' }
      }
    },
    computed: {
      ...mapGetters(['getPassword'])
    },
    mounted() {
      this.editUser.pwd = this.getPassword
      this.fetchUserData();
    },
    methods: {
      fetchUserData() {
      axios
        .get(`http://localhost:8000/user-service/users/${this.userId}`, { withCredentials: true, headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((response) => {
          this.editUser.name = response.data.name;
        })
        .catch((err) => console.log(err));
      },
      update() {
        axios
        .put(`http://localhost:8000/user-service/users/${this.userId}`, this.editUser, { withCredentials: true, headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((res) => {
            alert("수정이 완료되었습니다.")
            this.$router.push({name: 'MyView'})
        })
        .catch((err) => console.log(err))
      },
      togglePassword() {
        const x = document.getElementById("pwd");
        const toggleButton = document.getElementById("toggle");
        
        if (x.type === "password") {
            x.type = "text";
            toggleButton.textContent = "비밀번호 보기";
        } else {
            x.type = "password";
            toggleButton.textContent = "비밀번호 숨기기";
        }
      },
      cancle(){
        this.$router.push({ name: 'MyView' });
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
    
    .settings-section {
      margin-bottom: 30px;
    }
      

    </style>