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
  mounted () {
    const items = document.querySelectorAll('.side > div')
    items.forEach(item => {
      const r = Math.round(Math.random() * 127) + 80
      const g = Math.round(Math.random() * 127) + 80
      const b = Math.round(Math.random() * 127) + 80
      item.style.color = `rgb(${r},${g},${b})`
      item.firstChild.style.backgroundColor = `rgba(${r + 47},${g + 47},${b + 47},${Math.random() + 0.3})`
    })
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
    user-select: none;
    & > div{
      display: grid;
      grid-template-columns: 10px 1fr;
      &::before {
        color: inherit;
        width: 10px;
        top: 8px;
        border-radius: 7px 0 0 7px;
        content: "";
        background-color: currentColor;
        display: block;
      };
    }
  }
  .sticky{
    position: sticky;
    top: 0;
    z-index: 105;
  }
</style>
