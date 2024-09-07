<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="email을 입력하세요." v-model="user.email" required />
        </div>
        <div class="form-group">
           <label for="name">name</label>
           <input type="text" id="name" name="name" placeholder="name을 입력하세요." v-model="user.name" required />
        </div>
        <div class="form-group">
          <label for="pwd">Password</label>
          <input type="password" id="pwd" name="pwd" placeholder="password를 입력하세요." v-model="user.pwd" minlength="8"required />
          <button type="button" id="toggle" @click="togglePassword">비밀번호 확인</button>
        </div>
        <div class="form-group">
          <button type="button" class="btn" @click="signup">Sign Up</button>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "JoinView",
    data() {
      return {
        user: { email: '', name: '', pwd: '' },
      }
    },
    methods: {
      signup() {
        console.log(this.user)
        axios
        .post('http://localhost:52286/users', this.user, {withCredentials: true})
        .then((res) => {
            alert("회원가입이 완료되었습니다.")
            this.$router.push({name: 'LoginView'})
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
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>