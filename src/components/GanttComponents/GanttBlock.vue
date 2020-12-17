<template>
  <div class="block">
    <template v-for="(item,index) in ganttData.childArrary">
      <div
        :key="index"
        :style="occupy(item)"
      >
        <slot :item="item" />
      </div>
    </template>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'GanttBlock',
  props: {
    ganttData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendHour = dayjs(dayjs(bar.start)).diff(this.timeSectionDayJs.start, 'hour')
      return { width: this.baseSemi / 60 * during + 'px', left: spendHour * this.baseSemi + 'px' }
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
