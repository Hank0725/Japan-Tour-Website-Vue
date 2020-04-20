<template>
    <div>
          <footer>
    <div class="container">
     <div class="row bg-light ">
     <div class="col-md-4 text-center">
     <ul>
     <li class="px-2"><p class="text-secondary ">關於我們</p></li>
     <li class="px-2"><a class="px-2" href="">日本成立初衷</a></li>
     <li><a class="px-2" href="">日本旅遊團隊</a></li>
     <li><a class="px-2" href="">日本經歷與歷史</a></li>
    </ul>
     </div>
     <div class="col-md-4  text-center">
     <ul>
     <li><p class="text-secondary">最新日本旅遊資訊</p></li>  
     <li><a class="py-2" href="">東京</a></li>
     <li><a class="px-2" href="">大阪</a></li>
     <li><a class="px-2" href="">北海道</a></li>
     <li><a class="px-2" href="">沖繩</a></li>
     </ul>
     </div>
     <div class="col-md-4  text-center  ">
      <ul>
      <li><p class="text-secondary ">聯絡我們</p></li>
      <li><a class="px-2 mr-1" href="#"  ><i class="fab fa-instagram mr-1"></i>instagram</a></li>
      <li><a class="px-2 mr-1" href="#"  ><i class="fab fa-facebook-square mr-1"></i>facebook</a></li>
      <li><a class="px-2 mr-1" href="#" >我們的聯絡資訊</a></li>
      <li><a class="px-2 mr-1" href="#" >我們的位置</a></li>
     </ul>
     </div>
      </div>  
     <div id="app" class="copyright bg-secondary text-center py-3">
      <p>{{copyright}}</p>
    </div>
   
     </div>
  </footer>
    </div>
</template>


<script>
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      copyright:'Copyright©'+new Date().getFullYear()+" Made by Hank"+" 本網站資訊只供示範、教學之用途",
    }
  })
export default {
  
}
</script>