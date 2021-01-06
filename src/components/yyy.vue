<template>
  <div class="yyy">
    <span>{{ da.workType }}</span>
    <span>{{ da.startAirport }}-{{ da.endAirport }}</span>
  </div>
</template>

<script>
export default {
  name: 'Yyy',
  props: ['da'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  //
  display: flex;
  flex-direction: column;
  //
  position: absolute;
  top: 30px;
  right: 0;
  min-width: 200px;
  //
  background-color: #FFF;
  padding: 12px;
  //
  cursor: pointer;
  z-index: 810;
  //
  color: #606266;
  font-size: 14px;
  line-height: 1.4;
  text-align:justify;
  word-break:normal;
  overflow-wrap: break-word;
  //
  border: 1px solid #EBEEF5;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
  .yyy{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: 13px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    text-align: center;
    // 用于防止被处理
    pointer-events: none;
  }
</style>
