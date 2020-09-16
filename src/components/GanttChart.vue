<template>
  <div class="gantt-layout">
    <!--图例组件：可选配置      -->
    <chart-legend :gantt-legend="ganttLegend"/>
    <!--头部组件：可选配置-->
    <chart-header
      v-show="showHeader"
      :header-data="headerData"
      :block-height="blockHeight"
      :base-semi="baseSemi"
      :show-header="showHeader"
      :chart-width="chartWidth"
    />
    <!--甘特图区域组件：必选-->
    <div class="gantt-area">
      <!--甘特图Side数据组件-->
      <chart-side
        v-on="$listeners"
        v-slot="{item}"
        :block-height="blockHeight"
        :chart-height="chartHeight"
      >
        <slot name="side-box" :item="item"></slot>
      </chart-side>
      <!--甘特图中心数据组件 -->
      <chart-container
        v-on="$listeners"
        v-slot="{item}"
        :base-semi="baseSemi"
        :block-height="blockHeight"
        :chart-style="chartStyle"
        :spend-time="spendTime">
        <slot name="container-box" :item="item"></slot>
      </chart-container>
    </div>
  </div>
</template>

<script>
import ChartHeader from '@/components/BaseGanttComponents/chart-header'
import ChartLegend from '@/components/BaseGanttComponents/chart-legend'
import ChartContainer from '@/components/BaseGanttComponents/chart-container'
import ChartSide from '@/components/BaseGanttComponents/chart-side'
import isBetween from 'dayjs/plugin/isBetween'
import dayjs from 'dayjs'
dayjs.extend(isBetween)
export default {
  name: 'GanttChart',
  props: {
    // 甘特图表头配置
    showHeader: { // 甘特图表头显示
      type: Boolean,
      default: true
    },
    headerData: { // 甘特图表头自定义
      type: Array,
      validator: function (value) {
        return value.length === 2
      },
      default: () => {
        return ['当前航班', '时间刻度']
      }
    },
    timeSection: { // 甘特图时间区间
      type: Object,
      default: () => {
        return { start: dayjs(new Date()), end: dayjs(new Date()).add(3, 'day') }
      }
    },
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
    ganttCurrentTime: { // 甘特图时间轴时间
      type: Number,
      default: 0
    },
    ganttData: { // 甘特图数据
      type: Array,
      required: true
    }
  },
  provide () {
    return {
      headerData: this.headerData,
      timeSectionDayJs: this.timeSectionDayJs,
      ganttData: this.ganttData
    }
  },
  computed: {
    timeSectionDayJs () { // 传入的甘特图时间区间转化为DayJs
      return { start: dayjs(this.timeSection.start), end: dayjs(this.timeSection.end) }
    },
    chartWidth () {
      const semis = this.timeSectionDayJs.end.diff(this.timeSectionDayJs.start, 'hour')
      return this.baseSemi * semis
    },
    chartStyle () {
      return { // 甘特图真实的渲染长度
        width: `${this.chartWidth}px`,
        position: 'relative'
      }
    },
    spendTime () { // 计算当前时间与甘特图起始时间的差值
      let time
      if (dayjs(this.ganttCurrentTime).isBetween(this.timeSectionDayJs.start, this.timeSectionDayJs.end, null, '[')) {
        time = dayjs(dayjs(this.ganttCurrentTime)).diff(this.timeSectionDayJs.start, 'second') // 差值时间
      } else {
        console.error('错误的时间')
        time = 0
      }
      return time
    }
  },

  components: { ChartHeader, ChartSide, ChartLegend, ChartContainer },
  mounted () { // 滚动同步
    const header = document.querySelector('.header > .container')
    const side = document.querySelector('.gantt-area > .side')
    const container = document.querySelector('.gantt-area > .container')
    const area = document.querySelector('.gantt-area')
    let flag = ''
    area.addEventListener('mouseenter', (event) => {
      const className = event.target.className
      if (className.includes('container')) flag = 'container'
      if (className.includes('side')) flag = 'side'
    }, true)
    area.addEventListener('scroll', (event) => {
      if (flag === 'container') {
        side.scrollTop = event.target.scrollTop
        header.scrollLeft = event.target.scrollLeft
      }
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
    width: 1000px;
    & > *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
  .gantt-area{
    display: flex;
    flex-direction: row;
  }
</style>
