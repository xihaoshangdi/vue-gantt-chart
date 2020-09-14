<template>
  <div class="tips">
    <div @mouseenter="onMouseEnter" class="tipsIcon">?</div>
    <div v-if="infoStatus" class="card" @mouseleave="onMouseLeave">
      <template v-for="(value,key) in ganttLegend">
        <div :key="key" class="row">
          <div class="cardColor" :style={background:value}></div>
          <div>{{key}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chart-legend',
  props: ['gantt-legend'],
  data () {
    return {
      infoStatus: false
    }
  },
  methods: {
    onMouseEnter () {
      this.infoStatus = true
    },
    onMouseLeave () {
      this.infoStatus = false
    }
  }
}
</script>

<style scoped lang="scss">
  .tips{
    cursor: pointer;
    margin: 10px;
    background: #F9F7F9;
    display: flex;
    justify-content: flex-end;
    position: relative;
    .tipsIcon{
      width:21px;
      height:21px;
      background:rgba(186,202,229,1);
      border-radius:50%;
      text-align: center;
    }
    .card{
      position: absolute;
      top: 30px;
      right: 50px;
      background-color: #ffffff;
      border: 1px solid #f0f9eb;
      padding: 20px;
    }
    .row {
      display: flex;
      height: 20px;
      padding: 3px 0;
      font-size: 14px;
      color: #50668B;
      align-items: center;
      font-family: PingFang-SC;
    }
    .cardColor {
      width: 30px;
      height: 10px;
      line-height: 10px;
      margin-right: 20px;
    }
  }
</style>
