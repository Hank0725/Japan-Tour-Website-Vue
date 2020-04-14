// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from "axios";  //主要AJAX套件
import VueAxios from "vue-axios" ;//將它轉為Vue的套件
import App from './App.vue';
import router from "./router";
import Home from "@/components/HelloWorld";

Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.use(Home);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});
