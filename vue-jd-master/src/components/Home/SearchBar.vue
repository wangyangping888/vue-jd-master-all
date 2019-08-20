<template>

	<div class="search-bar flex" v-bind:class="{fixed:isFixed}">
		<div class="category" @click="$router.push('/category');"></div>
		<div class="search-form flex-item">
			<span class="jd-icon"></span>
			<span class="search-icon"></span>
			<input type="text" placeholder="请输入搜索内容" @focus="$router.push('/search')" />
		</div>
		<div class="login">
			<span v-if="!isLogin" @click="$router.push('/login');">登录</span>
			<span v-if="isLogin" @click="$router.push('/user');" class="icon-user"></span>
		</div>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				isFixed: false
			};
		},
		methods: {},
		props: [],
		watch: {},
		computed: {
			isLogin() {
				return this.$store.state.user.login;
			}
		},
		created() {
			// 监听滚动事件
			window.addEventListener('scroll', (e) => {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop > 20) {
					this.isFixed = true;
				} else {
					this.isFixed = false;
				}
			});
		}
	}
</script>

<style>
	.search-bar {
		height: 0.88rem;
		position: fixed;
		width: 100%;
		top: 0px;
		left: 0px;
		z-index: 9999;
	}
	
	.search-bar.fixed {
		background-color: #e43130;
	}
	
	.search-bar .category {
		margin: 0.28rem 0 0 0.30rem;
		width: 0.40rem;
		height: 0.36rem;
		display: block;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=) no-repeat;
		background-size: 100% 100%;
	}
	
	.search-bar .search-form {
		height: 0.6rem;
		overflow: hidden;
		font-size: 0.24rem;
		padding-top: 0.14rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		position: relative;
	}
	
	.search-bar .jd-icon {
		width: 0.4rem;
		height: 0.3rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOk7Puo7PfE+SP9SUuo7Peo8Pu0/Qeo7Peo7Peo7Pek7Peo7Pes8Pus8P+k7PaLYf6IAAAAPdFJOUwCjwREGj1sg9Hrd6bFINxDM6d8AAAD3SURBVCjPY2AAAv3/nxnk////sUo1nQEOoIIgoOaARfD/WmyC/wNQBL+lzZQCCn5FEfwCZJX2//8/AV2Qoej//3YMQWb9/x8xBBkq/v8vwBBk/f8/AUOQ/f9/AQxBhvX/N2AKnv//AVMwHsjBEJz//zs2lVgE5bFpx2pR//8FUMEvcEE+mOPX/2+AC/JAvcnyH6gDJvj+/w8DEM0G0gEVZN8PDfpqkA6o4O3//5tBtGX//98OEEHmJGAkXWBgCNQC0t9Abv4aKrMewmYAR6sAAzyKfydABX8yIASFGSCCjQ/ggr+mg61WOjgXnHwmKSnpiM4FO5EBAIlo6/K7pNY1AAAAAElFTkSuQmCC) no-repeat;
		background-size: 0.4rem 0.3rem;
		position: absolute;
		top: 0.3rem;
		left: 0.5rem;
	}
	
	.search-bar .search-form .jd-icon:after {
		content: "";
		position: absolute;
		border-right: 1px solid #ddd;
		top: 0;
		left: 0.52rem;
		height: 0.32rem;
	}
	
	.search-bar .search-form .search-icon {
		display: block;
		width: 0.36rem;
		height: 0.3rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMoaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhGREEyMUExOEVBODExRTY5RjhGQTNGQkQ5MTU0Nzg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhGREEyMUEyOEVBODExRTY5RjhGQTNGQkQ5MTU0Nzg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcyMEE4MDA4RUE1MTFFNjlGOEZBM0ZCRDkxNTQ3ODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEZEQTIxQTA4RUE4MTFFNjlGOEZBM0ZCRDkxNTQ3ODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5rJ6szAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRFTGlxmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtDm2jwAAAA10Uk5TAAzELPfpgpZFG7zcYkOTnU0AAACtSURBVBjTY2AAArOlLlHJDHDQdBcENGBc8bvhnQwzSu8WQriMum4CICrlkgCYL3TbAEwz71UE07U7ofpmXweRHFcMoHxmXxCL6RrcntwFQMI2EM4XvQwSLIDz2UFK1zbA+Ry3gETsBDif8yqQ8EW4m+EKFj66enTz0O1Ddw+6e9H9g+5fpPBwRA2vK9AAg4enriJyeK9gEIIqgMUHI0wBDMAVMMCiAkMBKp9RCQBeFz92BKVuMwAAAABJRU5ErkJggg==) no-repeat;
		background-size: 0.3rem auto;
		position: absolute;
		top: 0.3rem;
		left: 1.18rem;
	}
	
	.search-bar .search-form input {
		outline: none;
		width: 100%;
		font-size: 0.24rem;
		height: 0.6rem;
		line-height: 0.6rem;
		border-radius: 0.3rem;
		padding-left: 1.36rem;
		box-sizing: border-box;
		border: none;
		background-color: #FFFFFF;
	}
	
	.search-bar .login {
		width: 0.8rem;
		line-height: 0.88rem;
		display: inline-block;
		color: #fff;
		font-size: 0.28rem;
	}
	
	.search-bar .login .icon-user {
		display: inline-block;
		margin: 0.2rem 0.24rem 0.24rem 0.1rem;
		width: 0.4rem;
		height: 0.44rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURUdwTP///////////////////////////////////////////////////////////////////////////////0qNmhgAAAAUdFJOUwCdyNsFrueAG/RrkE8OKTR4XEK97eDRGAAAAWlJREFUOMuNVUkCgyAMFJFdRZb/v7UJtlYkqLm0DUOWyZAOQ2Or3YIenmyyPKOJeI+zMv9s9H3YIhBhhBvLp+2mxXNuF6zTGfi+dYAMztz0/aHx1kziZjg5ZZsSZF8oIIRgVcWcTu4hQE1fyFkSwO0SEJIDV2sLBGrCswuMt9chiXsFtCQQmo4tkDW4QPCLPk/0Iq/i0pJgcqzGctMN+HijEk7wo4kaoRkzUdoZa68GqamWnsaN8uSUfNQlOcoz9gRu1upeR+JI28Gly9RYfpI0xyHKXUzdZxgP9adbXJHQPlxas+fnkPUvIuuvkwA1in+NiY6pFa6Tqus8hobwWLZJ5jWP0JurtOfLsslSnQN4YYqX/aElTU7zlY9l34FmPg3VMLrymPIxcotD6K/YyL8truaOMixA7gDRCJYYLIxJU0+yfaEK3256+geYEUPvl0YCI6KlejDUXNmrLwyY9PIFzu2DekqtYIYfJmsgn/YUC8kAAAAASUVORK5CYII=) no-repeat 50%;
		background-size: 0.4rem;
	}
	
	.search-bar .login .icon-user:before {
		content: "";
	}
</style>