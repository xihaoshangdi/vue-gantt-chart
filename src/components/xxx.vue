<template>
  <div class="xxx">
    {{da.currentAirort}}
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

</style>
