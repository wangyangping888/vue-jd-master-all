<template>
	<div id="sku" class="mask" v-show="show" @click="show=false;$emit('input',false)">
		<transition enter-active-class="animated slideInUp">
			<div class="sku" v-show="show" @click.stop>
				<div class="header">
					<img :src="image">
					<p class="price">￥<em v-text="price"></em></p>
					<p class="prop"> <span>已选：</span> {{color[colorIndex]}} - {{size[sizeIndex]}} - {{count}}个</p>
				</div>
				<div class="body">
					<div class="select color">
						<div class="select-title">颜色</div>
						<div class="select-item">
							<span class="item" :class="{active:colorIndex==index}" v-for="(item,index) in color" :key="index" @click="select(index,sizeIndex);" v-text="item"></span>
						</div>
					</div>
					<div class="select size">
						<div class="select-title">尺码</div>
						<div class="select-item">
							<span class="item" :class="{active:sizeIndex==index}" v-for="(item,index) in size" :key="index" @click="select(colorIndex,index);" v-text="item"></span>
						</div>
					</div>
					<div class="select count">
						<div class="select-title">数量

							<div class="count right">
								<span class="minus" @click="count=count<2?1:--count;">-</span>
								<span class="count" v-text="count"></span>
								<span class="plus" @click="count++;">+</span>
							</div>
						</div>
					</div>
				</div>
				<div class="btn-ok" @click="selectOk">确定</div>
			</div>
		</transition>
	</div>

</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      image: "",
      price: 0,
      show: true,
      arr: [],
      color: [],
      colorIndex: 0,
      size: [],
      sizeIndex: 0,
      count: 1
    };
  },
  props: {
    id: {
      type: Number,
      required: true
	},
	value:{
		type:Boolean,
		default:false
	}
  },
  watch:{
	  value(val){
		  this.show = val;
	  }
  },
  methods: {
    select(color, size) {
      this.colorIndex = color;
      this.sizeIndex = size;
      this.arr.forEach(item => {
        if (
          item.option_color == this.color[color] &&
          item.option_size == this.size[size]
        ) {
          this.price = item.option_price;
          this.image = this.serveRoot + item.option_image;
        }
      });
	},
	selectOk(){
		// 传递选择后的数据
		this.$emit('select',this.color[this.colorIndex],this.size[this.sizeIndex],this.price,this.count);
		this.show = false;
		this.$emit('input',false);
	}
  },
  created() {
	  this.show=this.value;
    axios
      .post(this.api.getProductOptions, qs.stringify({ id: this.id }))
      .then(res => {
        let color = new Set();
        let size = new Set();
        this.arr = res.data;
        this.image = this.serveRoot + res.data[0].option_image;
        this.price = res.data[0].option_price;
        // 去重操作
        res.data.forEach(item => {
          color.add(item.option_color);
          size.add(item.option_size);
        });
        this.color = [...color];
		this.size = [...size];
		// 传递默认的选项
		this.$emit('select',this.color[0],this.size[0],this.price,this.count);
      })
      .catch();
  }
};
</script>

<style>
#sku {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 19999;
  background-color: rgba(0, 0, 0, 0.7);
}

.mask .sku {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 7.5rem;
  max-height: 9.5rem;
  background-color: #fff;
}

#sku .header {
  height: 1.4rem;
  padding: 0 0 0.2rem 2.2rem;
}

#sku .header p {
  margin: 0;
}

#sku .header img {
  position: absolute;
  left: 0.2rem;
  top: -0.4rem;
  border-radius: 2px;
  width: 1.8rem;
  height: 1.8rem;
}

#sku .header .price {
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #e4393c;
  font-size: 0.2rem;
}

#sku .header .price em {
  font-size: 0.32rem;
}

#sku .header .prop {
  word-break: break-all;
  font-size: 0.24rem;
  color: #333;
  line-height: 1.4em;
  padding-right: 0.2rem;
}

#sku .header .prop span {
  color: #999;
}

#sku .body {
  box-sizing: border-box;
  max-height: 7.8rm;
  padding-bottom: 1rem;
  overflow-y: auto;
}

#sku .body .select {
}

#sku .body .select-title {
  font-size: 0.24rem;
  color: #999;
  margin: 0 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
}

#sku .body .select-item {
  overflow: hidden;
  margin-bottom: 0.06rem;
}

#sku .body .item {
  display: inline-block;
  padding: 0 0.2rem;
  min-width: 0.4rem;
  max-width: 5.4rem;
  overflow: hidden;
  height: 0.6rem;
  line-height: 0.6rem;
  float: left;
  text-align: center;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  border-radius: 0.08rem;
  color: #333;
  background-color: #f7f7f7;
  font-size: 0.28rem;
}

#sku .body .item.active {
  background-color: #e4393c;
  color: #fff;
}

#sku .body .count span {
  display: block;
  max-width: 0.6rem;
  min-width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #f7f7f7;
  text-align: center;
  float: left;
}

#sku .minus,
#sku .plus {
  font-size: 0.4rem;
  font-weight: 500;
}

#sku .btn-ok {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #e4393c;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
}
</style>