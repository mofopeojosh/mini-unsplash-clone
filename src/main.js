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
Vue.prototype.$axios.defaults.headers.common.Authorization = 'Client-ID b2ee44112977aaaef879bd0c5936a0bcfba8e56b9c7cce200f16f40d5e4369f9';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
