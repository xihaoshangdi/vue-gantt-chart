<template>
  <div class="block">
    <template v-for="(item,index) in block" >
      <div :key="index" class="bar" draggable="true">
        <slot :item="item"></slot>
      </div>
    </template>
  </div>

</template>

<script>
export default {
  name: 'chart-block',
  props: ['block']

}
</script>

<style scoped lang="scss">
  .block {
    width: 100%;
    background-image: url("../../assets/background.png");
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .bar{
    background-color: #7BB9FE;
  }
</style>
