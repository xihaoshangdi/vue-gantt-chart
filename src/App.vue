<template>
  <div>
    <Gantt
      :gantt-current-time="time"
      :gantt-data="ganttData"
    >
      <template />
    </Gantt>
    <!--    <GanttChart-->
    <!--      :menu-group="menuGroup"-->
    <!--      :gantt-data="GanttData"-->
    <!--      :gantt-legend="GanttLegend"-->
    <!--      :gantt-current-time="GanttCurrentTime"-->
    <!--      :time-section="GanttTime"-->
    <!--      @handle-menu="handleMenu"-->
    <!--      @drag-drop="handleDrag"-->
    <!--    >-->
    <!--      <template #side-box="{item}">-->
    <!--        <Xxx :da="item" />-->
    <!--      </template>-->
    <!--      <template #container-box="{item}">-->
    <!--        <Yyy :da="item" />-->
    <!--      </template>-->
    <!--    </GanttChart>-->
  </div>
</template>
<script>
import { mockData } from '@/lib/mock'
import Gantt from '@/components/GanttComponents/Gantt'
export default {
  components: { Gantt },
  data () {
    return {
      time: new Date(),
      ganttData: mockData(15)
    }
  },
  mounted () {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  }
}
</script>

<style>

</style>
