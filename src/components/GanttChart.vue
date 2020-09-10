<template>
  <div>
    <div class="gantt-legend">
      <!--图例组件：可选配置      -->
      <chart-legend/>
    </div>
    <div
      class="gantt-area"
      @contextmenu="rightClick">
      <!--甘特图Side数据组件      -->
      <chart-side v-slot="{item}">
        <slot name="side-box" :item="item"></slot>
      </chart-side>
      <!--甘特图中心数据组件 -->
      <chart-container
        v-on="$listeners"
        :chart-height="chartHeight"
        :baseSemi="baseSemi"
        :ganttTimeSection="ganttTimeSection"
        :blockHeight="blockHeight"
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
import dayjs from 'dayjs'
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
    ganttTimeSection: { // 甘特图时间区间
      type: Object,
      default: () => {
        return { start: dayjs(new Date()), end: dayjs(new Date()).add(3, 'day') }
      }
    },
    // 甘特图数据
    gantt_data: { // 甘特图数据
      type: Array,
      required: true
    },
    // 甘特图时间轴时间
    ganttCurrentTime: {
      type: Object,
      default: () => {
        return { currentTime: 0 }
      }
    }
  },
  provide () {
    return {
      gantt_data: this.gantt_data,
      ganttCurrentTime: this.ganttCurrentTime,
      ganttSide: this.ganttSide
    }
  },
  components: { ChartSide, ChartLegend, ChartContainer },
  mounted () {
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
  },
  methods: {
    rightClick (event) {
      event.preventDefault()
      console.log('rightClik-event', `${event.target.className || 'null'}---${event.clientX}---${event.clientY}`)
      this.$emit('right-click', { className: event.target.className, x: event.clientX, y: event.clientY })
    }
  }

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
  }

</style>
