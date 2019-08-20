<template>
  <footer class="tab-bar">
    <ul class="flex">
      <li class="flex-item" v-for="(item,index) in nav" :key="index">
        <router-link :to="item.url">
          <img :src="path==item.url?item.active:item.icon" class="icon">
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      path: "/",
      nav: [
        {
          icon: require("@/assets/icon/home.png"),
          active: require("@/assets/icon/home_active.png"),
          url: "/"
        },
        {
          icon: require("@/assets/icon/category.png"),
          active: require("@/assets/icon/category_active.png"),
          url: "/category"
        },
        {
          icon: require("@/assets/icon/pingou.png"),
          active: require("@/assets/icon/pingou_active.png"),
          url: "/search"
        },
        {
          icon: require("@/assets/icon/shoppingCart.png"),
          active: require("@/assets/icon/shoppingCart.png"),
          url: "/cart"
        },
        {
          icon: require("@/assets/icon/user.png"),
          active: require("@/assets/icon/mine_active.png"),
          url: "/user"
        }
      ]
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.login;
    }
  },
  watch: {
    isLogin(val) {
      if (val) {
        this.nav[4].icon = require("@/assets/icon/mine.png");
      } else {
        this.nav[4].icon = require("@/assets/icon/user.png");
      }
    }
  },
  mounted() {},
  created() {
    this.path = this.$route.path;
  }
};
</script>

<style>
.tab-bar {
  margin: 0;
  padding: 0;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  -moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  font-size: 0.2rem;
  text-align: center;
  box-sizing: border-box;
}

.tab-bar img {
  width: 16vw;
}

.tab-bar a .icon {
  display: inline;
}
</style>