<template>
  <div :style="chartStyle" class="chart">
    <time-line/>
    <div class="header">
      <div class="headline">
        <template v-for="(item,index) in day">
          <div :style="dateStyle" :key="index">{{item}}</div>
        </template>
      </div>
      <div class="headline">
        <template v-for="(item,index) in hour">
          <div :style="hourStyle" :key="index">{{item}}</div>
        </template>
      </div>
    </div>
    <div
      @dragstart="onDragStart"
      @dragover="onDragOver"
      @drop="ondrop">
      <div :style="blockStyle" class="block">
        <chart-bar/>
      </div>
      <div :style="blockStyle" class="block"></div>
    </div>
  </div>
</template>

<script>
import { handleDaySet, handleHourSet } from '@/lib/unit'
import TimeLine from '@/components/time-line'
import ChartBar from '@/components/chart-bar'

export default {
  name: 'chart-container',
  components: { ChartBar, TimeLine },
  data () {
    return {
      // 半小时的基准宽度
      baseSemi: 25,
      // 中心甘特图长宽
      chartWidth: 5000,
      chartHeight: 400,
      // 数据条甘特图宽
      blockHeight: 40,
      // 拖拽对象
      dragEvent: null
    }
  },
  computed: {
    chartStyle () {
      return {
        width: this.chartWidth + 'px',
        height: this.chartHeight + 'px'
      }
    },
    blockStyle () {
      return {
        backgroundSize: `${this.baseSemi}px 100%`,
        height: `${this.blockHeight}px`
      }
    },
    dateStyle () {
      return {
        width: this.baseSemi * 2 * 24 > this.chartWidth ? this.chartWidth : this.baseSemi * 2 * 24 + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hourStyle () {
      return {
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
    }
  },
  methods: {
    onDragStart (event) {
      console.log('开始拖拽', event)
      this.dragEvent = event.target
    },
    ondrop (event) {
      event.preventDefault()
      console.log('拖拽到:', event)
      console.log(this.dragEvent)
      this.dragEvent.parentNode.removeChild(this.dragEvent)
      event.target.appendChild(this.dragEvent)
    },
    onDragOver (event) {
      event.preventDefault()
    }
  }
}
</script>

<style scoped lang="scss">
  .chart{
    position:relative
  }
  .headline {
    width: 100%;
    background-color: #7BB9FE;
    opacity: 0.7;
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;

    text-align: center;
    margin-bottom: 1px;
  }
  .block {
    width: 100%;
    background-image: url("../assets/background.png");

    display: flex;
    flex-direction: row;
    align-items: center;
  }

</style>
