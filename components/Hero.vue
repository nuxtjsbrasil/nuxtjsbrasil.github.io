<template>
  <section class="Hero">
    <div class="Hero__inner">
      <div class="Hero__logo">
        <VueToNuxtLogo/>
        <h1>NUXT<span>BRASIL</span></h1>
      </div>
      <p class="Hero__lead">
        <b class="tagline">grupo de usuários brasileiros</b>
        <br/>Universal Vue.js Applications
      </p>
      <div class="Hero__buttons">
        <a href="https://github.com/nuxtjsbrasil" target="_blank" class="Button Button--primary">Github Nuxt Brasil</a>
        <a href="https://nuxtjs.org/" target="_blank" class="Button Button--secondary">Nuxtjs.org (en)</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  components: {
    VueToNuxtLogo: () => import('~/components/VueToNuxtLogo')
  }
}
</script>

<style lang="stylus" scoped>
.Hero
  display flex
  width 100%
  height 100vh
  justify-content center
  align-items center
  &__logo
    display flex
    align-items flex-end
    justify-content center
    margin-bottom 1.875rem /* 30/16 */
    h1
      font-size 6.25rem /* 100/16 */
      font-weight 600
      font-style normal
      font-stretch normal
      line-height 0.8
      letter-spacing 1px
      color #009c3b
      margin 0
    span
      font-weight 300
      color #35495e
      display block
  &__lead
    font-size 3rem /* 48/16 */
    font-weight 300
    line-height 1.2
    text-align center
    color #526488
    .tagline
      font-size 2rem
  &__buttons
    text-align center
    a
      margin 0 .9375rem /* 15/16 */
</style>
