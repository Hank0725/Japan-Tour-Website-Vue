<template>
  <div id="app">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <img src="./assets/logo.png"/>
    <HelloWorld />
    <router-view></router-view>
    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    //API伺服器路徑
    //所申請的APIPath
    console.log(process.env.APIPATH, process.env.CUSTOMPATH);
    this.$http.get(api).then(response => {
      console.log(response.data);
      console.log(process.env.VUE_APP_API);
    });
  }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
