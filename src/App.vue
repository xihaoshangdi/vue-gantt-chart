<template>
  <GanttChart
    :show-header="showHeader"
    @drag-drop="clickbtn"
    @show-menu="showMenu"
    :gantt-data="GanttData"
    :gantt-legend="GanttLegend"
    :gantt-current-time="GanttCurrentTime"
    :time-section="GanttTime"
  >
    <template v-slot:side-box="{item}">
      <Xxx :da="item"/>
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
      showHeader: true,
      headerData: ['a', 'b'],
      GanttTime: {
        start: '2020/08/25 00:00:00',
        end: '2020/08/28 22:00:00'
      },
      GanttSide: [
        {
          startAirport: '天津机场',
          endAirport: '北京机场'
        }
      ],
      GanttData: [
        {
          id: 0,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          unassigned: true,
          childArrary: [
            {
              id: 1,
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 1,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 3,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 5,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 7,
              start: '2020/08/25 21:00:00',
              end: '2020/08/25 22:00:00'
            },
            {
              id: 2,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 8,
              start: '2020/08/25 09:00:00',
              end: '2020/08/25 11:00:00'
            },
            {
              id: 3,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 9,
              start: '2020/08/25 13:00:00',
              end: '2020/08/25 15:00:00'
            }
          ]
        },
        {
          id: 0,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          unassigned: true,
          childArrary: [
            {
              id: 1,
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 1,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 3,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 5,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 7,
              start: '2020/08/25 21:00:00',
              end: '2020/08/25 22:00:00'
            },
            {
              id: 2,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 8,
              start: '2020/08/25 09:00:00',
              end: '2020/08/25 11:00:00'
            },
            {
              id: 3,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 9,
              start: '2020/08/25 13:00:00',
              end: '2020/08/25 15:00:00'
            }
          ]
        },
        {
          id: 0,
          currentAirort: '北京机场',
          number: 'B-1323',
          model: 'H125',
          unassigned: true,
          childArrary: [
            {
              id: 1,
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 1,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 3,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 5,
              start: '2020/08/25 22:00:00',
              end: '2020/08/25 23:00:00'
            },
            {
              id: 2,
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
              id: 1,
              filghtNumber: '4343',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 7,
              start: '2020/08/25 21:00:00',
              end: '2020/08/25 22:00:00'
            },
            {
              id: 2,
              filghtNumber: '121',
              startAirport: '天津机场',
              endAirport: '北京机场',
              workType: '农林喷洒',
              state: 8,
              start: '2020/08/25 09:00:00',
              end: '2020/08/25 11:00:00'
            },
            {
              id: 3,
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
      GanttCurrentTime: new Date('2020/08/25 00:00:00').getTime(),
      GanttLegend: {
        正在飞行: '#B4D17D',
        延误30分钟: '#FFE0E1',
        延误1小时: '#FDC6C7',
        延误2小时: '#FEADAF',
        延误4小时: '#FF8789',
        延误8小时: '#ED7274',
        延误: '#F28E2B',
        备降: '#A0CBE8',
        计划航班: '#7BB9FE',
        正常着陆: '#F2F2F2'
      },
      // 定时器
      marker: null
    }
  },
  mounted () {
    this.marker = setInterval(() => {
      this.GanttCurrentTime += 10000
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.marker)
  },
  methods: {
    clickbtn (event) {
      console.log(event)
    },
    showMenu (event) {
      console.log(event)
    }
  }
}
</script>

<style>

</style>
