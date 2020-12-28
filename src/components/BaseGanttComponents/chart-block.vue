<template>
  <div class="block">
    <template v-for="(item,index) in block.childArrary">
      <div
        :key="index"
        :style="occupy(item)"
        class="bar"
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
    block: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendHour = dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'hour')
      return { width: this.baseHour * during / 60 + 'px', left: spendHour * this.baseHour + 'px' }
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
  }
</style>
