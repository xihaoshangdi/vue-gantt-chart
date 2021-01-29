<template>
  <div
    v-show="floatState"
    class="floatView"
    :style="viewStyle"
  >
    <div v-html="htmlTmpl" />
  </div>
</template>

<script>
export default {
  name: 'FloatView',
  data () {
    return {
      //
      floatState: true,
      //
      htmlTmpl: '',
      layerEvent: null,
      triggerEvent: null,
      viewStyle: {}
    }
  },
  methods: {
    show (callback) {
      callback()
      const floatFn = () => { this.floatState = !this.floatState }
      this.triggerEvent.addEventListener('mousedown', floatFn)
      this.triggerEvent.addEventListener('mouseup', floatFn)
      this.triggerEvent.addEventListener('mouseleave', () => {
        document.body.removeChild(this.$el)
        this.triggerEvent.removeEventListener('mousedown', floatFn)
        this.triggerEvent.removeEventListener('mouseup', floatFn)
        this.$destroy()
      }, { once: true })
      this.$nextTick(() => {
        const layerRect = this.layerEvent.getBoundingClientRect()
        const targetRect = this.triggerEvent.getBoundingClientRect()
        const viewRect = this.$el.getBoundingClientRect()
        let viewLeft
        if (targetRect.right + viewRect.width > layerRect.right) { // 左侧
          viewLeft = targetRect.left - viewRect.width - 10
        } else { // 右侧
          viewLeft = targetRect.right + 10
        }
        let viewTop
        const beyondHeight = (viewRect.height - targetRect.height) / 2

        if (layerRect.bottom - targetRect.bottom < beyondHeight) {
          viewTop = targetRect.top - viewRect.height
        } else if (targetRect.top - layerRect.top < beyondHeight) {
          viewTop = targetRect.bottom
        } else {
          viewTop = targetRect.top - beyondHeight
        }
        this.viewStyle = { left: `${viewLeft}px`, top: `${viewTop}px` }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.floatView{
  box-sizing: content-box;
  position: absolute;
  z-index: 120;
  min-width: 200px;
  background-color: #FFF;
  //
  cursor: pointer;
  //
  color: #606266;
  font-size: 14px;
  line-height: 1.4;
  text-align:justify;
  word-break:break-all;
  //
  border: 1px solid #EBEEF5;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  & > *{
    padding: 0.5rem;
  }
}
</style>
