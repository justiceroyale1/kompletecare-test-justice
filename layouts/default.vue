<template>
  <div style="background-color: #f5f5fb">
    <div class="row mx-0">
      <div class="col-lg-3 col-xl-2 d-none d-lg-block bg-white px-0">
        <div class="px-0" style="padding-top: 155px !important">
          <MainMenu />
        </div>
      </div>
      <div class="col-sm-12 col-lg-9 px-0">
        <b-navbar type="light" variant="transparent" class="py-5">
          <b-button v-b-toggle.sidebar class="d-inline-block d-lg-none">
            <span class="mdi mdi-menu"></span>
          </b-button>
          <b-navbar-nav class="ml-auto" style="font-size: 20px">
            <b-nav-item
              href="#"
              class="font-weight-bold"
              :link-attrs="linkAttrs"
            >
              Take a tour
            </b-nav-item>
            <b-nav-item href="#" class="icon-menu">
              <div class="danger-status-circle"></div>
              <span class="mdi mdi-email text-primary"></span>
            </b-nav-item>
            <b-nav-item
              href="#"
              class="font-weight-bold"
              :link-attrs="linkAttrs"
            >
              <span class="mdi mdi-bell"></span>
            </b-nav-item>
            <b-img
              src="/images/user1.jpg"
              v-bind="profilPicAttrs"
              rounded="circle"
              alt="User profile pic"
            ></b-img>
          </b-navbar-nav>
        </b-navbar>
        <div class="container-fluid">
          <div class="row">
            <b-sidebar id="sidebar" shadow="sm" class="d-block d-lg-none">
              <div class="px-0 pt-5">
                <MainMenu />
              </div>
            </b-sidebar>
            <div role="main" class="col-sm-12 col-lg-11 pl-lg-5 pb-5">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      linkAttrs: { style: 'color: rgba(56, 47, 144, 0.6);' },
      profilPicAttrs: {
        width: 50,
        height: 50,
      },
    }
  },
}
</script>

<style>
.icon-menu .nav-link {
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.danger-status-circle {
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 15px;
  right: 7px;
  background-color: red;
  z-index: 50;
}

.profile-pic {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
