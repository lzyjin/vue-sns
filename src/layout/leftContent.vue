<template>
  <div class="left-content">
    <img :src="require('@/assets/logo.png')" class="logo">
    <div class="menu">
      <a href=""><i class="xi-eye-o"></i> 탐색하기</a>
      <a href=""><i class="xi-cog"></i> 설정</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left-content {
  width: 20vw;
  height: 100vh;
}
.left-content .logo {
  width: 30px;
  height: 30px;
}
.left-content .menu {}
.left-content .menu a {
  text-decoration: none;
  color: #333;
  display: block;
}
.left-content .menu a i {}
</style>