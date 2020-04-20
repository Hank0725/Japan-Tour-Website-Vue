<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height:150px; background-size:over;background-position:center"
            class="img-fluid"
            :style="{backgroundImage:`url(${item.imageUrl})`}"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{item.origin_price | currency}}</div>
              <del class="h6" v-if="item.price">{{item.origin_price | currency}}</del>
              <div class="h5" v-if="item.price">{{item.price | currency}}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i> 查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i> 加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      
    </div>


    
    <!-- 購物Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.image" class="img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>

<!-- 購物車清單 -->
<!--  //新進訂單   -->
<section>
    <div class="container-fluid mt-3">
        <div class="card rounded-0 border-dark mb-3 my-3 h-100">
            <div class="card-header">新進訂單</div>
            <div class="card-body text-dark ">
                <div class="d-flex">
                    <div class="form-inline">
                        <div class="form-group ">
                            <label for="month" class="sr-only">月份</label>
                            <select name="" id="month" class="form-control">
                                <option value="1月">1月</option>
                                <option value="2月">2月</option>
                                <option value="3月">3月</option>
                                <option value="4月">4月</option>
                                <option value="5月">5月</option>
                                <option value="6月">6月</option>
                                <option value="7月">7月</option>
                                <option value="8月">8月</option>
                                <option value="9月">9月</option>
                                <option value="10月">10月</option>
                                <option value="11月">11月</option>
                                <option value="12月">12月</option>
                            </select>
                        </div>
                    </div>

                    <div class="ml-auto">
                        <a href="#" type="button" class="btn btn-outline-secondary">下載報表</a>
                        <a href="#" type="button" class="btn btn-outline-secondary ">訂單管理</a>
                    </div>
                </div>

                <section>
                    <div class="container-fluid mt-3">
                        <h5 class="card-title mt-3">本日訂單報表</h5>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr >
                                        <th width="100">日期</th>
                                        <th>訂單數</th>
                                        <th>出貨數</th>
                                        <th>退貨數</th>
                                        <th>瑕疵品數量</th>
                                        <th width="150">營業額</th>
                                        <th width="150">淨利潤</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item) in cart" :key="item.id">
                                        <td>{{item.id}}</td>
                                        <td>{{item.qty}}</td>
                                        <td>246</td>
                                        <td>90</td>
                                        <td>2</td>
                                        <td class="text-right">12,000</td>
                                        <td class="text-right">9,000</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="6" class="text-right" style="font-weight:bold;">月總營收</td>
                                        <td class="text-right"  style="font-weight:bold;">3,254,245</td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="text-right" style="font-weight:bold;"> 月總淨利潤</td>
                                        <td class="text-right"  style="font-weight:bold;">2,545,464</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                </section>

                       </div>
                     </div>
                     </div>
           
               </section>
</div>
</template>


<script>
import $ from "jquery";
// import Footer from "./Footer";

export default {
  //   components: {
  //   Footer,
  // },
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      isLoading: false
    };
  },
  methods: {
    //取得產品列表資料
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false;
      });
    },
    //V-on查看更多按鈕點選取得購物車內容
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then(response => {
        vm.product = response.data.product;
        $("#productModal").modal("show");
        console.log(response);
        vm.status.loadingItem = ""; //關閉讀取中的轉圈圈
      });
    },
    //V-on加到購物車按鈕
    addtoCart(id, qty = 1) {
      //ES6預設值，函式沒有數量，則自動帶入1
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      //post回傳購物車選購後的資料
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = ""; //清中讀取中的商品id
        $("#productModal").modal("hide"); //加入購物車後關閉Modal
      });
    }
  },
  //
  getCart() {
    const vm = this;
    const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
    vm.isLoading = true;
    this.$http.get(url).then(response => {
      console.log(response);
      vm.isLoading = false;
    });
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>