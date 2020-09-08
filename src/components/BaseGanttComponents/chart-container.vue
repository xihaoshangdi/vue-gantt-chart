<template>
  <div class="chart-box">
    <div :style="chartStyle"
         @dragstart.stop="onDragStart"
         @dragover.stop="onDragOver"
         @drop.stop="ondrop">
      <div>
        <template v-for="(item,index) in day">
          <div :style="dateStyle" :key="index">{{item}}</div>
        </template>
      </div>
      <div>
        <template v-for="(item,index) in hour">
          <div :style="hourStyle" :key="index">{{item}}</div>
        </template>
      </div>
      <template v-for="(block,index) in gantt_data" >
        <chart-block
          :key="index"
          :style="blockStyle"
          :block="block"
          v-slot="{item}">
          <slot :item="item"></slot>
        </chart-block>
      </template>
    </div>
  </div>
</template>

<script>
import { handleDaySet, handleHourSet } from '@/lib/unit'
import ChartBlock from '@/components/BaseGanttComponents/chart-block'
export default {
  name: 'chart-container',
  components: { ChartBlock },
  props: ['chartWidth', 'chartHeight', 'baseSemi', 'blockHeight'],
  inject: ['gantt_data'],
  computed: {
    chartStyle () {
      return { // 甘特图真实的渲染长度
        width: `${this.chartWidth}px`,
        height: `${this.chartHeight}px`,
        position: 'relative'
      }
    },
    dateStyle () {
      return { // 日期条的渲染长度
        width: this.baseSemi * 2 * 24 > this.chartWidth ? this.chartWidth : this.baseSemi * 2 * 24 + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hourStyle () {
      return { // 时间条的渲染长度
        width: this.baseSemi * 2 + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hour () {
      const hours = Math.ceil(this.chartWidth / (this.baseSemi * 2))
      return handleHourSet(hours)
    },
    day () {
      const day = Math.ceil(this.chartWidth / (this.baseSemi * 2 * 24))
      const startTime = new Date()
      return handleDaySet(startTime, day)
    },
    blockStyle () {
      return {
        backgroundSize: `${this.baseSemi}px 100%`,
        height: `${this.blockHeight}px`
      }
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
    overflow: auto;
    max-width:800px;
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

</style>
