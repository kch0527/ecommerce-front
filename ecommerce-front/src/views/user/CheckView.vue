<template>
    <h2>Password 확인</h2>
    <div>
        <input type="password" id="password" name="password" placeholder="password를 입력하세요." v-model="user.password" minlength="8"required /> 
    </div>
    <div>
        <button type="button" @click="checkPassword">확인</button>
    </div>

</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: "CheckView",
    data() {
      return {
        user: { userId: localStorage.getItem('userId'), password: '' }
      }
    },
    methods: {
      ...mapActions(['setPassword']),
        checkPassword() {
        axios
        .post('http://localhost:8000/user-service/pwCheck', this.user, {
            withCredentials: true,
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then((response) => {
            if(response.data && response.data.userId){
              alert("확인 되었습니다.")
              this.setPassword(this.user.password)
              this.$router.push(`/edit/${response.data.userId}`);
            }else{
              alert("패스워드가 일치하지 않습니다.")
            }
        })
        .catch((err) => {
            console.log(err)
        })
      }
    }
  }
</script>