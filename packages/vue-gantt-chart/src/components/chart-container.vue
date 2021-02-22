<template>
  <div class="container">
    <!--时间轴-->
    <time-line :spend-time="spendTime" />
    <!--灰色遮罩-->
    <time-mask :spend-time="spendTime" />
    <div :style="blockStyle">
      <template v-for="(block,index) in ganttData">
        <chart-block
          :key="index"
          v-slot="{item}"
          :spend-time="spendTime"
          :class="{sticky:firstLineStick&&index===0}"
          :style="blockSelected(index)"
          :block="block"
          @click.native="handleHighlight(index)"
        >
          <slot :item="item" />
        </chart-block>
      </template>
    </div>
  </div>
</template>

<script>
import ChartBlock from './chart-block'
import TimeLine from './time-line'
import TimeMask from './time-mask'
import { handleDaySet } from '../unit/GanttUnit'
export default {
  name: 'ChartContainer',
  components: { TimeMask, TimeLine, ChartBlock },
  inject: ['baseHour', 'timeSectionDayJs'],
  props: {
    ganttData: {
      type: Array,
      default: () => []
    },
    spendTime: {
      type: Number,
      required: true
    },
    firstLineStick: { // 首行粘性
      type: Boolean,
      default: true
    }
  },
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
    blockStyle () {
      const { start, end } = this.timeSectionDayJs
      return { width: `${this.baseHour * handleDaySet(start, end).length * 24}px` }
    }
  },
  methods: {
    handleHighlight (index) {
      this.activeIndex = index
    },
    blockSelected (index) {
      return index === this.activeIndex ? { backgroundColor: `rgba(0,0,0,0.1)` } : {}
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
  overflow: overlay;
  /* 滚动条 */
  &::-webkit-scrollbar-thumb:horizontal { /*水平滚动条的样式*/
    width: 4px;
    background-color: #CCCCCC;
    -webkit-border-radius: 6px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #fff; /*滚动条的背景颜色*/
    -webkit-border-radius: 0; /*滚动条的圆角宽度*/
  }
  &::-webkit-scrollbar {
    width: 10px; /*滚动条的宽度*/
    height: 8px; /*滚动条的高度*/
  }
  &::-webkit-scrollbar-thumb:vertical { /*垂直滚动条的样式*/
    height: 50px;
    background-color: #999;
    -webkit-border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
  }
  &::-webkit-scrollbar-thumb:hover { /*滚动条的hover样式*/
    height: 50px;
    background-color: #9f9f9f;
    -webkit-border-radius: 4px;
  }
}
.sticky{
  position: sticky;
  top: 0;
  z-index: 105;
  background-color: white;
}
</style>
