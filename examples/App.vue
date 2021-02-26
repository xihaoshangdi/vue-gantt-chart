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
    <div class="operate__area">
      <div id="buffer__area" class="drag-wrapper">
        <span>可拖拽区域:</span>
      </div>
      <div class="operate">
        <div>首行是否粘性:<el-switch v-model="firstLineStick" active-color="#13ce66" inactive-color="#ff4949" /></div>
        <div>调节甘特图宽度:<el-slider v-model="ChartWidth" /></div>
        <div>调节甘特图内容高度:<el-slider v-model="ChartHeight" :min="0" :max="600" /></div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import Drag from '../packages/vue-gantt-chart/src/unit/drag'
import SideComponent from './components/SideComponent'
import ContentComponent from './components/ContentComponent'
import { mockData } from './lib/mock'
export default {
  components: { ContentComponent, SideComponent },
  data () {
    return {
      GanttTime: [dayjs().format('YYYY/MM/DD'), dayjs().add(3, 'day').format('YYYY/MM/DD')],
      GanttData: mockData(50),
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
    new Drag(document, true)
    const $testEle = document.querySelector('#buffer__area')
    const observerOptions = {
      childList: true,	// 观察目标子节点变换
      attributes: false,	// 观察属性变动
      subtree: true		// 观察后代节点
    }
    const nodeHash = {}
    const observer = new MutationObserver(function (mutationList) {
      mutationList.forEach(mutation => {
        if (mutation.addedNodes.length) { // 添加节点
          const obj = mutation.addedNodes[0]
          nodeHash[obj.id] = obj.style.left
          obj.style.position = 'relative'
          obj.style.left = '5px'
        }
        if (mutation.removedNodes.length) { // 移除节点
          const obj = mutation.removedNodes[0]
          obj.style.left = nodeHash[obj.id]
          obj.style.position = 'absolute'
        }
      })
    })
    observer.observe($testEle, observerOptions)
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
.operate__area{
  width: 90vw;
  position: absolute;
  left: 50%;
  bottom: 1em;
  transform: translate(-50%,0);
  border: 1px solid #EBEEF5;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  .operate > div{
    margin: 1em;
  }
}
#buffer__area{
  display: flex;
  margin: 5px;
  flex-direction: column;
  border: 3px dashed salmon;
}
</style>
