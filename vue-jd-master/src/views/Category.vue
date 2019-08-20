<template>

	<div id="category-page">
		<top-bar shortcut>
			<!--搜索表单-->
			<div class="search-form">
				<i class="search-icon"></i>
				<input type="text"  placeholder="请输入搜索内容" @focus="$router.push('/search')" />
			</div>
		</top-bar>

		<div class="container weui-flex">

			<div class="aside" ref="aside" @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd">

				<ul ref="aside-ul" :style="{top:asideTop+'px'}" :class="{transition:transition}">
					<li :class="{active:navIndex==index}" v-for="(item,index) in nav" :key="index" v-text="item.title" @click="navIndex=index;getContentList(item.id);"> </li>
				</ul>

			</div>

			<div class="content weui-flex__item" ref="content" @touchstart="contentTouchStart" @touchmove="contentTouchMove" @touchend="contentTouchEnd">

				<div class="category-list" ref="category-list" :style="{top:contentTop+'px'}">

					<div class="category-image">
						<img :src="products.image">
					</div>

					<div class="category-jd" v-for="(row,i) in products.category" :key="i">
						<div class="title" v-text="row.title"></div>
						<ul class="clear">
							<li class="prodcut left" v-for="(col,j) in row.list" :key="j">
								<img :src="col.image">
								<div class="product-name" v-text="col.name"></div>
							</li>
						</ul>

					</div>

				</div>

			</div>

		</div>
		<TabBar/>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar";
	import TabBar from "@/components/TabBar";
	export default {
		data() {
			return {
				nav: [{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					},
					{
						id: 1,
						title: "热门推荐"
					}
				],
				navIndex: 0,
				asideTop: 0,
				asideTopTmp: 0,
				asideStartY: 0,
				minTop: 0,
				transition: false,

				category: [{
						image: require("../assets/images/xinrenlibao.png"),
						category: [{
								title: "热门分类",
								list: [{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									},
									{
										image: require("../assets/images/phone.png"),
										name: "手机"
									}
								]
							},
							{
								title: "家电搜索",
								list: [{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									},
									{
										image: require("../assets/images/reshuihu.jpg"),
										name: "热水壶"
									}
								]
							}
						]
					},
					{
						image: require("../assets/images/xinrenlibao.png"),
						category: [{
								title: "热门分类",
								list: [{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									},
									{
										image: require("../assets/images/biyuntao.jpg"),
										name: "计生用品"
									}
								]
							},
							{
								title: "家电搜索",
								list: [{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									},
									{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									},
									{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									},
									{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									},
									{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									},
									{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									},
									{
										image: require("../assets/images/huahzuangpin.jpg"),
										name: "化妆品"
									}
								]
							}
						]
					}
				],
				products: [],
				contentTop: 0,
				contentTopTmp: 0,
				contentStartY: 0,
				contentMinTop: 0
			};
		},
		methods: {
			asideTouchStart(event) {
				this.transition = false;
				this.asideStartY = event.changedTouches[0].clientY;
			},
			asideTouchMove(event) {
				var y = event.changedTouches[0].clientY;

				var t = this.asideTopTmp + y - this.asideStartY;
				// 限定上拉和下拉的阈值;
				t = t < this.minTop ? this.minTop : t;
				t = t > 150 ? 150 : t;

				this.asideTop = t;
			},
			asideTouchEnd(event) {
				this.transition = true;
				this.asideTop = this.asideTop > 0 ? 0 : this.asideTop;
				this.asideTop =
					this.asideTop < this.minTop + 150 ? this.minTop + 150 : this.asideTop;
				this.asideTopTmp = this.asideTop;
			},

			contentTouchStart(event) {
				//				this.transition = false;
				this.contentStartY = event.changedTouches[0].clientY;
			},
			contentTouchMove(event) {
				var y = event.changedTouches[0].clientY;

				var t = this.contentTopTmp + y - this.contentStartY;
				// 限定上拉和下拉的阈值;
				t = t < this.contentMinTop ? this.contentMinTop : t;
				t = t > 150 ? 150 : t;

				this.contentTop = t;
			},
			contentTouchEnd(event) {
				//				this.transition = true;
				this.contentTop = this.contentTop > 0 ? 0 : this.contentTop;
				this.contentTop =
					this.contentTop < this.contentMinTop + 150 ?
					this.contentMinTop + 150 :
					this.contentTop;
				this.contentTopTmp = this.contentTop;
			},

			getContentList(id) {
				this.products = {
					...this.category[Math.random() > 0.5 ? 0 : 1]
				};
				console.log(this.products);
			}
		},
		mounted() {
			console.log(document.querySelector("#category-page .aside").clientHeight);
			console.log(
				document.querySelector("#category-page .aside ul").clientHeight
			);

			console.log(this.$refs["aside"].clientHeight);
			console.log(this.$refs["aside-ul"].clientHeight);

			this.minTop =
				this.$refs["aside"].clientHeight -
				150 -
				this.$refs["aside-ul"].clientHeight;

			console.log(this.minTop);

			this.contentMinTop =
				this.$refs["content"].clientHeight -
				150 -
				this.$refs["category-list"].clientHeight;
		},
		created() {
			this.getContentList();
		},
		updated() {
			this.contentMinTop =
				this.$refs["content"].clientHeight -
				150 -
				this.$refs["category-list"].clientHeight;
		},
		components: {
			TabBar,
			TopBar
		}
	};
</script>

<style lang="less">
	html,
	body,
	#app,
	#category-page {
		height: 100%;
	}
	
	#category-page {
		.search-form {
			position: relative;
			padding: 0.15rem 0.2rem 0 0.2rem;
			/* 搜索图标 */
			.search-icon {
				display: block;
				position: absolute;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFNjQ1RDY1RDhGMTFFOUI3NTA4MzFDQzdFNURCRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFNjQ1RDc1RDhGMTFFOUI3NTA4MzFDQzdFNURCRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NEU2NDVENDVEOEYxMUU5Qjc1MDgzMUNDN0U1REJENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NEU2NDVENTVEOEYxMUU5Qjc1MDgzMUNDN0U1REJENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pku4YgYAAAJ4SURBVHjavJa/axRREMdfTokaSJOrRBtB/AmmUAhCNGqh13nGX2Ab0IAWSREUNeRCAmIQf3bmDxBM1FgYTougJNioRRo9JYWFQUGuiyhCOD8DszKu7273bpcMfLi3w3vvu3Nv9s00VSoVVywWXYRtgTwchh2QVX8Z3sMLmMrlcp9cTGuKEO6CEdgXc79ZGOQFXjUqvBZuw1mZ4+qzCtyHPl7gV7VJGY+vDWbgnBH9DQ/hDGyCNdAK29U3oXOcrpG1MwTUFle4BaZhr/E9gZ1wGh7AZxVZgpL4iOyUznls1ske04i3xBG+Ax06XoaL0A0LUf8v4gtwXNcsq7tD96wpLInUY54vw1id5ysvMKZrA+sh6q5awqPmTCcbEQ2JT5ozH60m3A6dJpH6XXLrMwnXSdTtPuFu45MM/ZJUlagX9UtwHo2/wvaCmHLpmd1rv094m/G9SVH4rRlv9Qlnje9bisJfzTgbdXM1uxWwjKkyga1PcX+7V9knXDK+XSkK7zHjjz7hWePLpyicD5XM/4Tt5X4SNiZV5MLYoHsF9sgnPA9zJrluphDtLS2fYnNcKPPVsvqqFvEg6oEE0Q6YaGXPwVpFQtqVcfN8DS40IHpe1wY2TrQvw/NWh577tWBIHV0F9+AAXIqqyQhuVsETxi13/ve4PZfcMM9MQxBUrAntRt7BovolgXbDMf1rm0OiQZIWiHo4TrO3TpMjSbNXDjUE/4hnqiz+Cb1wEF7XISpzDyHQC1cY2ygLBDgUt692pnodhSPaWdqG/gM8h6eIlTxnX+BnyBzZDXmpuMJRRT8q0wv6uUrCLjG/NbMSlQghEb4OP+Cu+P4IMADW+r7MRJXyTAAAAABJRU5ErkJggg==);
				background-repeat: no-repeat;
				background-size: contain;
				width: 0.3rem;
				height: 0.28rem;
				top: 0.3rem;
				left: 0.5rem;
			}
			/* 搜索框 */
			input {
				border-radius: 0.3rem;
				height: 0.6rem;
				padding-left: 0.9rem;
				font-size: 0.24rem;
				color: #232326;
				background: #f7f7f7;
				outline: none;
				border: none;
				width: 100%;
				box-sizing: border-box;
			}
		}
	}
	
	#category-page .search-bar {
		background-color: #e43130;
	}
	
	#category-page .container {
		background-color: #ffffff;
		height: 100%;
		padding: 45px 0px 50px;
		box-sizing: border-box;
	}
	
	#category-page .aside {
		height: 100%;
		width: 85px;
		overflow: hidden;
		position: relative;
		background-color: #f8f8f8;
	}
	
	#category-page .aside ul {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		border-right: solid 1px #cccccc;
		border-top: solid 1px #cccccc;
		box-sizing: border-box;
	}
	
	.transition {
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	
	#category-page .aside li {
		height: 46px;
		line-height: 46px;
		text-align: center;
		border-bottom: solid 1px #cccccc;
		box-sizing: border-box;
		color: #333;
		font-size: 14px;
	}
	
	#category-page .aside li.active {
		color: #f23030;
	}
	
	#category-page .content {
		overflow: hidden;
		position: relative;
	}
	
	.category-list {
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.category-image {
		padding: 7px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-image img {
		width: 100%;
	}
	
	.category-jd {
		padding: 19px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-jd .title {
		font-size: 14px;
		color: #333;
		margin: 0;
		padding: 0;
		line-height: 1em;
		font-weight: 700;
		color: #080808;
	}
	
	.category-jd ul {
		margin: 9px 0px 0px;
		padding: 0px;
	}
	
	.category-jd li {
		width: 33.333%;
		list-style: none;
		text-align: center;
	}
	
	.category-jd li img {
		width: 70px;
		height: 70px;
	}
	
	.category-jd li .product-name {
		color: #333;
		height: 35px;
		margin-top: 2px;
	}
</style>