<template>
  <div class="xxx">
    <span>{{ da.currentAirport }}</span>
    <span>{{ da.number }}</span>
    <span>{{ da.model }}</span>
  </div>
</template>

<script>
export default {
  name: 'Xxx',
  props: ['da']
}
</script>

<style scoped>
  .xxx{
    display: flex;
    flex-direction: row;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    text-align: center;
    font-size: 10px;
  }
</style>
