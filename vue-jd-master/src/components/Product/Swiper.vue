<template>
	<div id="product-swiper" v-if="images.length>0" :class="{preview:preview}" @click="preview=!preview;">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in images" :key="index">
					<img ref="image" :src="item" alt="" >
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";
import qs from "qs";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      images: [],
      preview: false,
      swiperObj: null
    };
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 初始化轮播图
    init() {
      this.swiperObj = new Swiper("#product-swiper .swiper-container", {
        pagination: {
          el: "#product-swiper .swiper-pagination"
        },
        loop: true,
        lazy: true,
        autoplay: true
      });
    },
    // 获取轮播图片
    getProductSwiper() {
      axios
        .post(this.api.getProductSwiper, qs.stringify({ id: this.id }))
        .then(res => {
          // 拆分出所有的轮播图片
          this.images = res.data.map(item => this.serveRoot + item.image_url);
        })
        .catch();
    }
  },
  watch: {},
  created() {
    this.getProductSwiper();
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 500);
  }
};
</script>

<style>
/*轮播图*/

#product-swiper {
  padding-top: 0.9rem;
}

.swiper-container {
  width: 100%;
}

.swiper-container a {
  display: block;
}

.swiper-container img {
  width: 100%;
}
/*轮播图预览样式*/

#product-swiper.preview {
  padding-top: 2.6rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: #000;
  z-index: 99999;
}
</style>