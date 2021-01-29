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
    align-items: center;
    height: 100%;
    cursor: pointer;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    font-size: 10px;
    // 用于防止被处理
    pointer-events: none;
  }
</style>
