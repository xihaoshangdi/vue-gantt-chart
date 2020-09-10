<template>
  <div class="block">
    <template v-for="(item,index) in block.childArrary" >
      <div :key="index" class="bar" :style="occupy(item)" draggable="true">
        <slot :item="item"></slot>
      </div>
    </template>
  </div>

</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'chart-block',
  props: ['block', 'baseSemi', 'ganttTimeSectionDayJS'],
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendHour = dayjs(dayjs(bar.start)).diff(this.ganttTimeSectionDayJS.start, 'hour')
      return { width: this.baseSemi / 30 * during + 'px', left: spendHour * this.baseSemi * 2 + 'px' }
    }
  }

}
</script>

<style scoped lang="scss">
  .block {
    position: relative;
    width: 100%;
    background-image: url("../../assets/yyy.png");
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .bar{
    position: absolute;
    background-color: #7BB9FE;
    height: 26px;
  }
</style>
