<template>
  <div class="mask-box">
    <div class="mask" :style="{height:maskHeight,width:maskWidth}" />
  </div>
</template>

<script>
export default {
  name: 'TimeMask',
  inject: ['baseHour'],
  props: {
    spendTime: {
      type: Number,
      required: true
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
    pointer-events: none;
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
