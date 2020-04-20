//官方的元件
import Vue from "vue";
import VueRouter from "vue-router";


//自訂的分頁元件
import Dashboard from "@/components/Dashboard";
import Login from "@/components/pages/Login";
import Products from "@/components/pages/Products";
import CustomerOrder from "@/components/pages/CustomerOrders";


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",//*星號可避免別人直接進入
            redirect: "/",
        },
        {
            name: "Login",//元件呈現的名稱
            path: "/",//對應的虛擬路徑
            component: Login,//對應的元件
        },
        {
            name: "Dashboard",//元件呈現的名稱
            path: "/admin",//對應的虛擬路徑
            component: Dashboard,//對應的元件
            meta: { requiresAuth: true },
            children: [{
                name: "Products",//元件呈現的名稱
                path: "products",//對應的虛擬路徑
                component: Products,//對應的元件 
                meta: { requiresAuth: true },//需要驗證  
            }

            ],
        },
        {
            name: "Dashboard",//元件呈現的名稱
            path: "/",//對應的虛擬路徑
            component: Dashboard,//對應的元件
            children: [{
                name: "CustomerOrders",//元件呈現的名稱
                path: "customer_order",//對應的虛擬路徑
                component: CustomerOrder,//對應的元件 
            }
            ],
        },
    ],
});