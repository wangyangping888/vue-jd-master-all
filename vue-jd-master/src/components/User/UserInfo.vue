<template>
  <div class="user-info-header">
    <div class="user-wrap">
      <div class="user-image left">
        <img src="../../assets/images/avatar.jpg">
      </div>
      <div class="user-info left">
        <span class="user-name">倪银龙</span>
        <br>
        <span class="user-rank">
          <span class="fa fa-star"></span>&nbsp;金牌用户
        </span>
      </div>
      <div class="user-msg right">
        <a href>
          账户管理
          <span class="fa fa-angle-right"></span>
        </a>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
</script>

<style>
/****************用户头像区域****************/

.user-info-header {
  margin-top: 0.88rem;
  color: #ffffff;
  position: relative;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
}

.user-info-header a {
  color: #ffffff;
}

.user-info-header .user-wrap {
  font-size: 0.2rem;
  padding: 0.37rem 0.3rem 0.4rem;
}

.user-info-header .user-image {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 60px;
}

.user-info-header .user-image img {
  width: 1.2rem;
  height: 1.2rem;
}

.user-info-header .user-info {
  padding-left: 0.3rem;
  padding-top: 0.2rem;
  line-height: 1.8em;
}

.user-info-header .user-msg {
  line-height: 1.12rem;
}

.user-info-header .user-msg span {
  padding-left: 0.1rem;
}
</style>