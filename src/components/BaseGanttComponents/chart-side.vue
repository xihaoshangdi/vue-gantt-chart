<template>
  <div class="side" :style="{maxHeight: chartHeight+'px'}">
      <template v-for="(item,index) in gantt_side">
          <div :key="index" :style="sideHeight" @contextmenu.capture.stop="onMenu(item,$event)">
            <div></div>
            <slot :item="item"></slot>
          </div>
      </template>
  </div>
</template>

<script>
export default {
  name: 'chart-side',
  props: ['blockHeight', 'chartHeight'],
  inject: ['ganttData'],
  computed: {
    gantt_side () {
      return this.ganttData
    },
    sideHeight () {
      return { height: this.blockHeight + 'px' }
    }
  },
  methods: {
    onMenu (bar, event) {
      event.preventDefault()
      this.$emit('show-menu', {
        data: bar,
        dom: event
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .side{
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 200px;
    &::-webkit-scrollbar {
      display: none;
    }
    & >div {
      display: flex;
      flex-direction: row;
    }
    & > div > div:first-child{
      height: 40px;
      width: 10px;
      display: inline-block;
      border-radius: 7px 0 0 7px;
    }
    & >div > div:nth-child(2){
      width: 100%;
      text-align: center;
      line-height: 40px;
    }
    & > div:first-child{
        & >div:first-child{
          background-color: rgba(241, 206, 99, 1);
        }
        & >div:nth-child(2){
          background-color: rgba(241, 206, 99, 0.2);
        }
      }
    & > div:nth-child(n+2){
        & >div:first-child{
          background-color: rgba(180, 209, 125, 1);
        }
        & >div:nth-child(2){
          background-color: rgba(180, 209, 125, 0.3);
        }
      }
    }
</style>
