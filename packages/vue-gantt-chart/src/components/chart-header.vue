<template>
  <div class="header">
    <div class="header__side">
      <template v-for="item in headerData">
        <div :key="item" :style="headerSideHeight">
          <div>{{ item }}</div>
        </div>
      </template>
    </div>
    <div class="header__container">
      <div class="header__container__day" :style="headerContainerWidth">
        <template v-for="(item, index) in day">
          <div :key="index">{{ item }}</div>
        </template>
      </div>
      <div class="header__container__hours" :style="headerContainerWidth">
        <template v-for="(item, index) in hour">
          <div :key="index" class="header__container__hour">
            {{ item }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { handleDaySet, handleHourSet } from '../unit/GanttUnit'
export default {
  name: 'ChartHeader',
  inject: ['baseHour', 'baseBlock', 'timeSectionDayJs'],
  props: {
    headerData: {
      type: Array,
      require: true,
      default: () => ['日期', '时间']
    }
  },
  computed: {
    headerSideHeight () {
      return {
        lineHeight: `${this.baseBlock}px`
      }
    },
    headerContainerWidth () {
      return {
        width: `${this.baseHour * this.hour.length}px`,
        lineHeight: `${this.baseBlock}px`
      }
    },
    hour () {
      const hours = this.day.length * 24
      return handleHourSet(hours)
    },
    day () {
      const { start, end } = this.timeSectionDayJs
      return handleDaySet(start, end)
    }
  }
}
</script>

<style scoped lang="scss">
$header-background-color: rgba(123, 185, 254, 0.3);
$header-side-background-color: rgba(123, 185, 254);
$header-border-color: rgb(186, 202, 229);

.header {
  display: grid;
  grid-template-columns: 250px 1fr;
  .header__side > div {
    display: grid;
    grid-template-columns: 10px 1fr;
    &::before {
      width: 10px;
      top: 8px;
      border-radius: 7px 0 0 7px;
      content: "";
      background-color: $header-side-background-color;
      display: block;
    }
    & > div {
      width: 100%;
      text-align: center;
      background-color: $header-background-color;
      border-bottom: 1px solid $header-border-color;
      border-right: 1px solid $header-border-color;
    }
  }
  .header__container {
    background-color: $header-background-color;
    .header__container__day > div {
      border-bottom: 1px solid $header-border-color;
      border-left: 1px solid $header-border-color;
    }
    .header__container__hour {
      background-image: url("../assets/header.png");
    }
    & > div {
      display: flex;
      & > div {
        text-align: center;
        flex: 1;
        vertical-align: middle;
      }
    }
    overflow: auto;
    // 滚动条
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
