<template>
  <div>
    <hello/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Hello: () => import('~/components/Hello')
  }
}
</script>

<style scoped>
</style>
