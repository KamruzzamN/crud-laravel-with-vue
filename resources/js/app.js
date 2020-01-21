require('./bootstrap');

window.Vue = require('vue');

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import data from './index';
const store = new Vuex.Store(data);


//v-form
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

//sweetalert2
import Swal from 'sweetalert2';
window.Swal = Swal;
const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
});
window.Toast = Toast;


//vue progressbar
import VueProgressBar from 'vue-progressbar';
const options = {
	color: 'green',
	failedColor: 'red',
	thickness: '5px',
	location: 'top',
}
Vue.use(VueProgressBar, options);

//vue spinner

Vue.component('spinner', require('vue-simple-spinner'))
//vue filter
Vue.filter('shortText', function (text,length,suffix) {
	return text.substring(0,length)+suffix;
});

//vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routers';
const router = new VueRouter({
    mode: 'history',
    routes,
});

// router.beforeEach((to, from, next) =>{
// 	const currentUser = store.state.currentUser;
// 	if(currentUser != null){
// 		next('/home');
// 	}
// 	else if(currentUser == null){
// 		next('/login');
// 	}
// 	else{
// 		next();
// 	}
// });

//app layouts
//Vue.component('AppLayout', require('./components/AppLayout'));
//import AppLayout from './components/AppLayout';
// const app = new Vue({
//     router,
//     store,
//     render:(h) => h(AppLayout)
// }).$mount('#app');

const app = new Vue({
	el: '#app',
    router,
    store,
});
