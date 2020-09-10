<template>
  <div class="chart-box">
    <div :style="chartStyle" @dragstart.stop="onDragStart" @dragover.stop="onDragOver" @drop.stop="ondrop">
      <div>
        <template v-for="(item,index) in day">
          <div :style="dateStyle" :key="index">{{item}}</div>
        </template>
      </div>
      <div>
        <template v-for="(item,index) in hour">
          <div class="hour" :style="hourStyle" :key="index">{{item}}</div>
        </template>
      </div>
      <time-line :baseSemi="baseSemi"/>
      <!--灰色遮罩-->
      <div class="cki" :style="xxx"></div>
      <div class="container">
        <template v-for="(block,index) in gantt_data">
          <chart-block
            :key="index"
            :style="blockStyle"
            :baseSemi="baseSemi"
            :ganttTimeSectionDayJS="ganttTimeSectionDayJS"
            :block="block"
            v-slot="{item}">
            <slot :item="item"></slot>
          </chart-block>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { handleDaySet, handleHourSet } from '@/lib/unit'
import ChartBlock from '@/components/BaseGanttComponents/chart-block'
import dayjs from 'dayjs'
import TimeLine from '@/components/BaseGanttComponents/time-line'
export default {
  name: 'chart-container',
  components: { TimeLine, ChartBlock },
  props: ['chartHeight', 'baseSemi', 'blockHeight', 'ganttTimeSection'],
  inject: ['gantt_data', 'ganttCurrentTime'],
  computed: {
    ganttTimeSectionDayJS () {
      return { start: dayjs(this.ganttTimeSection.start), end: dayjs(this.ganttTimeSection.end) }
    },
    chartWidth () {
      const semis = this.ganttTimeSectionDayJS.end.diff(this.ganttTimeSectionDayJS.start, 'hour')
      return this.baseSemi * semis
    },
    chartStyle () {
      return { // 甘特图真实的渲染长度
        width: `${this.chartWidth}px`,
        height: `${this.chartHeight}px`,
        position: 'relative'
      }
    },
    dateStyle () {
      return { // 日期条的渲染长度
        width: this.baseSemi * 24 + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hourStyle () {
      return { // 时间条的渲染长度
        width: this.baseSemi + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hour () {
      const hours = this.ganttTimeSectionDayJS.end.diff(this.ganttTimeSectionDayJS.start, 'hour')
      return handleHourSet(hours)
    },
    day () {
      return handleDaySet(this.ganttTimeSectionDayJS)
    },
    blockStyle () {
      return {
        backgroundSize: `${this.baseSemi}px 100%`,
        height: `${this.blockHeight}px`
      }
    },
    xxx () {
      return { width: this.baseSemi / 60 * this.ganttCurrentTime.currentTime / 60 + 'px' }
    }
  },
  methods: {
    onDragStart (event) {
      console.log('开始拖拽', event)
      event.dataTransfer.effectAllowed = 'move'
      this.dragEvent = event.target
    },
    ondrop (event) {
      event.preventDefault()
      console.log('拖拽到:', event)
      if (this.dragEvent) {
        this.dragEvent.parentNode.removeChild(this.dragEvent)
        event.target.appendChild(this.dragEvent)
      }
    },
    onDragOver (event) {
      // 结束位置是甘特条就允许结束拖拽
      if (event.target.className === 'block') event.preventDefault()
    }
  }
}
</script>

<style scoped lang="scss">
  .chart-box{
    width: 1000px;
    overflow-y: hidden;
    & > div:first-child > div:nth-child(-n+2){
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-flow: nowrap;
      text-align: center;
      &:first-child{
        background-color: rgba(123,185,254,0.3);
      }
      &:nth-child(2){
        background-color: rgba(123,185,254,0.4);
      }
    }
  }
  .hour{
    background-image: url("../../assets/header.png");
  }
  .container{
    height: 320px;
    overflow: auto;
  }
  .cki{
    background-color: rgba(0,100,100,0.1);
    height: 100%;
    position: absolute;
  }

</style>
