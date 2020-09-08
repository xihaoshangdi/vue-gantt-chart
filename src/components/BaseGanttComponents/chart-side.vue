<template>
  <div class="gantt-side" >
    <div>
      <span>当前航班</span>
    </div>
    <div>
      <span>时间刻度</span>
    </div>
    <div v-for="(item,index) in gantt_data" :key="index">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chart-side',
  inject: ['gantt_data']
}
</script>

<style scoped lang="scss">
  .gantt-side{
    width: 150px;
  & > div {
      background-color: rgba(180, 209, 125, 0.6);
      border-top: 1px solid white;
      width: 150px;
      height: 40px;
      border-radius: 7px 0px 0px 7px;
    }
  }
</style>
