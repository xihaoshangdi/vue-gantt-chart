<template>
  <div class="chart-box">
    <div :style="chartStyle" >
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
      <time-line :baseSemi="baseSemi" :spendTime="spendTime" />
      <!--灰色遮罩-->
      <div class="mask" :style="mask"></div>
      <div class="container">
        <template v-for="(block,index) in ganttData">
          <chart-block
            :key="index"
            :class="{active: activeIndex === index}"
            :style="blockStyle"
            :baseSemi="baseSemi"
            :block="block"
            @click.native="selectBlock(index)"
            @drag="onDrag"
            @drop="onDrop"
            @menu="showMenu"
            v-slot="{item}">
            <slot :item="item"></slot>
          </chart-block>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { handleDaySet, handleHourSet } from '@/lib/GanttUnit'
import ChartBlock from '@/components/BaseGanttComponents/chart-block'
import TimeLine from '@/components/BaseGanttComponents/time-line'
export default {
  name: 'chart-container',
  components: { TimeLine, ChartBlock },
  props: ['chartHeight', 'baseSemi', 'blockHeight', 'spendTime'],
  inject: ['ganttData', 'ganttTimeSectionDayJS'],
  data () {
    return {
      activeIndex: -1,
      dragEvent: {
        dragStart: null,
        dragEnd: null
      }
    }
  },
  computed: {
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
    mask () {
      return { width: this.baseSemi / 60 * this.spendTime / 60 + 'px' }
    }
  },
  methods: {
    onDrag (event) { // 传递拖拽的dom节点和数据
      console.log('Drag', event)
      this.dragEvent.dragStart = event
    },
    onDrop (event) { // 传递拖拽到的dom和数据
      console.log('Drop', event)
      this.dragEvent.dragEnd = event
      this.$emit('drag-drop', this.dragEvent)
    },
    showMenu (event) {
      console.log('Menu', event)
      this.$emit('show-menu', event)
    },
    selectBlock (index) { // 选中功能
      this.activeIndex = index
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
  .mask{
    background-color: rgba(0,100,100,0.1);
    height: 100%;
    position: absolute;
  }
  .active{
    background-color: rgba(0,0,0,0.1);
  }

</style>
