<template>
  <div class="side">
    <template v-for="(item,index) in ganttData">
      <div
        :key="index"
        :class="{sticky:index===0}"
        :style="sideHeight"
        @contextmenu.prevent="rightClick(item,$event)"
      >
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
@function xxxx() {
  @return random()*random();
}
  .side{
    overflow: hidden;
    //&::-webkit-scrollbar {
    //  display: none;
    //}
    cursor: pointer;
    user-select: none;
    & > div{
      display: grid;
      grid-template-columns: 10px 1fr;
      &::before {
        width: 10px;
        top: 8px;
        border-radius: 7px 0 0 7px;
        content: "";
        background-color: xxxx();
        display: block;
      };
      &:nth-child(1n+0)::before{
        background-color: rgba(floor(random()*250),floor(random()*250),floor(random()*250),0.8);
      }
      &:nth-child(1n+1)::before{
        background-color: rgba(floor(random()*255),floor(random()*255),floor(random()*255),0.8);
      }
      &:nth-child(n+2) > div{
        background-color: rgba(180, 209, 125, 0.3);
      }
      &:first-child > div{
        background-color:#f3de9c;
      }
    }
  }
  .sticky{
    position: sticky;
    top: 0;
    z-index: 105;
  }
</style>
