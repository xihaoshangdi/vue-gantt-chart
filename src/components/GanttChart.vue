<template>
  <div class="gantt__layout" @contextmenu.prevent>
    <!--头部组件：可选配置-->
    <chart-header
      v-show="showHeader"
      :header-data="headerData"
      :base-hour="baseHour"
      :base-block="baseBlock"
      :time-section-day-js="timeSectionDayJs"
    />
    <!--甘特图区域组件：必选-->
    <div class="gantt__area">
      <!--甘特图Side数据组件-->
      <chart-side
        ref="side"
        v-slot="{item}"
        :base-block="baseBlock"
        :gantt-data="ganttData"
      >
        <slot name="side-box" :item="item" />
      </chart-side>
      <!--甘特图中心数据组件 -->
      <chart-container
        ref="container"
        v-slot="{item}"
        :base-hour="baseHour"
        :spend-time="spendTime"
        :gantt-data="ganttData"
        :time-section-day-js="timeSectionDayJs"
        @dragstart.native.capture="moveStart"
        @drop.capture.native="moveEnd"
        @openFloatView.native.capture="handleOpenFloatView('container',$event)"
        @closeFloatView.native.capture="handleCloseFloatView"
      >
        <slot name="container-box" :item="item" />
      </chart-container>
    </div>
  </div>
</template>

<script>
import ChartHeader from '@/components/BaseGanttComponents/chart-header'
import ChartContainer from '@/components/BaseGanttComponents/chart-container'
import ChartSide from '@/components/BaseGanttComponents/chart-side'
import isBetween from 'dayjs/plugin/isBetween'
import dayjs from 'dayjs'
dayjs.extend(isBetween)
export default {
  name: 'GanttChart',
  components: { ChartHeader, ChartSide, ChartContainer },
  props: {
    // 甘特图表头配置
    showHeader: { // 甘特图表头显示
      type: Boolean,
      default: true
    },
    headerData: { // 甘特图表头自定义
      type: Array,
      default: () => ['日期', '时间']
    },
    // 甘特图时间区间
    timeSection: {
      type: Object,
      default: () => {
        return { start: dayjs(new Date()), end: dayjs(new Date()).add(3, 'day') }
      }
    },
    chartHeight: { // 中心甘特图高度
      type: Number,
      default: 400
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
  data () {
    return {
      //
      baseHour: 50,
      baseBlock: 40,
      // Drag
      drag: null,
      // View
      view: null
    }
  },
  computed: {
    timeSectionDayJs () { // 传入的甘特图时间区间转化为DayJs
      return { start: dayjs(this.timeSection.start), end: dayjs(this.timeSection.end) }
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
  mounted () { // 滚动同步
    const header = document.querySelector('.gantt__layout .header__container')
    const side = document.querySelector('.gantt__layout .side')
    const container = document.querySelector('.gantt__layout .container')
    const area = document.querySelector('.gantt__layout')
    let flag = ''
    area.addEventListener('mouseenter', (event) => {
      const className = event.target.className
      if (className.includes('container')) flag = 'container'
      if (className.includes('side')) flag = 'side'
    }, true)
    area.addEventListener('scroll', (event) => {
      if (flag === 'container') {
        side.scrollTop = event.target.scrollTop
        if (event.target.className === 'container') header.scrollLeft = event.target.scrollLeft
      }
      if (flag === 'side') container.scrollTop = event.target.scrollTop
    }, true)
  },
  methods: {
    moveStart (event) {
      console.log('DragStart', event)
      this.drag = event
    },
    moveEnd (event) {
      console.log('DragEnd', event)
      const dom = this.drag.target
      dom.parentNode.removeChild(dom)
      event.target.appendChild(dom)
    },
    handleOpenFloatView (type, event) {
      const { info } = event.detail
      console.log(info)
      const layerRect = this.$refs[type].$el.getBoundingClientRect()
      const targetRect = event.detail.coordinate
      const htmlTemplate =
        `
          <div>${info.startAirport}</div>
          <div>${info.workType}</div>
          <div>${info.endAirport}</div>
        `
      this.view = this.$FloatView({ layerRect, targetRect, htmlTemplate })
    },
    handleCloseFloatView () {
      this.view.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
  // 甘特图全局布局
  .gantt__layout{
    margin: 0;
    padding: 0;
    width: 1000px;
    height: 600px;
  }

  .gantt__area{
    height: 520px;//TODO
    display: grid;
    grid-template-columns: 200px 1fr;
  }
</style>
