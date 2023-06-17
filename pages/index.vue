<template>
  <MedicalRecord />
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Dashboard',
    }
  },
  mounted(){
    console.log('this', this)
  }
}
</script>
