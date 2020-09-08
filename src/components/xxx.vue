<template>
  <div @click="leftClick" @contextmenu="rightClick">
    {{da.currentAirort}}
    <!--右键组件：可选配置 -->
    <chart-menu :menu-status="menuStatus" :menu-position="menuPos">
      <slot name="chart-menu"></slot>
    </chart-menu>
  </div>
</template>

<script>
import ChartMenu from '@/components/chart-menu'
export default {
  name: 'xxx',
  components: { ChartMenu },
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
  },
  methods: {
    rightClick (event) {
      event.preventDefault()
      // 右键位置为甘特图数据条就打开右键菜单
      this.menuStatus = true
      this.menuPos.left = event.clientX + 'px'
      this.menuPos.top = event.clientY + 'px'
    },
    leftClick () {
      this.menuStatus = false
    }
  }
}
</script>

<style scoped>

</style>
