<template>
  <div class="gantt-layout">
    <!--图例组件：可选配置      -->
    <chart-legend :gantt-legend="ganttLegend"/>
    <div class="gantt-area">
      <!--甘特图Side数据组件-->
      <chart-side
        v-on="$listeners"
        v-slot="{item}">
        <slot name="side-box" :item="item"></slot>
      </chart-side>
      <!--甘特图中心数据组件 -->
      <chart-container
        v-on="$listeners"
        :chart-height="chartHeight"
        :baseSemi="baseSemi"
        :blockHeight="blockHeight"
        :spendTime="spendTime"
        v-slot="{item}">
        <slot name="container-box" :item="item"></slot>
      </chart-container>
    </div>
  </div>
</template>

<script>
import ChartLegend from '@/components/BaseGanttComponents/chart-legend'
import ChartContainer from '@/components/BaseGanttComponents/chart-container'
import ChartSide from '@/components/BaseGanttComponents/chart-side'
import isBetween from 'dayjs/plugin/isBetween'
import dayjs from 'dayjs'
dayjs.extend(isBetween)
export default {
  name: 'GanttChart',
  props: {
    // 甘特图配置
    baseSemi: { // 一小时的基准宽度
      type: Number,
      default: 50
    },
    chartHeight: { // 中心甘特图高度
      type: Number,
      default: 400
    },
    blockHeight: { // 数据条甘特图高度
      type: Number,
      default: 40
    },
    ganttLegend: { // 甘特图图例
      type: Object,
      default: () => {
        return null
      }
    },
    ganttTimeSection: { // 甘特图时间区间
      type: Object,
      default: () => {
        return { start: dayjs(new Date()), end: dayjs(new Date()).add(3, 'day') }
      }
    },
    ganttCurrentTime: { // 甘特图时间轴时间
      type: Number,
      default: 0
    },
    ganttData: { // 甘特图数据
      type: Array,
      required: true
    }
  },
  computed: {
    ganttTimeSectionDayJS () { // 传入的甘特图时间区间转化为DayJs
      return { start: dayjs(this.ganttTimeSection.start), end: dayjs(this.ganttTimeSection.end) }
    },
    spendTime () { // 计算当前时间与甘特图起始时间的差值
      let time
      if (dayjs(this.ganttCurrentTime).isBetween(this.ganttTimeSectionDayJS.start, this.ganttTimeSectionDayJS.end, null, '[')) {
        time = dayjs(dayjs(this.ganttCurrentTime)).diff(this.ganttTimeSectionDayJS.start, 'second') // 差值时间
      } else {
        console.error('错误的时间')
        time = 0
      }
      return time
    }
  },
  provide () {
    return {
      ganttData: this.ganttData,
      ganttTimeSectionDayJS: this.ganttTimeSectionDayJS
    }
  },
  components: { ChartSide, ChartLegend, ChartContainer },
  mounted () { // 滚动同步
    const side = document.querySelector('.side')
    const container = document.querySelector('.container')
    const area = document.querySelector('.gantt-area')
    let flag = ''
    area.addEventListener('mouseenter', (event) => {
      const className = event.target.className
      if (className.includes('container')) flag = 'container'
      if (className.includes('side')) flag = 'side'
    }, true)
    area.addEventListener('scroll', (event) => {
      if (flag === 'container') side.scrollTop = event.target.scrollTop
      if (flag === 'side') container.scrollTop = event.target.scrollTop
    }, true)
  }
}
</script>

<style lang="scss" scoped>
  // 甘特图全局布局
  .gantt-layout{
    margin: 0;
    padding: 0;
    border: 1px solid saddlebrown;
    overflow: hidden;
    width: 100%;
    & > *{
      box-sizing: border-box;
    }
  }

  .gantt-area{
    display: flex;
    flex-direction: row;
  }

</style>
