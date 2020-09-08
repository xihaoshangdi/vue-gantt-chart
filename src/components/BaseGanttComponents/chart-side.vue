<template>
  <div class="gantt-side" >
    <template v-for="(item,index) in gantt_side">
      <template v-if="typeof item ==='string'">
        <div :key="item">
          <div></div>
          <div>{{item}}</div>
        </div>
      </template>
      <template v-else>
        <div :key="index">
          <div></div>
          <slot :item="item"></slot>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'chart-side',
  inject: ['gantt_data'],
  computed: {
    gantt_side () {
      const side = ['当前航班', '时间刻度']
      return side.concat(this.gantt_data)
    }
  }
}
</script>

<style scoped lang="scss">
  .gantt-side{
    width: 160px;
    & > div {
      display: flex;
      flex-direction: row;
      & > div:first-child{
        height: 40px;
        width: 10px;
        display: inline-block;
        border-radius: 7px 0 0 7px;
      }
      & > div:nth-child(2){
        width: 100%;
        text-align: center;
        line-height: 40px;
      }
      &:first-child{
        & >div:first-child{
          background-color: rgba(123, 185, 254, 1);
        }
        & >div:nth-child(2){
          background-color: rgba(123, 185, 254, 0.3);
        }
      }
      &:nth-child(2){
        & >div:first-child{
          background-color: rgba(123, 185, 254, 1);
        }
        & >div:nth-child(2){
          background-color: rgba(123, 185, 254, 0.2);
        }
      }
      &:nth-child(3){
        & >div:first-child{
          background-color: rgba(241, 206, 99, 1);
        }
        & >div:nth-child(2){
          background-color: rgba(241, 206, 99, 0.2);
        }
      }
      &:nth-child(n+4){
        & >div:first-child{
          background-color: rgba(180, 209, 125, 1);
        }
        & >div:nth-child(2){
          background-color: rgba(180, 209, 125, 0.2);
        }
      }
    }
  }
</style>
