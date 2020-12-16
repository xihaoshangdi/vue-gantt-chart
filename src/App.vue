<template>
  <div>
    <router-view />
    <GanttChart
      :menu-group="menuGroup"
      :gantt-data="GanttData"
      :gantt-legend="GanttLegend"
      :gantt-current-time="GanttCurrentTime"
      :time-section="GanttTime"
      @handle-menu="handleMenu"
      @drag-drop="handleDrag"
    >
      <template #side-box="{item}">
        <Xxx :da="item" />
      </template>
      <template #container-box="{item}">
        <Yyy :da="item" />
      </template>
    </GanttChart>
  </div>
</template>
<script>

import GanttChart from '@/components/GanttChart'
import Xxx from '@/components/xxx'
import Yyy from '@/components/yyy'
import { mockData } from '@/lib/mock'
import dayjs from 'dayjs'
export default {
  components: { Yyy, Xxx, GanttChart },
  data () {
    return {
      GanttTime: {
        start: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
        end: dayjs(new Date()).add(3, 'day').format('YYYY/MM/DD HH:mm:ss')
      },
      GanttData: mockData(15),
      GanttCurrentTime: new Date().getTime(),
      GanttLegend: {
        正在飞行: '#B4D17D',
        延误: '#F28E2B',
        备降: '#A0CBE8',
        计划航班: '#7BB9FE',
        正常着陆: '#F2F2F2'
      },
      menuGroup: ['修改', '查看'],
      // 定时器
      marker: null
    }
  },
  mounted () {
    this.marker = setInterval(() => {
      this.GanttCurrentTime += 100000
    }, 1000)
    console.log()
  },
  beforeDestroy () {
    clearInterval(this.marker)
  },
  methods: {
    handleDrag (event) {
      console.log('event', event)
    },
    handleMenu (event) {
      console.log('event', event)
    }
  }
}
</script>

<style>

</style>
