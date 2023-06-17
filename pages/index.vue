<template>
  <Login />
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  head() {
    return {
      title: 'Dashboard',
    }
  },
}
</script>
