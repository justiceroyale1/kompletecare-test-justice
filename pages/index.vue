<template>
  <Login />
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  middleware: 'auth'
}
</script>
