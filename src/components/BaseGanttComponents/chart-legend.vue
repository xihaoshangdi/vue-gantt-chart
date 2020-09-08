<template>
      <div class="icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <span>?</span>
        <div v-show="infoStatus" class="info">
          sssss
        </div>
      </div>
</template>

<script>
export default {
  name: 'chart-legend',
  data () {
    return {
      infoStatus: false
    }
  },
  methods: {
    onMouseEnter () {
      this.infoStatus = true
    },
    onMouseLeave () {
      this.infoStatus = false
    }
  }
}
</script>

<style scoped lang="scss">
  .icon{
    background-color: #409EFF;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    z-index: 20;
    position: relative;
  }
</style>
