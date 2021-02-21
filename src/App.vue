<template>
  <div class="container">
    <GanttChart
      :gantt-data="GanttData"
      :gantt-current-time="GanttCurrentTime"
      :first-line-stick="true"
      :time-section="GanttTime"
      :float-view-render-fn="floatRender"
      @rightClick.native="handleRightClick"
    >
      <template #side-box="{item}">
        <SideComponent :side-info="item" />
      </template>
      <template #container-box="{item}">
        <ContentComponent :content-info="item" />
      </template>
    </GanttChart>
  </div>
</template>
<script>

import GanttChart from '@/components/GanttChart'
import SideComponent from '@/components/SideComponent'
import ContentComponent from '@/components/ContentComponent'
import { mockData } from '@/lib/mock'
export default {
  components: { ContentComponent, SideComponent, GanttChart },
  data () {
    return {
      GanttTime: ['2021/02/21', '2021/02/24'],
      GanttData: mockData(25),
      GanttCurrentTime: new Date().getTime(),
      floatRender: (info) => `<div class="xxx">${info.startAirport}</div><div>${info.workType}</div><div>${info.endAirport}</div>`,
      // 定时器
      marker: null
    }
  },
  mounted () {
    this.marker = setInterval(() => {
      this.GanttCurrentTime += 100000
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.marker)
  },
  methods: {
    handleRightClick (event) {
      console.log('event', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 800px;
  background-color: rgba(0,0,0,0.1);
}
</style>
