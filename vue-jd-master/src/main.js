import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

/**引入字体图标库**/
import "./assets/css/iconfont.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/weui.css"

Vue.config.productionTip = false;

// 设置服务器地址
//const serveRoot = "http://localhost";
const serveRoot = "http://api.niyinlong.com";

Vue.prototype.serveRoot = serveRoot;
Vue.prototype.api = {
	// 登录接口
	login: serveRoot + "/api/User/login",
	// 获取单件商品
	getProduct: serveRoot + "/api/Product/getProduct",
	// 商品套餐选项
	getProductOptions:serveRoot + "/api/Product/getProductOptions",
	// 获取商品的轮播图片
	getProductSwiper:serveRoot + "/api/Product/getProductImages",
	// 获取商品列表（分页）
	getProductList: serveRoot + "/api/Product/getProductList",
	// 搜索商品热词提示
	searchHotWord:serveRoot + "/api/Product/searchHotWord",
};

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')