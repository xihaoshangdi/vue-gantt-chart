<template>
  <div class="xxx">
    <span>{{da.currentAirort}}</span>
    <span>{{da.number}}</span>
    <span>{{da.model}}</span>

  </div>
</template>

<script>
export default {
  name: 'xxx',
  props: ['da'],
  data () {
    return {
      // 菜单数据
      menuStatus: false,
      menuPos: {
        left: 0,
        top: 0
      }
    }
  }
}
</script>

<style scoped>
  .xxx{
    display: flex;
    flex-direction: row;

  }
  .xxx > span{
    padding-left: 5px;
    margin-right: 5px;
  }
</style>
