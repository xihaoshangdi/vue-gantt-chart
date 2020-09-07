<template>
  <div id="menu">
    <div class="menu">功能1</div>
    <div class="menu">功能2</div>
    <div class="menu">功能3</div>
    <div class="menu">功能4</div>
    <div class="menu">功能5</div>
  </div>
</template>

<script>
export default {
  name: 'chart-menu',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  #menu{
    height: 125px;
    overflow: hidden;      /*隐藏溢出的元素*/
    box-shadow: 0 1px 1px #888,1px 0 1px #ccc;
    position: absolute;      /*自定义菜单相对与body元素进行定位*/
  }
  .menu{
    width: 130px;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
  }
</style>
