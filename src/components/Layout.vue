<template>
  <div class="layout" @click="leftClick" @contextmenu.stop="rightClick">
    <chart-container>
      <slot name="container-box"></slot>
    </chart-container>
    //
    <slot name="side-box"></slot>
    //
    <chart-menu :menu-status="menuStatus" :menu-position="menuPos"/>
  </div>
</template>

<script>
import ChartMenu from '@/components/chart-menu'
import ChartContainer from '@/components/chart-container'
export default {
  name: 'Layout',
  components: { ChartContainer, ChartMenu },
  data () {
    return {
      menuStatus: false,
      menuPos: {
        left: 0,
        top: 0
      }
    }
  },
  methods: {
    rightClick (event) {
      event.preventDefault()
      // 右键位置为甘特图数据条就打开右键菜单
      if (event.target.className === 'bar') {
        this.menuStatus = true
        this.menuPos.left = event.clientX + 'px'
        this.menuPos.top = event.clientY + 'px'
      }
    },
    leftClick () {
      this.menuStatus = false
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
