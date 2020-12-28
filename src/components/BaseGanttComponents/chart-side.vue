<template>
  <div class="side">
    <template v-for="(item,index) in ganttData">
      <div :key="index" :style="sideHeight" @contextmenu.prevent="rightClick(item,$event)">
        <slot :item="item" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ChartSide',
  props: {
    baseBlock: {
      type: Number,
      default: 40
    },
    ganttData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sideHeight () {
      return { lineHeight: `${this.baseBlock}px` }
    }
  },
  methods: {
    rightClick (data, event) {
      event.target.dispatchEvent(new CustomEvent('rightClick', {
        bubbles: true,
        detail: data
      }))
    }
  }
}
</script>

<style scoped lang="scss">
  .side{
    overflow: hidden;
    //&::-webkit-scrollbar {
    //  display: none;
    //}
    cursor: pointer;
    & > div{
      display: grid;
      grid-template-columns: 10px 1fr;
      &::before {
        width: 10px;
        top: 8px;
        border-radius: 7px 0 0 7px;
        content: "";
        background-color: rgba(241, 206, 99, 1);
        display: block;
      }
      &:first-child > div{
        background-color: rgba(241, 206, 99, 0.2);
      }
      &:nth-child(n+2) > div{
        background-color: rgba(180, 209, 125, 0.3);
      }
    }
  }
</style>
