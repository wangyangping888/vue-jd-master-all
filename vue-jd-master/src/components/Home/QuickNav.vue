<template>
	<div class="quick-nav clear">
		<div class='quick-nav-item' v-for="(item,index) in quickNavs" :key="index">
			<router-link :to="item.url">
				<img :src='item.image'>
				<span v-text='item.title'></span>
			</router-link>
		</div>
	</div>

</template>

<script>
	export default {

		data() {
			return {
				quickNavs: [{
					title: '京东超市',
					image: require('@/assets/images/1.png'),
					url: '#'
				}, {
					title: '海囤全球',
					image: require('@/assets/images/2.png'),
					url: '#'
				}, {
					title: '京东服饰',
					image: require('@/assets/images/3.png'),
					url: '#'
				}, {
					title: '京东生鲜',
					image: require('@/assets/images/4.png'),
					url: '#'
				}, {
					title: '京东到家',
					image: require('@/assets/images/5.png'),
					url: '#'
				}, {
					title: '充值缴费',
					image: require('@/assets/images/6.png'),
					url: '#'
				}, {
					title: '9.9元拼',
					image: require('@/assets/images/7.png'),
					url: '#'
				}, {
					title: '领券',
					image: require('@/assets/images/8.png'),
					url: '#'
				}, {
					title: '赚钱',
					image: require('@/assets/images/9.png'),
					url: '#'
				}, {
					title: '全部',
					image: require('@/assets/images/10.png'),
					url: '#'
				}]
			}
		}

	}
</script>

<style>
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.quick-nav {
		background-color: #fff;
		padding-bottom: 0.2rem;
	}
	
	.quick-nav-item {
		padding-top: 0.2rem;
		width: 20%;
		float: left;
		text-align: center;
	}
	
	.quick-nav-item a {
		text-decoration: none;
	}
	
	.quick-nav-item img {
		width: 0.8rem;
		height: 0.8rem;
	}
	
	.quick-nav-item span {
		display: block;
		color: #666;
		margin-top: 0.12rem;
		font-size: 0.24rem;
	}
</style>