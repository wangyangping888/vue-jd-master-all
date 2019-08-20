<template>

	<div id="login-page">
		<top-bar>
			<div class="title">京东登录</div>
		</top-bar>
		<div class="login-wrap">
			<div class="input-container">
				<input type="text" v-model="name" placeholder="用户名/邮箱/手机号" />
				<i class="close-icon icon" v-show="name.length>0" @click="name='';"></i>
			</div>
			<div class="input-container password">
				<input :type="type" v-model="pwd" placeholder="请输入密码" />
				<i class="eye-icon icon" :class="{close:type=='password'}" @click="type=type=='password'?'text':'password'"></i>
				<i class="close-icon icon" v-show="pwd.length>0" @click="pwd='';"></i>
				<a class="forget" href="#">忘记密码</a>
			</div>
			<div class="notice" v-text="msg"></div>
			<button class="login-btn" :disabled="!(name.length>0&&pwd.length>0)" @click="login">登录</button>
		</div>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar";
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				name: "",
				pwd: "",
				msg: "",
				type: "password"
			};
		},
		methods: {
			login() {
				axios
					.post(this.api.login, qs.stringify({
						name: this.name,
						pwd: this.pwd
					}))
					.then(res => {
						if(res.data.code > 0) {
							// 登录成功
							this.$store.commit("setLoginState", true);
							this.$router.push({
								path: "/user"
							});
						} else {
							// 错误提示
							this.msg = res.data.msg;
						}
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		components: {
			TopBar
		},
		created() {}
	};
</script>

<style>
	.login-wrap {
		padding: 1rem 0.5rem 0.5rem;
	}
	
	.input-container {
		margin-top: 0.4rem;
		padding: 0.2rem 0;
		position: relative;
		border-bottom: solid 1px #efefef;
		position: relative;
	}
	
	.input-container input {
		height: 0.6rem;
		padding-right: 0.6rem;
		border: none;
		outline: none;
		font-size: 0.32rem;
		color: #222;
	}
	
	.input-container input.password {
		padding-right: 3rem;
	}
	
	.input-container .icon {
		width: 0.48rem;
		height: 0.48rem;
		background-size: contain;
		position: absolute;
	}
	
	.input-container .close-icon {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAjBJREFUaAXtVztSwzAQjUl6zkFHPj09FFAARbgAcAVoc4acABigCQX0UOcDDfdIH8e8BWtmk2gTaa1UrGY0ku3V03vPK1mu1ayYA+aAOWAOmAPmgDnwfx3IYqWPRqM9jOkXRbGL9rbT6bzGYvD4yWRymOd5L8uyKep1q9X65s839Xc2BXieE/kD3N9HHUDQuScm6NZwODwD+RfCIkzUftBAFhQtAJOQ8640cH2nETEej08Bco/acGBoOTa7LXejBdTr9RvAzRhktAhyfj6fPwCDk89hBmFHlWgBzWbzDTN0UVUiBOdz5P+FZj1FL2JnD7mI/nIKzIhIu91+cnG8Fcb8kseYRx4b2lcLoAkEQl4RQmwl8sShkoBQEdsin0TAJhFYmAVillOtsvM0L5XKb+APRk6n8vnCblOuE1XOu/lcm0wAAQqp4uaiNpnzDjSpAAJdIyI5eZov+jtAg5SF1gLVpCXpG1jjviPt3WLdQ02b7A0I5HOQUn2xQ8UkESCRx25DRw71sSNERGUBAnlKlS4dKXC+ed6miEoCymP08kdqJc+3KUK9iIk8/QvAXf6RWiHP02DN2xIPgHy8r68SoCHvJk8tIloACByBzAB1wXlcd8tUcVzFVhKBASex/wTRawCLs4eJ1ORJlbQmSmwKCS7RAoA8Zei0xwc7z8ZJIjg2Dxf7GgGXcOodiJ/4Pz4OTRsfAxpLGMD7Qv1AvfLF2T1zwBwwB8wBc8AcMAfMAb8DP94/FJqk3I9tAAAAAElFTkSuQmCC);
		top: 0.26rem;
		right: 0;
	}
	
	.input-container.password .close-icon {
		right: 2.5rem;
	}
	
	.input-container .eye-icon {
		right: 1.8rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB5UlEQVR4Ae1YJXQsQRD8zOYzmTD52Hgdjg2zDvp3571J3HkXZloKg40KM1NXOPMyO8fY9V4f7HZX1zC8YDAYDAaDEQ2YmJj4q+t6iaZp7WS9ZItku7Db3714Bx/4hoXopaWl9ySmikwjXND3pTt266shFhxBFz4zM/OOarKOhCxDkC8GDnCBMyjiKWE6mYnk/jRwgjvQ4iso2YFExCn6OX03Uo1m0e8kqtUvMPzGM7y79TmVcBwgR6DEN0tqbpfMOTU19dtdLvgiBrESzmZ/zzCtkkRtVMPfvOVFLDgkrdHqF/HU9DnPkG/T80K891OOInCKeZDbJ2LTNP8T0bpQ65uGYWTKYi4vL1+STxn5jtytA7e/y/BOFgdOcAuFWIcGX7qOSyA8RCK7xYxEdNrMNJ3wsSsEcghxLq/EW5YVTwnPBbJqu5qXihcKYdcSyCH4n0OLN7OOUyAaV/iXeTDnlym4xgV/pzfdp18gyVf4j7hbAPgqCpAv+Pd7U4DVxySqeV42p8vWDtU6IcSsRlIBsD78EQsQBV0oCgZxFEyjEbCQkc+RuJBF/lYiAjZzhbLNHG+nFQca2A69c3hxoHGoDjR8pJT014xAHerBHcz7oHp/XauAC9cq0X+xxVeLDAaDwWAw/IsraH8effh8nP4AAAAASUVORK5CYII=);
	}
	
	.input-container .eye-icon.close {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAl5JREFUaAXtlE1rE2EQx/PSQIkphQihHhcUklNIcilUihYEDx76FXwBBSt4LkIpiF/ACAq+XPwAPXhoEdoiBHrIC7mYgIUclYIBMYbSuIm/wa5s1s2TtY2IMA/MzjPPzPxn5r/PbiikSxlQBpQBZUAZUAaUAWVAGVAGlAFlQBlQBpSBf8FAeFzRSqUyT8zVSCTyNpfLlcbFT8Jfq9UW+v3+FbA2C4XCngnTOADNFwaDgQBMIXY4HF4G8I0J8LQ+al6j5gY4UeQ7NeepWRmFGxnlOD5fREvzsqIAv4adCz/NyT8FW2pIrWN0qS09jFzGAZh+CzlyZc/atr31N4YQTMGm1qxTT2pLD47tp40D5PP59zBy35NocT9L5XL5ouf8xKZgCSYAlhtEaksP7jPv3vgNOMHcyxeA3XBs0TDT56wYi8VWs9nsN7cv6L5er5/p9XqPwFoBa4hMzl5y92+Owwo0AODRarX6BH3bB/ATxYrxePxpJpP57OP/7ajRaJztdrt3wFvBOecNAO8ZzN9F216f1w40gJPEm1hjv0Zhv7xDCu7i3+aXW0I+sj9AZKW4IueQBfZL5F9CTyNDi/wBB+swvz7kMBh+jRjCQyHexCINPEcm+jei+Q/ILZh/Z2zA4/zjASS/1WpNt9vtBwwhV+DXX8ODHdT8QuPFZDL50LKsw6BJTtyJBnCSm83mTKfTuU4D9xjmvHMeRJOzT87jRCLxKp1Ofw2S4xdzqgHcgHwfMsAScpnGLHSKJlMSgy3fwgF2C72DbHPP99G6lAFlQBlQBpQBZUAZUAaUgf+YgR8RmtPGSJ6MGgAAAABJRU5ErkJggg==);
	}
	
	.input-container .forget {
		position: absolute;
		height: 0.46rem;
		line-height: 0.46rem;
		right: 0;
		top: 0.25rem;
		background-color: #fff;
		color: #222;
		font-size: 0.28rem;
		border: 0;
		outline: 0;
		border-radius: 2px;
		text-align: center;
		padding-left: 0.32rem;
		border-left: 1px solid #ccc;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	
	.login-wrap .notice {
		font-size: 0.28rem;
		line-height: 0.6rem;
		color: #f23030;
		min-height: 0.6rem;
		text-align: left;
	}
	
	.login-wrap .login-btn {
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		display: block;
		background-color: #efefef;
		border-radius: 0.5rem;
		font-size: 0.32rem;
		color: #fff;
		border: none;
		outline: none;
		box-shadow: 0 0.2rem 0.4rem 0 rgba(255, 62, 62, 0.2);
		text-align: center;
		font-family: PingFangSC-Semibold;
	}
	/* 禁用状态 */
	
	.login-wrap .login-btn:disabled {
		background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
	}
	
	.login-wrap .login-btn {
		background-image: linear-gradient(90deg, #f10000, #ff2000 73%, #ff4f18);
	}
</style>