<template>
	<div id="home">
		<search-bar></search-bar>
		<!-- 轮播图 -->
		<swiper></swiper>
		<!-- 快速导航 -->
		<quick-nav></quick-nav>
		<!-- 为您推荐 -->
		<div class="gray-text">
			<span class="gray-layout">
			<span class="gray-text-img">
			</span>为您推荐</span>
		</div>
		<div class="product-list">
			<product v-for="(item,index) in products" :id="item.id" :title="item.product_title" :image='serveRoot+item.product_thumb' :price="item.product_price" :key="index" />
		</div>
		<!-- 底部 -->
		<Footer/>
		<tab-bar></tab-bar>
		<back-top></back-top>
	</div>
</template>

<script>
	import SearchBar from "@/components/Home/SearchBar";
	import Swiper from "@/components/Home/Swiper";
	import QuickNav from "@/components/Home/QuickNav";
	import Product from "@/components/Product";
	import TabBar from "@/components/TabBar";
	import Footer from "@/components/Footer";
	import BackTop from "@/components/BackTop";
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				products: [],
				page: 1
			};
		},
		components: {
			SearchBar,
			Swiper,
			QuickNav,
			TabBar,
			Product,
			Footer,
			BackTop
		},
		created() {
			axios.post(this.api.getProductList, qs.stringify({
					size: 10,
					page: this.page
				}))
				.then(res => {
					this.products = res.data;
				})
				.catch();
		},
		mounted() {}
	};
</script>
<style>
	/* 为您推荐 */
	
	.gray-text {
		position: relative;
		display: -webkit-box;
		padding: 0.28rem 0.1rem;
		color: #848689;
		font-size: 0.28rem;
		-webkit-box-pack: center;
		background-color: #f0f2f5;
	}
	
	.gray-text .gray-layout {
		padding: 0 0.2rem;
		z-index: 10;
		position: relative;
		display: block;
		background-color: #f0f2f5;
	}
	
	.gray-text:after {
		content: "";
		height: 1px;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		background-color: #cbcbcb;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.gray-text-img {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYjlhMDE1Yi1jNGYwLTU5NDgtYTQyYy00ZDk4ZmUzYTA4ZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjY4MTczRTVCODQwMTFFNTk3OTNDNzU1NUY2Nzg4RUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjY4MTczRTRCODQwMTFFNTk3OTNDNzU1NUY2Nzg4RUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTVEOUJGMEFBMjJFMTFFNUE1NzZDRjhDNjkxNzhBQzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTVEOUJGMEJBMjJFMTFFNUE1NzZDRjhDNjkxNzhBQzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nDNBbAAAB00lEQVR42qyVvUtCURiH71XXQqFoajFqlqSliCbBIBwCh4yC/gJDCyKoqS9KLNuaw9oUxME1okAwawwhFykIBKOxxX6v/G7c7J6rkgcezrnn4/F4Pt6j7x8ea4rkAytgBoyCIVAHNXAHLsHT9tbmn4EOC5kXZEAZvIIomAIDzKOsl/bMwdGJt5M0yM73wAmSoAjewBfzIuud7FeGOKiShkAerIIEaGr2qcl+0j8PcahdOg7SYAHktB4S1jTHcWmIJ6TOxbZzsAsKps6/BieSKZmZvhGL/tRBYvQtoLyDYgrMy0z9YBicqmZDYesvo6ya8Zl4IPeLdJl/3U6o81O3EyNdgYhIp7mLnYRaF+IbMOfgwa51KfwltqivyjkX6Qh4VwxsJfPmmMq6xbo2kHlE+gkGVYtkFtrV8TR4kDVE+gLGrAaqBtuI5cpWRXoLZrX+pDnZLIdxDPokXQLXIi0xpK3/x4b1lPF1bFbJuKayQA/g2biqxhVsPw0W9Rqj1B6YNAeUCm+WRKlAjzMMcFwEs6y0hz6JNmEG6HiXzjj7hxmtLIN0ls+IPCGPIMaA42a7m98xtks/H4RZs8Rl8etybhdNb9QFz7EIP9gud3xN9UZ9CzAA+QmWuz+ZcigAAAAASUVORK5CYII=);
		background-repeat: no-repeat;
		background-size: 0.26rem 0.26rem;
		width: 0.26rem;
		height: 0.26rem;
		display: block;
		margin-right: 0.2rem;
		position: relative;
		top: 0.1rem;
		float: left;
	}
</style>