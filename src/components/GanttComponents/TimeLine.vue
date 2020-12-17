<template>
  <div class="timeline">
    <div class="timeline__box" :style="{height:lineHeight,left:linePos}">
      <div class="timeline__box__text">
        <span>{{ hour.toString().padStart(2,'0') }}:</span>
        <span>{{ minute.toString().padStart(2,'0') }}:</span>
        <span>{{ second.toString().padStart(2,'0') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    spendTime: {
      type: Number,
      default: 0,
      require: true
    },
    baseHour: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      lineHeight: 0
    }
  },
  computed: {
    hour () {
      return Math.floor(this.spendTime / 3600)
    },
    minute () {
      return Math.floor((this.spendTime / 60) % 60)
    },
    second () {
      return this.spendTime % 60
    },
    linePos () {
      return this.baseHour * this.spendTime / 3600 + 'px'
    }
  },
  mounted () {
    this.lineHeight = this.$parent.$el.clientHeight + 'px'
  }

}
</script>

<style lang="scss" scoped>
.timeline{
  z-index: 800;
  position: sticky;
  top: 0;
}
.timeline__box{
  position: absolute;
  width: 2px;
  background-color: rgba(255, 0, 0, 0.4);
}
.timeline__box__text{
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
</style>
