<template>
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" class="brand-link">
        <img
          src="/img/logo.png"
          :alt="$store.state.app.name"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">{{$store.state.app.name}}</span>
      </a>

      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="/adminlte/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Gaston Loisa</a>
          </div>
        </div>

        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input
              class="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <nav-item-component icon="fas fa-home" link="/">
              Home
            </nav-item-component>
             <nav-item-component icon="fa fa-info-circle" link="/about">
              About
             </nav-item-component>
               <nav-item-component icon="fas fa-dollar-sign" link="/precios">
              Precios
             </nav-item-component>
            <nav-item-component icon="fa fa-address-card" link="/novedades">
              Novedades
             </nav-item-component>
             
          </ul>
        </nav>
      </div>
    </aside>
</template>

<script>
import NavItemComponent from './NavItemComponent.vue'
export default {
  components:{
    NavItemComponent,
  }
  
} 
</script>