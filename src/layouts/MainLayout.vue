<template>
  <div class="wrapper">
  
    <navBarComponent />

    <sideBarComponent />

    <div class="content-wrapper">

      <router-view class="router-content" />

    </div>

    <footer class="main-footer">
    <!--   <div class="float-right d-none d-sm-block"><b>Version</b> 3.2.0</div>
      <strong
        >Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong
      > -->
      All rights reserved.
    </footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

<script>
import NavBarComponent from './inc/NavBarComponent.vue'
import SideBarComponent from './inc/SideBarComponenet.vue'
export default {
  components:{
    NavBarComponent,
    SideBarComponent
  }
}
</script>

<style scoped>
.content-wrapper {
  margin-right: 20px; 
  margin-left: 50px;
}

.router-content {
      margin-left: 20px;
}
</style>