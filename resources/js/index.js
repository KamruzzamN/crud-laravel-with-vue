export default {
	state: {
		users: [],
	},

	getters: {
		getUsers(state) {
			return state.users;
		},

	},

	actions:{
        users(context){
			axios.get('/get-users')
			.then((response) => {
                context.commit('users', response.data.users)
            }).catch((error) => {
				console.log(error)
			});
		},

	},

	mutations:{
		users(state, data){
			return state.users = data;
		},
	},
}