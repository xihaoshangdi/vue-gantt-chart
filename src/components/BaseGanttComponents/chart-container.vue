<template>
    <div class="container" >
      <!--时间轴-->
      <time-line :baseSemi="baseSemi" :spendTime="spendTime" />
      <!--灰色遮罩-->
      <div class="mask" :style="mask"></div>
      <div :style="chartStyle">
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
</template>

<script>
import ChartBlock from '@/components/BaseGanttComponents/chart-block'
import TimeLine from '@/components/BaseGanttComponents/time-line'
export default {
  name: 'chart-container',
  components: { TimeLine, ChartBlock },
  props: ['chartStyle', 'baseSemi', 'blockHeight', 'spendTime'],
  inject: ['ganttData'],
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
      this.dragEvent.dragStart = event
    },
    onDrop (event) { // 传递拖拽到的dom和数据
      this.dragEvent.dragEnd = event
      this.$emit('drag-drop', this.dragEvent)
    },
    showMenu (event) {
      this.$emit('show-menu', event)
    },
    selectBlock (index) { // 选中功能
      this.activeIndex = index
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
  .mask{
    z-index: 800;
    background-color: rgba(0,100,100,0.1);
    height: 100%;
    position: absolute;
  }
  .active{
    background-color: rgba(0,0,0,0.1);
  }

</style>
