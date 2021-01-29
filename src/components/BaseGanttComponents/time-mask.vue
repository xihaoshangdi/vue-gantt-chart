<template>
  <div class="mask-box">
    <div class="mask" :style="{height:maskHeight,width:maskWidth}" />
  </div>
</template>

<script>
export default {
  name: 'TimeMask',
  props: {
    baseHour: {
      type: Number,
      default: 50
    },
    spendTime: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      maskHeight: 0
    }
  },
  computed: {
    maskWidth () {
      return this.baseHour * this.spendTime / 3600 + 'px'
    }
  },
  mounted () {
    this.maskHeight = this.$parent.$el.clientHeight + 'px'
  }
}
</script>

<style scoped lang="scss">
  .mask-box{
    z-index: 110;
    position: sticky;
    top: 0;
  }
  .mask{
    position: absolute;
    background-color: rgba(0,100,100,0.1);
    height: 40px;
    pointer-events:none;
  }
</style>
