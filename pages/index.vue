<template>
  <div class="container">
    <hero/>
    <text-intro />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Hero: () => import('~/components/Hero'),
    TextIntro: () => import('~/components/TextIntro'),
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex 1
  align-items center
  justify-content center
  .Hero
    width 49%
  .text-intro
    width 49%
    padding-right 10rem
    font-size 1.567rem
</style>
