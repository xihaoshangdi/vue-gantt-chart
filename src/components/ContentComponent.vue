<template>
  <div class="contentInfo">
    <span>{{ contentInfo.workType }}</span>
    <span>{{ contentInfo.startAirport }}-{{ contentInfo.endAirport }}</span>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent',
  props: {
    contentInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .contentInfo{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: 13px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    text-align: center;
    // 用于防止被处理
    pointer-events: none;
  }
</style>
