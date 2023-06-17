<!-- Please remove this file from your project -->
<template>
  <div style="background-color: #f5f5fb">
    <b-navbar type="light" variant="transparent" class="py-5" sticky>
      <b-button v-b-toggle.sidebar>
        <span class="mdi mdi-menu"></span>
      </b-button>
      <b-navbar-nav class="ml-auto" style="font-size: 20px">
        <b-nav-item href="#" class="font-weight-bold" :link-attrs="linkAttrs">
          Take a tour
        </b-nav-item>
        <b-nav-item href="#" class="icon-menu">
          <div class="danger-status-circle"></div>
          <span class="mdi mdi-email text-primary"></span>
        </b-nav-item>
        <b-nav-item href="#" class="font-weight-bold" :link-attrs="linkAttrs">
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
        <b-sidebar id="sidebar" shadow="sm">
          <div class="px-0 pt-5">
            <nav class="mb-3">
              <b-nav class="px-0" vertical>
                <div v-for="(topMenuItem, topMenuItemIndex) in topMenuItems">
                  <b-nav-item-dropdown v-if="topMenuItem.dropdown">
                    <template #button-content>
                      <span :class="topMenuItem.icon"></span>
                      <span class="ml-3">
                        {{ topMenuItem.label }}
                      </span>
                    </template>
                  </b-nav-item-dropdown>
                  <b-nav-item
                    v-else
                    href="/"
                    :key="topMenuItemIndex"
                    :active="topMenuItem.active"
                  >
                    <span :class="topMenuItem.icon"></span>
                    <span class="ml-3">
                      {{ topMenuItem.label }}
                    </span>
                  </b-nav-item>
                </div>
                <hr height="2px" width="100%">
                <div v-for="(bottomMenuItem, bottomMenuItemIndex) in bottomMenuItems">
                  <b-nav-item-dropdown v-if="bottomMenuItem.dropdown">
                    <template #button-content>
                      <span :class="bottomMenuItem.icon"></span>
                      <span class="ml-3">
                        {{ bottomMenuItem.label }}
                      </span>
                    </template>
                  </b-nav-item-dropdown>
                  <b-nav-item
                    v-else
                    href="/"
                    :key="bottomMenuItemIndex"
                    :active="bottomMenuItem.active"
                  >
                    <span :class="bottomMenuItem.icon"></span>
                    <span class="ml-3">
                      {{ bottomMenuItem.label }}
                    </span>
                  </b-nav-item>
                </div>
              </b-nav>
            </nav>
            <!-- <b-button variant="primary" block @click="hide">Close Sidebar</b-button> -->
          </div>
        </b-sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 vh-100">
          <div class="row">
            <div class="col-sm">
              <Nuxt />
            </div>
          </div>
        </main>
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
      topMenuItems: [
        {
          route: '/',
          label: 'Dashboard',
          active: true,
          dropdown: false,
          icon: 'mdi mdi-view-dashboard',
        },
        {
          route: '#',
          label: 'Profile',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-account',
        },
        {
          route: '#',
          label: 'Services',
          active: false,
          dropdown: true,
          icon: 'mdi mdi-dropbox',
        },
        {
          route: '#',
          label: 'Medical Records',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-clipboard',
        },
        {
          route: '#',
          label: 'Care Wallet',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-wallet',
        },
        {
          route: '#',
          label: 'Messages',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-message',
        },
        {
          route: '#',
          label: 'Resources',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-bookshelf',
        },
      ],
      bottomMenuItems: [
        {
          route: '#',
          label: 'Account Settings',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-cog',
        },
        {
          route: '#',
          label: 'Contact Support',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-lifebuoy',
        },
        {
          route: '#',
          label: 'Logout',
          active: false,
          dropdown: false,
          icon: 'mdi mdi-logout',
        },
      ],
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

.nav-item .nav-link {
  color: #a0a0a0;
}
.nav-item .nav-link.active {
  color: white;
  font-weight: bold;
  background-color: #382f90;
}
.nav-item .nav-link:hover {
  background-color: #333;
}
</style>
