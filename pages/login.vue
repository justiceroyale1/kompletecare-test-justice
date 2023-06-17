<template>
  <Login />
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  head() {
    return {
      title: 'Login',
    }
  },
  auth: 'guest'
}
</script>
