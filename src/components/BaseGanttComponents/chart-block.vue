<template>
  <div class="block">
    <template v-for="(item,index) in block.childArrary">
      <div :key="index" :data-id="item.id" class="bar" :style="occupy(item)" draggable="true">
        <slot :item="item"></slot>
      </div>
    </template>
  </div>

</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'chart-block',
  props: ['block', 'baseSemi', 'ganttTimeSectionDayJS', 'uniqueAttr'],
  methods: {
    occupy (bar) {
      const during = dayjs(bar.end).diff(dayjs(bar.start), 'minute')
      const spendHour = dayjs(dayjs(bar.start)).diff(this.ganttTimeSectionDayJS.start, 'hour')
      return { width: this.baseSemi / 60 * during + 'px', left: spendHour * this.baseSemi + 'px' }
    }
  }

}
</script>

<style scoped lang="scss">
  .block {
    position: relative;
    width: 100%;
    background-image: url("../../assets/background.png");
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
