<template>
  <div>
   <Navbar/>
   <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view></router-view>
        </main>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import Alert from "./AlertMessage";

export default {
  components: {
    // Footer,
    Sidebar,
    Navbar,
    Alert,
  },
};
</script>