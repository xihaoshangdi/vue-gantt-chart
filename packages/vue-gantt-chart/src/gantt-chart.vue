<template>
  <div class="gantt__layout" @contextmenu.prevent>
    <!--头部组件：可选配置-->
    <chart-header
      v-show="showHeader"
      :header-data="headerData"
    />
    <!--甘特图区域组件：必选-->
    <template v-if="ganttData.length">
      <div
        class="gantt__area"
        :style="areaStyleObj"
        @handleFloatView="handleFloatView"
      >
        <!--甘特图Side数据组件-->
        <chart-side
          v-slot="{item}"
          :gantt-data="chartData"
          :first-line-stick="firstLineStick"
        >
          <slot name="side-box" :item="item" />
        </chart-side>
        <!--甘特图中心数据组件 -->
        <chart-container
          id="gantt-container"
          v-slot="{item}"
          :spend-time="spendTime"
          :gantt-data="chartData"
          :first-line-stick="firstLineStick"
        >
          <slot name="container-box" :item="item" />
        </chart-container>
      </div>
    </template>
    <!-- 无数据区域-->
    <template v-else>
      <div class="gantt__area--error">暂无数据</div>
    </template>
  </div>
</template>

<script>
import ChartHeader from './components/chart-header'
import ChartContainer from './components/chart-container'
import ChartSide from './components/chart-side'
import FloatView from './lib/FloatView'
import Drag from './unit/drag'
import isBetween from 'dayjs/plugin/isBetween'
import dayjs from 'dayjs'
dayjs.extend(isBetween)
export default {
  name: 'GanttChart',
  components: { ChartHeader, ChartSide, ChartContainer },
  provide () {
    return {
      timeSectionDayJs: this.timeSectionDayJs,
      baseHour: this.baseHour,
      baseBlock: this.baseBlock
    }
  },
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
    timeSection: { // 甘特图时间区间
      type: Array,
      required: true
    },
    // 甘特图内容配置
    firstLineStick: { // 首行粘性
      type: Boolean,
      default: true
    },
    chartMaxHeight: { // 甘特图内容最大高度
      type: Number,
      default: 500
    },
    ganttCurrentTime: { // 甘特图时间轴时间
      type: Number,
      default: new Date().getTime()
    },
    ganttData: { // 甘特图数据
      type: Array,
      required: true
    },
    // 额外配置
    floatViewRenderFn: { // renderTemplate
      type: Function,
      default: () => { return (info) => info }
    }
  },
  data () {
    return {
      //
      baseHour: 50, // 基准小时
      baseBlock: 40, // 基准高度
      //
      floatState: true
    }
  },
  computed: {
    areaStyleObj () { // 自适应高度限制
      const realHeight = this.ganttData.length * this.baseBlock
      return { height: `${realHeight > this.chartMaxHeight ? this.chartMaxHeight : realHeight}px` }
    },
    timeSectionDayJs () { // 传入的甘特图时间区间转化为DayJs区间
      const [start, end] = this.timeSection.map(item => dayjs(item))
      if (start.isValid() && end.isValid()) {
        return { start, end }
      } else {
        console.log(`传入的时间区间${this.timeSection}不是合法的`)
        return {}
      }
    },
    spendTime () { // 计算当前时间与甘特图起始时间的差值
      let time
      if (dayjs(this.ganttCurrentTime).isBetween(this.timeSectionDayJs.start, this.timeSectionDayJs.end, null, '[]')) {
        time = dayjs(dayjs(this.ganttCurrentTime)).diff(this.timeSectionDayJs.start, 'second') // 差值时间
      } else {
        console.error('错误的时间')
        time = 0
      }
      return time
    },
    chartData () {
      return this.ganttData.map(item => {
        item.childArray = item.childArray.filter(task => dayjs(task.end).isBefore(this.timeSectionDayJs.end.add(1, 'day')))
        return item
      })
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
      if (flag === 'container' && event.target.className === 'container') {
        side.scrollTop = event.target.scrollTop
        header.scrollLeft = event.target.scrollLeft
      }
      if (flag === 'side') container.scrollTop = event.target.scrollTop
    }, true)
    // float
    area.addEventListener('mousemove', (event) => {
      this.floatState = event.buttons === 0
    })
    new Drag(container)
  },
  methods: {
    handleFloatView (event) {
      if (this.floatState) {
        const triggerEvent = event.target
        const { info } = event.detail
        const layerEvent = document.getElementById('gantt-container')
        const htmlTmpl = this.floatViewRenderFn(info)
        FloatView({ layerEvent, triggerEvent, htmlTmpl })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 甘特图全局布局
.gantt__layout{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.gantt__area{
  display: grid;
  grid-template-columns: 250px 1fr;
}
.gantt__area--error{
  font-size: 3em;
  text-align: center;
}
</style>
