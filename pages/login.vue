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
  middleware: 'auth',
  auth: 'guest'
}
</script>
