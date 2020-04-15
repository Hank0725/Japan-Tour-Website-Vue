import Vue from "vue";

Vue.prototype.$bus = new Vue();


//Message
//vm.$bus.$emit("massage:push",message,status);
//message(String):訊息內容
//status(String):Alert的樣式