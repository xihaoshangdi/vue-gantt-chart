<template>
  <div class="layout">
    <slot name="container-box"></slot>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
  .layout{
    width: 800px;
    height: 60vh;
    border: 1px solid red;
    overflow-x: auto;
  }
</style>
