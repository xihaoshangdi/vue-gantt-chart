<template>
  <GanttChart
    :gantt-data="GanttData"
    :gantt-current-time="GanttCurrentTime"
    :time-section="GanttTime"
    @rightClick.native="handleDrag"
  >
    <template #side-box="{item}">
      <Xxx :da="item" />
    </template>
    <template #container-box="{item}">
      <Yyy :da="item" />
    </template>
  </GanttChart>
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
    handleDrag (event) {
      console.log('event', event)
    }
  }
}
</script>

<style>

</style>
