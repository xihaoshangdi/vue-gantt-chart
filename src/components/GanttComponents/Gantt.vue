<template>
  <div class="gantt">
    <GanttHeader
      :chart-width="chartWidth"
      :duration="timeSectionDayJs"
    />
    <main class="main">
      <aside class="aside__container">
        <div class="aside__container__content">
          <template v-for="(info,index) in ganttData">
            <div :key="index" class="aside__container__content__xxx">{{ info.currentAirport }}</div>
          </template>
        </div>
      </aside>
      <article class="article__container">
        <div class="article__container__content" :style="{width:`${chartWidth}px`,height:`${chartHeight}px`}">
          <TimeLine
            :base-hour="50"
            :spend-time="spendTime"
          />
          <GanttBlock :gantt-data="ganttData" />
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import GanttHeader from '@/components/GanttComponents/GanttHeader'
import TimeLine from '@/components/GanttComponents/TimeLine'
import GanttBlock from '@/components/GanttComponents/GanttBlock'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)
import { handleDaySet } from '@/lib/GanttUnit'
export default {
  name: 'Gantt',
  components: { GanttBlock, TimeLine, GanttHeader },
  props: {
    timeSection: { // 时间区间
      type: Array,
      default: () => {
        return ['2020-12-17', '2020-12-20']
      }
    },
    ganttCurrentTime: { // 当前时间
      type: Date,
      default: () => {
        return new Date()
      }
    },
    ganttData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    timeSectionDayJs () { // 传入的甘特图时间区间转化为DayJs
      const [start, end] = this.timeSection
      return [dayjs(start), dayjs(end)]
    },
    spendTime () { // 计算当前时间与甘特图起始时间的差值
      const [start, end] = this.timeSectionDayJs
      let time
      if (dayjs(this.ganttCurrentTime).isBetween(start, end, null, '[')) {
        time = dayjs(dayjs(this.ganttCurrentTime)).diff(start, 'second') // 差值时间:秒
      } else {
        console.error('错误的时间')
        time = 0
      }
      return time
    },
    chartWidth () {
      const baseHour = 50
      const HourCount = handleDaySet(this.timeSectionDayJs).length * 24
      return baseHour * HourCount
    },
    chartHeight () {
      const baseHeight = 40
      const HourCount = this.ganttData.length
      return baseHeight * HourCount
    }
  },
  mounted () {
    const header = document.querySelector('.header__container')
    const side = document.querySelector('.aside__container')
    const container = document.querySelector('.article__container')
    const area = document.querySelector('.gantt')
    let flag = ''
    area.addEventListener('mouseenter', (event) => {
      const className = event.target.className
      if (className.includes('article__container__content')) flag = 'container'
      if (className.includes('aside__container__content')) flag = 'side'
    }, true)
    area.addEventListener('mouseleave', () => { flag = 'container' }, false)
    area.addEventListener('scroll', (event) => {
      if (flag === 'container') {
        side.scrollTop = event.target.scrollTop
        if (event.target.className === 'article__container') {
          header.scrollLeft = event.target.scrollLeft
        }
      }
      if (flag === 'side') container.scrollTop = event.target.scrollTop
    }, true)
  }

}
</script>

<style scoped lang="scss">
.gantt{
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}
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
}
.aside__container__content__xxx{
  height: 40px;
  outline: 1px solid red;
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
}
</style>
