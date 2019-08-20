<template>
	<div id="shopping-cart">

		<top-bar shortcut>
			<div class="title">购物车</div>
		</top-bar>
		<div style="height: 0.9rem;"></div>
		<empty :show='products.length==0'></empty>
	
		<product v-for="(item,index) in products" 
				 :id="item.id"
				 :image="item.image"
				 :title="item.title"
				 :kind="item.kind"
				 :price="item.price"
				 :count="item.count"
				 :key="index"
				 v-model="select"
				 @countChange="countChange"></product>
		<submit-bar v-model='all' :count="count" :sum="sum"  ></submit-bar>
		<div style="height:1rem"></div>
	</div>
</template>

<script>
import TopBar from "@/components/TopBar";
import Empty from "@/components/ShoppingCart/Empty";
import SubmitBar from "@/components/ShoppingCart/SubmitBar";
import Product from "@/components/ShoppingCart/Product";

export default {
  name: "cart",
  data() {
    return {
      products: [
        {
          id: 1,
          title:
            "x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金",
          image:
            "https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg",
          kind: "套餐1",
          price: 99,
          count: 10
        },
        {
          id: 2,
          title:
            "x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金",
          image:
            "https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg",
          kind: "套餐1",
          price: 99,
          count: 1
        },
        {
          id: 3,
          title:
            "x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金",
          image:
            "https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg",
          kind: "套餐1",
          price: 99,
          count: 1
        },
        {
          id: 4,
          title:
            "x-doria 苹果XS Max手机壳iPhoneXS Max保护壳 时尚炫彩全包防摔透明手机保护套 绽放玫瑰金",
          image:
            "https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/20086/12/127/673311/5c0745ddE8cb02ac3/2d618e66c1ccee73.jpg",
          kind: "套餐1",
          price: 99,
          count: 1
        }
      ],
      select: [],
      all: false
    };
  },
  watch: {
    select(val) {
      if (val.length == this.products.length) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
    all(val) {
      if (val) {
        this.select = [];
        this.products.forEach(item => {
          this.select.push(item.id);
        });
      } else if (this.select.length == this.products.length) {
        this.select = [];
      }
    }
  },
  methods: {
    countChange(id, n) {
      // + - 改变数量的
      this.products.forEach((item, index) => {
        if (item.id == id) {
          this.products[index].count = n;
        }
      });
    }
  },
  computed: {
    count() {
      let n = 0;
      this.select.forEach(item => {
        this.products.forEach(product => {
          if (product.id == item) {
            n += product.count;
          }
        });
      });
      return n;
    },
    sum() {
      let n = 0;
      this.select.forEach(item => {
        this.products.forEach(product => {
          if (product.id == item) {
            n += product.count * product.price;
          }
        });
      });
      return n;
    },

    login() {
      return this.$store.state.user.login;
    }
  },
  components: {
    TopBar,
    Empty,
    SubmitBar,
    Product
  },
  created() {}
};
</script>

<style>
</style>