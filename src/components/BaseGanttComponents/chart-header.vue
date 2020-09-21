<template>
    <div class="header">
        <div class="side">
          <template v-for="(item,index) in headerData">
            <div :class="`side-`+index" :key="item">
              <div></div>
              <div>{{item}}</div>
            </div>
          </template>
        </div>
        <div class="container" >
          <div :style="{width:chartWidth+'px'}">
            <div>
              <template v-for="(item,index) in day">
                <div :style="dateStyle" :key="index">{{item}}</div>
              </template>
            </div>
            <div>
              <template v-for="(item,index) in hour">
                <div class="hour" :style="hourStyle" :key="index">{{item}}</div>
              </template>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { handleDaySet, handleHourSet } from '@/lib/GanttUnit'
export default {
  name: 'chart-header',
  props: ['headerData', 'showHeader', 'baseSemi', 'blockHeight', 'chartWidth'],
  inject: ['timeSectionDayJs'],
  computed: {
    dateStyle () {
      return { // 日期条的渲染长度
        width: this.baseSemi * 24 + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hourStyle () {
      return { // 时间条的渲染长度
        width: this.baseSemi + 'px',
        height: `${this.blockHeight}px`,
        lineHeight: this.blockHeight + 'px'
      }
    },
    hour () {
      const hours = this.timeSectionDayJs.end.diff(this.timeSectionDayJs.start, 'hour')
      return handleHourSet(hours)
    },
    day () {
      return handleDaySet(this.timeSectionDayJs)
    }
  }
}
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    flex-direction: row;
  }
  .side{
    min-width: 200px;
    & > div{
      display: flex;
      flex-direction: row;
    }
    & > div > div:first-child{
      height: 40px;
      width: 10px;
      display: inline-block;
      border-radius: 7px 0 0 7px;
    }
    & > div > div:nth-child(2){
      width: 100%;
      text-align: center;
      line-height: 40px;
    }
  }
  .side-0{
    & >div:first-child{
      background-color: rgba(123, 185, 254, 1);
    }
    & >div:nth-child(2){
      background-color: rgba(123, 185, 254, 0.6);
    }
  }
  .side-1{
    & >div:first-child{
      background-color: rgba(123, 185, 254, 1);
    }
    & >div:nth-child(2){
      background-color: rgba(123, 185, 254, 0.3);
    }
  }
  .container{
    overflow: auto;
    /*&::-webkit-scrollbar {*/
    /*  display: none;*/
    /*}*/
    &> div > div:nth-child(-n+2){
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-flow: nowrap;
      text-align: center;
      &:first-child{
        background-color: rgba(123,185,254,0.3);
      }
      &:nth-child(2){
        background-color: rgba(123,185,254,0.4);
      }
    }
  }

  .hour{
    background-image: url("../../assets/header.png");
  }
</style>
