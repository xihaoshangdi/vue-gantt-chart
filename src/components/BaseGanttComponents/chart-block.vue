<template>
  <div class="block" @dragover="dragOver">
    <template v-for="(item,index) in block.childArrary">
      <div
        :key="index"
        :style="occupy(item)"
        :draggable="checkDrag(item)"
        class="bar"
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
  props: {
    baseHour: {
      type: Number,
      default: 50
    },
    timeSectionDayJs: {
      type: Object,
      default: () => {}
    },
    spendTime: {
      type: Number,
      default: 0
    },
    block: {
      type: Object,
      default: () => {}
    }
  },
  created () {

  },
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendHour = dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'hour')
      return { width: this.baseHour * during / 60 + 'px', left: spendHour * this.baseHour + 'px' }
    },
    checkDrag (bar) {
      return dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'hour') - this.spendTime / 3600 > 0
    },
    dragOver (event) {
      if (event.target.className === 'block') event.preventDefault()
    },
    rightClick (data, event) {
      event.target.dispatchEvent(new CustomEvent('rightClick', {
        bubbles: true,
        detail: data
      }))
    }
  }
}
</script>

<style scoped lang="scss">
  .block {
    height: 40px;
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
    user-select: none;
  }
</style>
