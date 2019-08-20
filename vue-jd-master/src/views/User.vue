<template>
	<div id="user-center">
		<top-bar >
			<div class="title">我的京东</div>
		</top-bar>
		<user-info></user-info>
		<order></order>
		<wallet></wallet>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import TabBar from "@/components/TabBar"
	import UserInfo from "@/components/User/UserInfo"
	import Order from "@/components/User/Order"
	import Wallet from "@/components/User/Wallet"
	import TopBar from "@/components/TopBar";
	export default {
		name: 'user',
		data() {
			return {};
		},
		methods: {},
		computed: {
			login() {
				return this.$store.state.user.login;
			}
		},
		created() {

		},
		components: {
			TopBar,
			UserInfo,
			Wallet,
			Order,
			TabBar,
		}
	}
</script>

<style>
	#user-center{
		background-color: #f7f7f7;
	}
</style>