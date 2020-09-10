<template>
    <div class="timeline" :style="linePos">
      <div>
        <span>{{hour.toString().padStart(2,'0')}}:</span>
        <span>{{minute.toString().padStart(2,'0')}}:</span>
        <span>{{second.toString().padStart(2,'0')}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'timeLine',
  props: ['baseSemi'],
  inject: ['ganttCurrentTime'],

  computed: {
    currentTime () {
      return this.ganttCurrentTime.currentTime
    },
    hour () {
      return Math.floor(this.currentTime / 3600)
    },
    minute () {
      return Math.floor((this.currentTime / 60) % 60)
    },
    second () {
      return this.currentTime % 60
    },
    linePos () {
      return { left: this.baseSemi / 60 * this.currentTime / 60 + 'px' }
    }
  }

}
</script>

<style lang="scss" scoped>
  .timeline{
    position: absolute;
    height: 320px;
    width: 2px;
    background-color: rgba(255, 0, 0, 0.4);
    z-index: 10;
    & > div{
      margin-left: 2px;
      user-select: none;
      font-size: 0.7rem;
      color: #FFFFFF;
      & > span{
        background-color:rgba(255, 0, 0, 0.4);
        padding-right: 1px;
        padding-left: 1px;
      }
    }
  }
</style>
