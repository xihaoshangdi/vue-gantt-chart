<template>
  <div class="side">
    <template v-for="(item,index) in ganttData">
      <div
        :key="index"
        :class="{sticky:firstLineStick&&index===0}"
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
  inject: ['baseBlock'],
  props: {
    ganttData: {
      type: Array,
      default: () => []
    },
    firstLineStick: { // 首行粘性
      type: Boolean,
      default: true
    }
  },
  computed: {
    sideHeight () {
      return { lineHeight: `${this.baseBlock}px` }
    }
  },
  mounted () {
    const items = document.querySelectorAll('.side > div')
    const xxxx = Array.from(items).map(item => {
      const h = Math.round(Math.random() * 190) + 10
      const s = Math.round(Math.random() * 50) + 50
      const l = Math.round(Math.random() * 20) + 65
      return [h, s, l]
    })
    xxxx.sort((a, b) => { return a[0] - b[0] })
    for (let i = 0; i < xxxx.length; i++) {
      if (i % 2 !== 0) { // 最小
        xxxx.splice(i, 0, xxxx.pop())
      }
    }
    items.forEach((item, index) => {
      const [h, s, l] = xxxx[index]
      item.style.color = `hsl(${h}deg ${s}% ${l - 25}%)`
      item.firstChild.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`
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
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
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
