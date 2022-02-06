<template>
  <div class="right-content">
    <div class="header">
      <input type="text" placeholder="트위터 검색">
    </div>
    <div class="login" v-if="userData === ''">
      <input type="text" placeholder="아이디를 입력하세요" v-model="form.id">
      <input type="password" placeholder="비밀번호를 입력하세요" v-model="form.password">
      <button @click="fnLogin">로그인</button>
    </div>
    <div class="loggedin" v-else>
      <div class="profile-image" :style="`background-image: url(${userData.profileImage})`"></div>
      <p>{{ userData.name }}</p>
      <div>
        <span>팔로워 {{userData.follower}}</span>
        <span>팔로잉 {{userData.following}}</span>
      </div>
      <button @click="fnLogout">로그아웃</button>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if(localStorage.getItem('userData') !== null) {
      this.userData = JSON.parse( localStorage.getItem('userData') );
    }
  },
  data() {
    return {
      userData: '',
      form: {
        id: '',
        password: '', 
        name: '국연수',
        following: 500,
        follower: 300,
        profileImage: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/01/10/93645765.3.jpg'
      }
    }
  },
  methods: {
    fnLogin() {
      if(this.form.id.length < 4) {
        alert('아이디를 입력하세요');
        return;
      }
      if(this.form.password.length < 4) {
        alert('비밀번호를 입력하세요');
        return;
      }
      localStorage.setItem('userData', JSON.stringify(this.form));
      this.userData = JSON.parse( localStorage.getItem('userData') );
    },
    fnLogout() {
      localStorage.removeItem('userData');
      this.userData = '';
    }
  }
}
</script>

<style scoped>
.right-content {
  width: 30vw;
  height: 100vh;
}
.header {
  position: relative;
  padding: 5px 20px;
}
.header input[type=text] {
  background-color: #EFF3F4;
  border: none;
  outline: none;
  padding: 15px;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  padding-left: 50px;
  color: #0f1419;
}
.header::before {
  content: "\e97a";
  font-family: xeicon;
  position: absolute;
  top: 50%;
  left: 40px;
  width: 20px;
  height: 20px;
  z-index: 10;
  transform: translateY(-50%);
  font-size: 20px;
}
.login {
  margin-top: 50px;
  padding: 0 20px;
}
.login input {
  display: block;
  width: 100%;
  border: none;
  background-color: #f3f3f3;
  padding: 13px;
  border-radius: 10px;
}
.login input[type=text] {
  margin-bottom: 7px;
}
.login input[type=password] {
  margin-bottom: 15px;
}
.login button {
  width: 100%;
  border: none;
  background-color: #1D9BF0;
  color: #fff;
  padding: 13px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
}
.loggedin {
  text-align: center;
  padding: 20px;
}
.loggedin .profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto;
  margin-bottom: 10px;
}
.loggedin button {
  width: 100%;
  border: none;
  background-color: #1D9BF0;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
}
</style>