<template>

	<div class="swiper-container" id="home-swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in images" :key="index">
				<router-link :to="item.url">
					<img :src="item.image">
				</router-link>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>

</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      images: [
        {
          image: require("@/assets/images/swiper1.jpg"),
          url: "/"
        },
        {
          image: require("@/assets/images/swiper2.jpg"),
          url: "/"
        },
        {
          image: require("@/assets/images/swiper3.jpg"),
          url: "/"
        }
      ],
      swiperObj: null
    };
  },
  methods: {},
  created() {},
  mounted() {
    // 初始化轮播图
    this.swiperObj = new Swiper("#home-swiper", {
      pagination: {
        el: "#home-swiper .swiper-pagination"
      },
	  loop : true,
      autoplay: true
    });
  },
  updated() {}
};
</script>

<style>
/*轮播图*/

.swiper-container {
  width: 100%;
}

.swiper-container a {
  display: block;
}

.swiper-container img {
  width: 100%;
}
</style>