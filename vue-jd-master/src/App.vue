<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
	/* 公用样式 */
	html {
		font-size: calc(100vw/7.5);
	}
	
	body {
		margin: 0;
		font-family: "arial, helvetica, sans-serif";
		font-size: 0.14rem;
		color: #333;
		background-color: #f7f7f7;
	}
	
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.flex {
		display: flex;
	}
	
	.flex-item {
		flex: 1;
	}
	
	.flex-column {
		flex-flow: column;
	}
	
	a {
		text-decoration: none;
		color: #333333;
	}
	
	ul,
	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	img {
		border: 0 none;
		vertical-align: top;
	}
	/* 层级关系定义 */
	.top-bar,.tab-bar,.search-bar{
		z-index: 9999;
	}
</style>