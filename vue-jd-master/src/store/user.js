// 获取登录状态
const isLogin = window.sessionStorage.getItem('login_state');

export default {
	
	state: {
		login:isLogin?JSON.parse(isLogin):false
	},
	// 同步
	mutations: {
		setLoginState(state,val){
			state.login = val;
			window.sessionStorage.setItem('login_state',JSON.stringify(val));
		}
	},
	// 异步
	actions: {

	}

}