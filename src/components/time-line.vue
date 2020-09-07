<template>
    <div class="timeline" :style="linePos">
      <span>{{hour.toString().padStart(2,'0')}}:</span>
      <span>{{minute.toString().padStart(2,'0')}}:</span>
      <span>{{(seconds-minute*60).toString().padStart(2,'0')}}</span>
    </div>
</template>

<script>
export default {
  name: 'timeLine',
  data () {
    return {
      // 定时器
      marker: null,
      // 位置
      linePos: { left: 0 },
      // 秒
      seconds: 0
    }
  },
  mounted () {
    let count = 0
    this.marker = setInterval(() => {
      count += 25 / 30 / 60 // 25px代表30分钟
      this.linePos.left = count + 'px'
      this.seconds++
    }, 1000)
  },
  computed: {
    hour () {
      return Math.floor(this.minute / 60)
    },
    minute () {
      return Math.floor(this.seconds / 60)
    }
  },
  beforeDestroy () {
    clearInterval(this.marker)
  }
}
</script>

<style scoped>
  .timeline{
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: red;
    z-index: 10;
  }
</style>
