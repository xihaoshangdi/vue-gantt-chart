<template>
  <div class="box">
    <div class="container" :style="{width:`${ChartWidth}%`}">
      <GanttChart
        :gantt-data="GanttData"
        :gantt-current-time="GanttCurrentTime"
        :first-line-stick="firstLineStick"
        :time-section="GanttTime"
        :chart-max-height="ChartHeight"
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
    <div class="operate">
      <div>首行是否粘性:<el-switch v-model="firstLineStick" active-color="#13ce66" inactive-color="#ff4949" /></div>
      <div>调节甘特图宽度:<el-slider v-model="ChartWidth" /></div>
      <div>调节甘特图内容高度:<el-slider v-model="ChartHeight" :min="0" :max="600" /></div>
    </div>
  </div>
</template>
<script>

import SideComponent from './components/SideComponent'
import ContentComponent from './components/ContentComponent'
import { mockData } from './lib/mock'
export default {
  components: { ContentComponent, SideComponent },
  data () {
    return {
      GanttTime: ['2021/02/21', '2021/02/24'],
      GanttData: mockData(60),
      GanttCurrentTime: new Date().getTime(),
      floatRender: (info) => `<div>${info.startAirport}</div><div>${info.workType}</div><div>${info.endAirport}</div>`,
      // 定时器
      marker: null,
      // 测试
      firstLineStick: true,
      ChartWidth: 80,
      ChartHeight: 600
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
      const info = event.detail
      this.$notify.info({
        title: '消息',
        dangerouslyUseHTMLString: true,
        message: `
                <div>
                <strong>起飞机场</strong>:  ${info.startAirport}
                </div>
                <div>
                <strong>任务类型</strong>:  ${info.workType}</div>
                <div>
                <strong>降落机场</strong>:  ${info.endAirport}
                </div>`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.operate{
  position: absolute;
  bottom: 30px;
  margin-top: 5vh;
  border: 1px solid #EBEEF5;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 800px;
  & > div{
    margin: 10px 15px;
  }
}
</style>
