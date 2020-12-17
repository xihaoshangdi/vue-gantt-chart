<template>
  <header :style="HeaderStyle" class="header">
    <div class="header__side">
      <div>当前日期</div>
      <div>时间刻度</div>
    </div>
    <div class="header__container">
      <div class="header__container__content" :style="{width:`${chartWidth}px`}">
        <div class="day">
          <template v-for="day in Days">
            <div :key="day">{{ day }}</div>
          </template>
        </div>
        <div class="hour">
          <template v-for="(hour,index) in Hours">
            <div :key="index">{{ hour }}</div>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { handleDaySet, handleHourSet } from '@/lib/GanttUnit'

export default {
  name: 'GanttHeader',
  props: {
    height: {
      type: Number,
      default: 60
    },
    sideWidth: {
      type: Number,
      default: 150
    },
    duration: {
      type: Array,
      require: true
    },
    chartWidth: {
      type: Number,
      require: true
    }
  },
  computed: {
    HeaderStyle () {
      return {
        height: `${this.height}px`,
        display: 'grid',
        gridTemplateColumns: `${this.sideWidth}px 1fr`
      }
    },
    Days () { return handleDaySet(this.duration) },
    Hours () { return handleHourSet(this.Days.length * 24) }
  }
}
</script>

<style scoped lang="scss">
.header__side{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header__container{
  overflow: auto;
  //&::-webkit-scrollbar {
  //  display: none; /* Chrome Safari */
  //}
}
.header__container__content{
  height: 100%;
  display: flex;
  flex-direction: column;
  & > div{
    flex-grow: 1;
  }
}
.day{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgba(123,185,254,0.3);
  & > div{
    flex-grow: 1;
    text-align: center;
  }
}
.hour{
  display: flex;
  align-items: center;
  background-color: rgba(123,185,254,0.4);
  & > div{
    flex: 1;
    text-align: center;
    background-image: url("../../assets/header.png");
    background-repeat: no-repeat;
  }
}
</style>
