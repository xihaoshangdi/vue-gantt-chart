<template>
  <div class="layout" @contextmenu.stop="rightClick">
    <slot name="side-box"></slot>
    <slot name="container-box"></slot>
    <chart-menu/>
  </div>
</template>

<script>
import ChartMenu from '@/components/chart-menu'
export default {
  name: 'Layout',
  components: { ChartMenu },
  methods: {
    rightClick (event) {
      event.preventDefault()
      // 右键位置为甘特图数据条就打开右键菜单
      console.log(event.target.className === 'bar')
      // menu.style.left = event.clientX + 'px'
      // menu.style.top = event.clientY + 'px'
      // // 改变自定义菜单的高宽，让它显示出来
      // menu.style.height = '125px'
    }
  }
}
</script>

<style scoped>
  .layout{
    width: 800px;
    height: 400px;
    border: 1px solid red;
    overflow: auto;
  }
</style>
