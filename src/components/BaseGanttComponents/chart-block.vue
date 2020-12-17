<template>
  <div
    class="block"
    @dragover.stop="onDragOver"
    @drop.stop="onDrop"
  >
    <template v-for="(item,index) in block.childArrary">
      <div
        :key="index"
        :style="occupy(item)"
        class="bar"
        draggable="true"
        @contextmenu.capture.stop="onMenu(item,$event)"
        @dragstart.stop="onDragStart(item,$event)"
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
  inject: ['timeSectionDayJs'],
  props: ['block', 'baseSemi'],
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendHour = dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'hour')
      return { width: this.baseSemi / 60 * during + 'px', left: spendHour * this.baseSemi + 'px' }
    },
    onDragStart (bar, event) {
      this.$emit('drag', {
        data: bar,
        dom: event
      })
    },
    onDrop (event) {
      event.preventDefault()
      this.$emit('drop', {
        data: this.block,
        dom: event
      })
    },
    onDragOver (event) { // 结束位置是甘特条就允许结束拖拽
      if (event.target.className.includes('block')) event.preventDefault()
    },
    onMenu (bar, event) {
      event.preventDefault()
      this.$emit('menu', {
        data: bar,
        dom: event
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .block {
    height: 100%;
    background-image: url("../../assets/background.png");
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .bar{
    position: absolute;
    background-color: #7BB9FE;
    height: 26px;
  }
</style>
