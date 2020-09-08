<template>
  <div>
    <div class="gantt-legend">
      <!--图例组件：可选配置      -->
      <chart-legend/>
    </div>
    <div class="gantt-area">
      <!--甘特图Side数据组件      -->
      <chart-side v-slot="{item}">
        <slot name="side-box" :item="item"></slot>
      </chart-side>
      <!--甘特图中心数据组件 -->
      <chart-container v-slot="{item}">
        <slot name="container-box" :item="item"></slot>
      </chart-container>
    </div>
  </div>
</template>

<script>
import ChartLegend from '@/components/BaseGanttComponents/chart-legend'
import ChartContainer from '@/components/BaseGanttComponents/chart-container'
import ChartSide from '@/components/BaseGanttComponents/chart-side'

export default {
  name: 'GanttChart',
  props: {
    gantt_data: { // 甘特图数据
      type: Array,
      required: true
    }
  },
  provide () {
    return {
      gantt_data: this.gantt_data
    }
  },
  components: { ChartSide, ChartLegend, ChartContainer }

}
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .gantt-area{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 1000px;
    height: 400px;
  }

</style>
