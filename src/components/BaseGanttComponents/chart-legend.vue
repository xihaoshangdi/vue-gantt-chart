<template>
  <div class="legend-layout">
    <div class="icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <span>?</span>
      <div v-if="infoStatus" class="card">
        <template v-for="(value,key) in ganttLegend">
          <div :key="key" class="bar">
            <div class="cardColor" :style="{background:value}" />
            <div>{{ key }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartLegend',
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
  .legend-layout{
    box-sizing: border-box;
    margin-bottom: 5px;
    cursor: pointer;
    background: #F9F7F9;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .icon{
    width:21px;
    height:21px;
    background:#bacae5;
    border-radius:50%;
    text-align: center;
    margin-right: 5px;
  }
  .card{
    position: absolute;
    top: 25px;
    right: 25px;
    background-color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 200;
  }
  .bar{
    display: flex;
    height: 20px;
    padding: 3px 0;
    font-size: 14px;
    color: #50668B;
    align-items: center;
  }
  .cardColor {
    width: 30px;
    height: 10px;
    line-height: 10px;
    margin-right: 20px;
  }

</style>
