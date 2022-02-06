<template>
  <div>
    <div class="content">
      <section class="title">
        <div class="bagkground-img" :style="``"></div>
        <div class="info-list">
          <div class="profile-img"></div>
          <div class="follow-btn">팔로우</div>
          <h1>{{fetchData.name}}</h1>
          <span>{{fetchData.id}}</span>
          <p class="desc">{{fetchData.description}}</p>
          <p class="keyword-list">
            <span><a :href="fetchData.link" target="_blank">{{fetchData.link}}</a></span>
            <span>생일: {{fetchData.birth | moment('MM월 DD일') }}</span>
            <span>가입일: {{fetchData.regDate | moment('YYYY년 MM월')}}</span>
          </p>
          <p>
            <span><i>{{fetchData.following | follow}}</i> 팔로우 중</span>
            <span><i>{{fetchData.follower | follow}}</i> 팔로워</span>
          </p>
        </div>
      </section>
      <section class="tab-list">
          <div class="tab" :class="{ active:postUnderline }" @click="fnPost">트윗</div>
          <div class="tab" :class="{ active:replyUnderline }" @click="fnReply">트윗 및 답글</div>
          <div class="tab" :class="{ active:mediaUnderline }" @click="fnMedia">미디어</div>
          <div class="tab" :class="{ active:likeUnderline }" @click="fnLike">마음에 들어요</div>
      </section>
      <section class="twit-list">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    follow(val) {
      return val;
    }
  },
  data() {
    return {
      fetchData: {
        userNo: 1,
        name: '아이유 공식 트위터',
        id: 'iu',
        description: '아이유(IU) Official Twitter',
        link: 'https://cafe.daum.net/IU',
        birth: new Date(),
        regDate: new Date(),
        following: 100,
        follower: 12423543,
        backgroundImg: 'https://pbs.twimg.com/profile_banners/1024486566096326656/1633359681/1500x500',
        profileImg: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg'
      }
    }
  },
  computed: {
    postUnderline() {
      const url = '/post/'
      const addr = this.$route.fullPath;
      return addr.includes(url);
    },
    replyUnderline() {
      const url = '/reply/'
      const addr = this.$route.fullPath;
      return addr.includes(url);
    },
    mediaUnderline() {
      const url = '/media/'
      const addr = this.$route.fullPath;
      return addr.includes(url);
    },
    likeUnderline() {
      const url = '/like/'
      const addr = this.$route.fullPath;
      return addr.includes(url);
    },
  },
  methods: {
    fnPost() {
      this.$router.push({ path: '/post/' });
    },
    fnReply() {
      this.$router.push({ path: '/reply/' });
    },
    fnMedia() {
      this.$router.push({ path: '/media/' });
    },
    fnLike() {
      this.$router.push({ path: '/like/' });
    },
  }
}
</script>

<style scoped>
.content {
  margin-top: 60px;
}
.content .title .bagkground-img {
  background: url() no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
.content .title .info-list {
  position: relative;
  padding: 100px 15px;
}
.content .title .info-list .profile-img {
  position: absolute;
  top: -75px;
  left: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url() no-repeat center center;
  background-size: cover;
  border: 5px solid #fff;
}
.content .title .info-list .follow-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  color: #fff;
  background-color: #000;
  padding: 8px 15px;
  border-radius: 17px;
}
.content .title .info-list h1 {
  font-size: 20px;
}
.content .title .info-list span {
  font-size: 15px;
  display: block;
  color: #536471;
}
.content .title .info-list .desc {
  margin: 10px 0;
}
.content .title .info-list .keyword-list {
  margin-bottom: 10px;
}
.content .title .info-list .keyword-list span {
  display: inline-block;
  margin-right: 10px;
}
.content .title .info-list .keyword-list span a {
  color: #1d9bf0;
  text-decoration: none;
}
.tab-list {
  width: 100%;
  
}
.tab-list .tab {
  display: inline-block;
  padding: 20px 5%;
  cursor: pointer;
}
.tab-list .tab:hover {
  background-color: #EFF3F4;
}
.active {
  border-bottom: 5px solid #1D9BF0;
}
</style>