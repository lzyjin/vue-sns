<template>
  <div id="app"> 
    <div class="container">
      <left-content></left-content>
  
      <div>
        <center-header></center-header>
        <router-view></router-view>
      </div>
  
      <right-content></right-content>
    </div>
  </div>
</template>

<script>
import leftContent from "@/layout/leftContent";
import centerHeader from "@/layout/centerHeader";
import rightContent from "@/layout/rightContent";
import '@/assets/css/reset.css'

export default {
  components: {
    leftContent,
    centerHeader,
    rightContent,
  }
}
</script>


<style scoped>
.container {
  position: relative;
}
.container>div {

}
.container>div:nth-child(1) {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
}
.container>div:nth-child(2) {
  position: absolute;
  left: 20%;
  width: 50%;
  border-left: 1px solid #EFF3F4;
  border-right: 1px solid #EFF3F4;
}
.container>div:nth-child(2) .header {
  position: fixed;
  top: 0;
  left: 20%;
  width: 50%;
  height: 60px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
}
.container>div:nth-child(3) {
  position: fixed;
  top: 0;
  left: 70%;
  width: 30%;
}
</style>
