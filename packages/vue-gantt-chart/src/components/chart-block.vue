<template>
  <div class="block drag-wrapper">
    <template v-for="(item,index) in block.childArray">
      <div
        :id="item.id"
        :key="index"
        :style="occupy(item)"
        :draggable="checkDrag(item)"
        class="bar"
        @mouseenter.capture="handleFloatView(item,$event)"
        @contextmenu.prevent="rightClick(item,$event)"
      >
        <slot :item="item" />
      </div>
    </template>
  </div>

</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'ChartBlock',
  inject: ['baseHour', 'timeSectionDayJs'],
  props: {
    block: {
      type: Object,
      default: () => {}
    },
    spendTime: {
      type: Number,
      required: true
    }
  },
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendMinute = dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'minute')
      const color = this.spendTime / 60 > spendMinute ? '#F56C6C' : '#67C23A'
      return {
        width: this.baseHour * during / 60 + 'px',
        left: spendMinute / 60 * this.baseHour + 'px',
        backgroundColor: color
      }
    },
    checkDrag (bar) {
      return dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'hour') - this.spendTime / 3600 > 0
    },
    rightClick (data, event) {
      event.target.dispatchEvent(new CustomEvent('rightClick', {
        bubbles: true,
        detail: data
      }))
    },
    handleFloatView (data, event) {
      event.target.dispatchEvent(new CustomEvent('handleFloatView', {
        bubbles: true,
        detail: { info: data }
      }))
    }
  }
}
</script>

<style scoped lang="scss">
  .block {
    height: 40px;
    background-image: url("../assets/background.png");
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  }
  .bar{
    color: #303133;
    position: absolute;
    height: 26px;
    user-select: none;
  }
</style>
