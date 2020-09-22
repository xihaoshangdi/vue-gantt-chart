<template>
  <div class="mask-box">
    <div class="mask" :style="{height:maskHeight,width:mask}"></div>
  </div>
</template>

<script>
export default {
  name: 'time-mask',
  props: ['mask'],
  data () {
    return {
      maskHeight: 0
    }
  },
  mounted () {
    this.maskHeight = this.$parent.$el.clientHeight + 'px'
  }
}
</script>

<style scoped lang="scss">
  .mask-box{
    z-index: 800;
    position: sticky;
    top: 0;
  }
  .mask{
    position: absolute;
    background-color: rgba(0,100,100,0.1);
    height: 40px;
  }
</style>
