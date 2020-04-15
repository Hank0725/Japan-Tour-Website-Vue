
import Vue from 'vue';
import axios from "axios";  //主要AJAX套件
import VueAxios from "vue-axios";//將它轉為Vue的套件
import "bootstrap";

import App from './App.vue';
import router from "./router";

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
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
