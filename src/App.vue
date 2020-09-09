<template>
  <GanttChart  :gantt_data="GanttData" :gantt-current-time="GanttCurrentTime" :gantt-time-section="GanttTime">
    <template v-slot:side-box="{item}">
      <Xxx :da="item" @xxx="clickbtn"/>
    </template>
    <template v-slot:container-box="{item}">
      <Yyy :da="item"/>
    </template>
  </GanttChart>
</template>
<script>

import GanttChart from '@/components/GanttChart'
import Xxx from '@/components/xxx'
import Yyy from '@/components/yyy'

export default {
  components: { Yyy, Xxx, GanttChart },
  data () {
    return {
      GanttTime: {
        start: '2020/08/25 00:00:00',
        end: '2020/08/28 22:00:00'
      },
      GanttData: [
        {
          id: 0,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          unassigned: true,
          childArrary: [
            {
              childId: 1,
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 1,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              childId: 2,
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 2,
              start: '2020/08/25 08:00:00',
              end: '2020/08/25 10:00:00'
            }
          ]
        },
        {
          id: 1,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          childArrary: [
            {
              childId: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 3,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              childId: 2,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 4,
              start: '2020/08/25 10:00:00',
              end: '2020/08/25 12:00:00'
            }
          ]
        },
        {
          id: 2,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          childArrary: [
            {
              childId: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 5,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              childId: 2,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 6,
              start: '2020/08/25 08:00:00',
              end: '2020/08/25 10:00:00'
            }
          ]
        },
        {
          id: 3,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          childArrary: [
            {
              childId: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 7,
              start: '2020/08/25 21:00:00',
              end: '2020/08/25 22:00:00'
            },
            {
              childId: 2,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 8,
              start: '2020/08/25 09:00:00',
              end: '2020/08/25 11:00:00'
            },
            {
              childId: 3,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 9,
              start: '2020/08/25 13:00:00',
              end: '2020/08/25 15:00:00'
            }
          ]
        }
      ],
      GanttCurrentTime: { currentTime: 0 },
      // 定时器
      marker: null
    }
  },
  mounted () {
    this.marker = setInterval(() => {
      this.GanttCurrentTime.currentTime += Math.floor(Math.random(0, 1) * 10)
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.marker)
  },
  methods: {
    clickbtn (e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
