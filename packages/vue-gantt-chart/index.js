import GanttChart from './src/gantt-chart.vue'

// 为组件提供 install 安装方法，供按需引入
GanttChart.install = function (Vue) {
  Vue.component(GanttChart.name, GanttChart)
}

// 默认导出组件
export default GanttChart

