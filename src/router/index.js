//官方的元件
import Vue from "vue";
import VueRouter from "vue-router";


//自訂的分頁元件
import Dashboard from "@/components/Dashboard";
import Login from "@/components/pages/Login";
import Products from "@/components/pages/Products";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
          path:"*",
          redirect:"/login",
        },
        {
            name: "Login",//元件呈現的名稱
            path: "/login",//對應的虛擬路徑
            component: Login,//對應的元件
        },
        {
            name: "Dashboard",//元件呈現的名稱
            path: "/admin",//對應的虛擬路徑
            component: Dashboard,//對應的元件
            meta: { requiresAuth: true }, 
            children:[{
             name: "Products",//元件呈現的名稱
            path: "products",//對應的虛擬路徑
            component: Products,//對應的元件 
            meta: { requiresAuth: true },//需要驗證  
            }
           
        ],
        },
       
    ],
});