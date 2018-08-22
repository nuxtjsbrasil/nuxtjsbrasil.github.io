<template>
  <div>
    <hero/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Hero: () => import('~/components/Hero')
  }
}
</script>

<style scoped>
</style>
