<!-- Please remove this file from your project -->
<template>
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
          :href="topMenuItem.route"
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
          :href="bottomMenuItem.route"
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
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
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
  }
}
</script>
<style>
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
