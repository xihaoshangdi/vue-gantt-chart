<template>
  <div class="sideInfo">
    <span>{{ sideInfo.currentAirport }}</span>
    <span>{{ sideInfo.number }}</span>
    <span>{{ sideInfo.model }}</span>
  </div>
</template>

<script>
export default {
  name: 'SideComponent',
  props: {
    sideInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .sideInfo{
    display: flex;
    flex-direction: row;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    text-align: center;
    font-size: 10px;
  }
</style>
