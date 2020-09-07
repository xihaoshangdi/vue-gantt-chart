<template>
  <div
    class="bar"
    draggable="true"
    style="background-color: #7BB9FE">
  </div>
</template>

<script>
export default {
  name: 'chart-bar',
  methods: {
    onDragStart (e) {
      console.log('开始拖拽', e)
    },
    onDragMove (e) {
      console.log('正在拖拽', e)
    },
    onDragEnd () {
      console.log('拖拽结束')
    },
    onDragEnter () {
      console.log('进入了新的DOM')
    }

  }
}
</script>

<style scoped lang="scss">
  .bar {
    width: 100px;
    height: 20px;
    margin-left: 28px;
  }
</style>
