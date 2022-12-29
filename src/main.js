import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-search-select/dist/VueSearchSelect.css'
import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)
import './assets/css/style.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const options = {
  // You can set your default options here
};
import SweetAlertIcons from 'vue-sweetalert-icons';
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);
Vue.use(SweetAlertIcons);
Vue.use(Toast, options);
import axios from "axios"
axios.defaults.baseURL ="https://api-kasb.uzedu.uz/api/v1/";
Vue.prototype.$axiosDefault = axios
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
