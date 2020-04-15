
import Vue from 'vue';
import axios from "axios";  //主要AJAX套件
import VueAxios from "vue-axios";//將它轉為Vue的套件
import Loading from 'vue-loading-overlay';//vue-loading-overlay套件 Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';// Init plugin
import "bootstrap";

import App from './App.vue';
import router from "./router";
import "./bus";

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.component("Loading",Loading);//全域啟動Loading套件
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});


router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next);

  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
         path: "/login",
      })
  }
});
  }else{
    next();
}
});
