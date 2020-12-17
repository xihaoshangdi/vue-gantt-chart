<template>
  <div class="line-box">
    <div class="timeline" :style="{height:lineHeight,left:linePos}">
      <div>
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
  props: ['baseSemi', 'spendTime'],
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
      return this.baseSemi / 60 * this.spendTime / 60 + 'px'
    }
  },
  mounted () {
    this.lineHeight = this.$parent.$el.clientHeight + 'px'
  }

}
</script>

<style lang="scss" scoped>
  .line-box{
    z-index: 800;
    position: sticky;
    top: 0;
  }
  .timeline{
    position: absolute;
    width: 2px;
    background-color: rgba(255, 0, 0, 0.4);
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
