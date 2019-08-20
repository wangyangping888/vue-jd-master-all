import Vue from 'vue'
import Router from 'vue-router'

/**
 * 每一个需要路由的页面
 * */
import Home from './views/Home.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import User from './views/User.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import Result from './views/Result.vue'
import Product from './views/Product.vue'
import Login from './views/Login.vue'
Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/index',
		redirect: '/'
	}, {
		path: '/',
		name: 'home',
		alias: '/aaaa',
		component: Home
	}, {
		path: '/cart',
		name: 'cart',
		component: ShoppingCart
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '/category',
		name: 'category',
		component: Category
	}, {
		path: '/search',
		name: 'search',
		component: Search
	}, {
		path: '/result',
		name: 'result',
		component: Result
	}, {
		path: '/product',
		name: 'product',
		component: Product
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}]
});

// 全局的路由守卫 -看大门的，要问一句从哪里来啊？到哪里去啊？下一步要怎么做？
router.beforeEach((to, from, next) => {
	next();
})

router.afterEach((to, from) => {

})
export default router;