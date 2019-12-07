import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Third party libraries
import axios from 'axios';

Vue.config.productionTip = false;

//Add axios to Vue prototype
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = 'https://api.unsplash.com/';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
