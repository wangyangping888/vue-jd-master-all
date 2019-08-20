<template>

	<div class="shopping-cart-empty" v-if="show">
		<img src="../../assets/images/nothing.png">
		<p>{{isLogin?'购物车空空如也 ~ ':'登录后可同步购物车中商品'}} </p>
		<router-link v-if="!isLogin" class="login" to="/login">登录</router-link>
	</div>

</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			isLogin() {
				return this.$store.state.user.login;
			}
		}
	}
</script>

<style scoped="scoped">
	/* 购物车空白样式 */
	
	.shopping-cart-empty {
		padding: 0.6rem 0 0.3rem;
		text-align: center;
	}
	
	.shopping-cart-empty img {
		width: 1.8rem;
	}
	
	.shopping-cart-empty p {
		font-size: 0.32rem;
		color: rgba(51, 51, 51, .66);
		line-height: 0.48rem;
		margin: 0.22rem 0;
	}
	
	.shopping-cart-empty a.login {
		display: block;
		width: 1.2rem;
		height: 0.6rem;
		border: 1px solid #e93b3d;
		color: #e93b3d;
		font-size: 0.28rem;
		line-height: 0.6rem;
		border-radius: 4px;
		margin: 0 auto 0.3rem
	}
</style>