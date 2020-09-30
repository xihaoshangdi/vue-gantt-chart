<template>
  <div v-show="menuStatus" class="card" :style="position">
    <template v-for="item in menuGroup">
      <div :key="item" @click="handleEvent(item)">{{ item }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ChartMenu',
  props: {
    menuStatus: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => { return null }
    },
    menuGroup: {
      type: Array,
      default: () => { return [] }
    }
  },

  computed: {
    position () {
      const dom = this.info ? this.info.dom : {}
      return {
        left: dom.clientX + 'px',
        top: dom.clientY + 'px'
      }
    }
  },
  methods: {
    handleEvent (type) {
      this.$emit('handle-menu', {
        ...this.info,
        type: type
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    position: absolute;
    text-align: center;
    background: #fff;
    color: black;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 #ccc;
    font-family: PingFang-SC;
    font-size: 14px;
    z-index: 200;
    & > div{
      padding: 6px 15px 6px 15px;
      cursor: pointer;
    }
    & > div:hover{
      background-color: rgba(0,0,0,0.1);
    }
  }
</style>
