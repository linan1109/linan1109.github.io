<template>
    <div class="show-hide-detail">
        <div class="show-hide-detail-header" @click="toggle">
        <slot name="header"></slot>
        <span v-if="!show">+</span>
        <span v-else>-</span>
        </div>
        <div v-if="show" class="show-hide-detail-content">
        <slot></slot>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl';

.show-hide-detail
  
  overflow hidden
  .show-hide-detail-header
    background-color $frontColor
    cursor pointer
    display flex
    justify-content space-between
    align-items top
    span
      font-size 1.5rem
      height 1.5rem
  .show-hide-detail-content
    padding 0.5rem
    background-color $frontColor
    p
      line-height normal
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote 
      font-size 1rem

</style>