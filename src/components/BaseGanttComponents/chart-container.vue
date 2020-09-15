<template>
  <div class="container">
    <div :style="chartStyle">
      <!--时间轴-->
      <time-line :baseSemi="baseSemi" :spendTime="spendTime" />
      <!--灰色遮罩-->
      <div class="mask" :style="mask"></div>
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
  .container{
    position: relative;
    height: 400px;
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
