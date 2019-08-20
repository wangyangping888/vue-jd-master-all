<template>

	<div id="product-detail">
		<top-bar shortcut >
			<ul class="flex top-nav">
				<li class="flex-item" :class="{active:navIndex==index}" v-for="(item,index) in nav" :key="index" @click="scroll(index)">
					<span v-text="item.title"></span>
				</li>
			</ul>
		</top-bar>
    <div ref="product"></div>
    <!-- 商品轮播图 -->
		<Swiper :id="id" />	
    <!-- 商品名称 -->
    <h1 class="product-name flex">
      <div class="name flex-item" v-text="product.product_title"></div>
      <div class="heart">
        <i class="fa fa-heart-o"></i>
        <div class="favour">关注</div>
      </div>
    </h1>
    <!-- 商品价格 -->
    <div class="product-price">
      ￥<span v-text="price1"></span>.{{price2}}
    </div>
    <!-- 地址选择 -->
    <div class="product-buy-option flex">
        <div class="title">送至</div>
        <div class="content flex-item">上海闵行区吴泾镇东川路925弄 沧源小区 丰巢快递柜</div>
        <div class="more"></div>
    </div>
    <!-- 套餐选择 -->
   <div class="product-buy-option flex" @click="showSku=true;">
        <div class="title">已选</div>
        <div class="content flex-item">{{option}}</div>
        <div class="more"></div>
    </div>

		<div id="comment" ref="comment"></div>
		<div id="detail" ref="detail" v-html="product.product_desc"></div>
		<div id="recommend" ref="recommend"></div>
		<div style="height:2rem"></div>
		<sku v-model="showSku" :id="id" @select="select"></sku>
		<btn-bar @add="addCart" @buy="buyNow" ></btn-bar>	
	</div>

</template>

<script>
import TopBar from "@/components/TopBar";
import Swiper from "@/components/Product/Swiper";
import BtnBar from "@/components/Product/BtnBar";
import Sku from "@/components/Product/Sku";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      nav: [
        {
          ref: "product",
          title: "商品"
        },
        {
          ref: "comment",
          title: "评价"
        },
        {
          ref: "detail",
          title: "详情"
        },
        {
          ref: "recommend",
          title: "推荐"
        }
      ],
      id: 0,
      navIndex: 0,
      product: {},
      showSku:false,
      price: 0,
      option:''
    };
  },
  computed: {
    price1() {
      // 价格整数部分
      return Math.floor(this.price);
    },
    price2() {
      // 价格小数部分
      let n = Math.floor((this.price * 100) % 100);
      return n < 10 ? "0" + n : n;
    }
  },
  methods: {
    scroll(index) {
      this.navIndex = index;
      // 跳转语句
    },
    select(color,size,price,count){
        this.option = color+'-'+size+"-"+count+"件";
        this.price = price;
    },
    addCart(){
      this.showSku = true;
    },
    buyNow(){
      this.showSku = true;
    }
  },
  created() {
    // 从路由里获取商品第
    this.id = this.$route.query.id - 0;
  },
  mounted() {
    axios
      .post(this.api.getProduct, qs.stringify({ id: this.id }))
      .then(res => {
        console.log(res.data);
        this.product = res.data;
        this.price = res.data.product_price;
      })
      .catch(err => {});
  },
  components: {
    TopBar,
    Swiper,
    BtnBar,
    Sku
  }
};
</script>

<style lang="less">
#product-detail {
  .top-nav {
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.28rem;
    padding: 0 0.6rem;
  }

  .top-nav .active {
    color: #e4393c;
  }

  .top-nav .active span {
    padding-left: 0.26rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-position: 0 0.06rem;
    background-size: 0.16rem;
  }

  .product-name {
    min-height: 0.72rem;
    color: #333;
    overflow: hidden;
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 0.36rem;
    background: #ffffff;
    padding: 0.24rem 0 0.24rem 0.24rem;
    .name {
      padding-right: 0.2rem;
    }
    .heart {
      width: 1rem;
      border-left: solid 1px #dddddd;
      text-align: center;
      font-size: 0.24rem;
      padding-top: 0.15rem;
      i.fa {
        line-height: 1em;
        font-size: 0.44rem;
      }
    }
  }
  .product-price {
    padding: 0 0.2rem 0.1rem;
    border-bottom: solid 1px #dddddd;
    font-size: 12px;
    color: #e4393c;
    font-weight: 700;
    line-height: 1.3;
    span {
      font-size: 0.36rem;
    }
  }

  .product-buy-option {
    border-top: solid 0.2rem #e8e8ed;
    background: #fff;
    padding: 0.24rem;
    position: relative;
    font-size: 0.24rem;
    color: #999;
    .title {
      width: 0.7rem;
    }
    .content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
      font-size: 0.28rem;
    }
    .more {
      position: relative;
      top: 0.1rem;
      width: 0.3rem;
      height: 0.06rem;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMCAYAAAG2I8urAAAAAXNSR0IArs4c6QAAAddJREFUSA3VVr1OwzAQto0oqgQPABszD4BY4TVIfwR0aBgQb8ALIAbSoVD1J7wGrFRiAokVsbGwMSAVCXPn4PSSxklMGol6SM539913/jnbjEFzGu0j/GOTUvJACr5Owx0L5SBZVxtqDffbqbel7gNqG6K441ABglN3PyJ9YBHKk2qZXNVdzcJVJAwJzR92IvmgjlLH7RSrBhNPAwPohs508FqPf5wIjQVhOtg0xrgNA1GsQIW5yZ7ZFrVwTA+XIaLm/M4feHsRXUKnDOzSy+s7Lnclxrf59PhwFtPNdMvACn/orTGYEcpWXals0L5JLgOrtnGwx/k54+x51L/c4ZxPq8iUza9+3liss1vY57uUdzTwRJ6kysDi6RBJBhOrNY/vaYJGuQRscrlKtmVMIstQEJucEJenWbxGe0GsmKkodQZ1royExFAGVlVZq3Wy/jn5uknaT4ofkqxWlve73Ys3kk9hcRF4oerhtieXeeqoOWv5g3yrmRoHjIvCC6cQnM95m41vVkybWDa+c+YVeHllxQztNr4hyCDYxLLxNdCFaptY4CvwZo8/PcJgVIBzSPlSXQF5UXjDF716iTbdQ8b4AZxJwb2qZlv2Rn3vOs9L5C/z9d95fwDELzC7i+rQHQAAAABJRU5ErkJggg==);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>