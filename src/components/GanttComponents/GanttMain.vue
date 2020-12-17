<template>
  <main class="main">
    <aside class="aside__container">
      <div class="aside__container__content">
        <div>{{ ganttData }}</div>
      </div>
    </aside>
    <article class="article__container">
      <div class="article__container__content" :style="{width:`${chartWidth}px`}">
        <TimeLine
          :base-hour="baseHour"
          :spend-time="spendTime"
        />
        <GanttBlock :gantt-data="ganttData" />
      </div>
    </article>
  </main>
</template>

<script>
import TimeLine from '@/components/GanttComponents/TimeLine'
import GanttBlock from '@/components/GanttComponents/GanttBlock'
export default {
  name: 'GanttMain',
  components: { GanttBlock, TimeLine },
  props: {
    chartWidth: {
      type: Number,
      require: true
    },
    spendTime: {
      type: Number,
      require: true
    },
    baseHour: {
      type: Number,
      default: 50
    },
    ganttData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: -1,
      dragEvent: {
        dragStart: null,
        dragEnd: null
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.main{
  display: grid;
  grid-template-columns: 150px 1fr;
}
.aside__container{
  height: 540px;//动态   ganttHeight-headerHeight
  overflow: auto;
  background: #9f9f9f;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
.aside__container__content{
  height: 2000px;
}
.article__container{
  height: 540px;//动态   ganttHeight-headerHeight
  overflow: auto;
  /* 滚动条 */
  &::-webkit-scrollbar-thumb:horizontal { /*水平滚动条的样式*/
    width: 4px;
    background-color: #CCCCCC;
    -webkit-border-radius: 6px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #fff; /*滚动条的背景颜色*/
    -webkit-border-radius: 0; /*滚动条的圆角宽度*/
  }
  &::-webkit-scrollbar {
    width: 10px; /*滚动条的宽度*/
    height: 8px; /*滚动条的高度*/
  }
  &::-webkit-scrollbar-thumb:vertical { /*垂直滚动条的样式*/
    height: 50px;
    background-color: #999;
    -webkit-border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
  }
  &::-webkit-scrollbar-thumb:hover { /*滚动条的hover样式*/
    height: 50px;
    background-color: #9f9f9f;
    -webkit-border-radius: 4px;
  }
}
.article__container__content{
  position: relative;
  height: 2000px;
}
</style>
