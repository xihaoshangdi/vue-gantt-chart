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
    justify-content: space-around;
    color: black;
    overflow:hidden;
    font-size: 0.5em;
    flex-direction: row;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
</style>
