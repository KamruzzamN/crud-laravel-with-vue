export default {
	state: {
		users: [],
		currentUser: [],
	},

	getters: {
		getUsers(state) {
			return state.users;
		},
		currentUser(state){
			return state.currentUser;
		}
	},

	actions:{
        users(context){
			axios.get('/get-users')
			.then((response) => {
                console.log(response);
                context.commit('users', response.data.users)
            }).catch((error) => {
				console.log(error)
			});
		},
		authorized(context){
			axios.get('/authorized')
            .then((response) => {
                context.commit('currentUser', response.data.user);
            }).catch((error) => {
				context.commit('currentUser', null);
			});
		}

	},

	mutations:{
		users(state, data){
			return state.users = data;
		},
		currentUser(state, data){
			return state.currentUser = data;
		}
	},
}