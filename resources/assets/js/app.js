
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueMaterial)
Vue.component('navbar', require('./components/NavBar.vue'));
Vue.component('datatable', require('./components/Datatable.vue'))

const app = new Vue({
    el: '#app'
});
