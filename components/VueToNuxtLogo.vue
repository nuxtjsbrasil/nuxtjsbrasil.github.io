<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.VueToNuxtLogo
  display inline-block
  animation turn 2s linear forwards
  transform rotateX(180deg)
  position relative
  overflow hidden
  height 11.25rem /* 180/16 */
  width 15.3125rem /* 245/16 */
  margin-right .9375rem /* 15/16 */

.Triangle
  position absolute
  top 0
  left 0
  width 0
  height 0
  &--one
    border-left 6.5625rem /* 105/16 */ solid transparent
    border-right 6.5625rem /* 105/16 */ solid transparent
    border-bottom 11.25rem /* 180/16 */ solid #009c3b
  &--two
    top 1.875rem /* 30/16 */
    left 2.1875rem /* 35/16 */
    animation goright 0.5s linear forwards 2.5s
    border-left 5.46875rem /* 87.5/16 */ solid transparent
    border-right 5.46875rem /* 87.5/16 */ solid transparent
    border-bottom 9.375rem /* 150/16 */ solid #ffdf00
  &--three
    top 3.75rem /* 60/16 */
    left 2.1875rem /* 35/16 */
    animation goright 0.5s linear forwards 2.5s
    border-left 4.375rem /* 70/16 */ solid transparent
    border-right 4.375rem /* 70/16 */ solid transparent
    border-bottom 7.5rem /* 120/16 */ solid #002776
  &--four
    top 7.5rem /* 120/16 */
    left 4.375rem /* 70/16 */
    animation godown 0.5s linear forwards 2s
    border-left 2.1875rem /* 35/16 */ solid transparent
    border-right 2.1875rem /* 35/16 */ solid transparent
    border-bottom 3.75rem /* 60/16 */ solid #fff

@keyframes turn
  100%
    transform rotateX(0deg)
@keyframes godown
  100%
    top 11.25rem /* 180/16 */
@keyframes goright
  100%
    left 4.375rem /* 70/16 */
</style>
