<template>
  <div class="header-container">
    <div class="name">
      <div class="arrow xi-arrow-left"></div>
      <div class="title">
        <h1>아이유 공식 트위터</h1>
        <p>1,233 트윗</p>
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="트위터 검색">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 55px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
}
.header-container>div {
  flex: 1;
}
.header-container .name {
  overflow: hidden;
}
.header-container .name .arrow {
  float: left;
  height: 55px;
  line-height: 55px;
  margin-right: 20px;
  font-size: 20px;
}
.header-container .name .title {}
.header-container .name .title h1 { 
  font-size: 20px;
}
.header-container .name .title p{
  font-size: 1px;
}
.header-container .search {
  position: relative;
  padding: 5px;
}
.header-container .search input[type=text] {
  background-color: #EFF3F4;
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding-left: 50px;
}
.header-container .search::before {
  content: "\e97a";
  font-family: xeicon;
  position: absolute;
  top: 50%;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 10;
  transform: translateY(-50%);
  font-size: 20px;
}
</style>