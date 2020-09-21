<template>
  <div class="yyy">
    <span>{{da.workType}}</span>
    <span>{{da.startAirport}}-{{da.endAirport}}</span>
  </div>
</template>

<script>
export default {
  name: 'yyy',
  props: ['da']
}
</script>

<style lang="scss" scoped>
  .yyy{
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
  }
</style>
