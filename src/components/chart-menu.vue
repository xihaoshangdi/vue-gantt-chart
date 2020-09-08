<template>
  <div
    class="chart-menu"
    v-show="menuStatus"
    :style="menuPosition"
  >
    <div>功能</div>
    <div>功能</div>
    <div>功能</div>
    <div>功能</div>
    <div>功能</div>
  </div>
</template>

<script>
export default {
  name: 'chart-menu',
  props: ['menuStatus', 'menuPosition']
}
</script>

<style scoped lang="scss">
  .chart-menu{
    position: absolute;

    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    color: #50668B;

    width: 51px;
    background-color: #FFFFFF;
    box-shadow: 0 0 8px 0 rgba(174, 184, 196, 0.63);
    & > div{
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
    & > div:hover{
      color: #278DFF;
      background-color: rgba(0,0,0,0.05);
    }
  }
</style>
