<template>
  <GanttChart
    :gantt-data="GanttData"
    :gantt-current-time="GanttCurrentTime"
    :time-section="GanttTime"
    @rightClick.native="handleRightClick"
    @handleFloatView.native.capture="handleFloatView"
  >
    <template #side-box="{item}">
      <SideComponent :side-info="item" />
    </template>
    <template #container-box="{item}">
      <ContentComponent :content-info="item" />
    </template>
  </GanttChart>
</template>
<script>

import GanttChart from '@/components/GanttChart'
import SideComponent from '@/components/SideComponent'
import ContentComponent from '@/components/ContentComponent'
import { mockData } from '@/lib/mock'
import dayjs from 'dayjs'
export default {
  components: { ContentComponent, SideComponent, GanttChart },
  data () {
    return {
      GanttTime: {
        start: dayjs(new Date()).format('YYYY/MM/DD'),
        end: dayjs(new Date()).add(3, 'day').format('YYYY/MM/DD')
      },
      GanttData: mockData(15),
      GanttCurrentTime: new Date().getTime(),
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
    },
    handleFloatView (event) {
      const triggerEvent = event.target
      const { info } = event.detail
      const layerEvent = document.getElementById('gantt-container')
      const htmlTmpl = `<div>${info.startAirport}</div><div>${info.workType}</div><div>${info.endAirport}</div>`
      this.$FloatView({ layerEvent, triggerEvent, htmlTmpl })
    }
  }
}
</script>

<style>

</style>
