<template>
  <div
    v-show="floatState"
    class="floatView"
    :style="viewStyle"
  >
    <div v-html="htmlTemplate" />
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
      htmlTemplate: '',
      layerRect: null,
      targetRect: null,
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
        const viewRect = this.$el.getBoundingClientRect()
        let viewLeft
        if (this.targetRect.right + viewRect.width > this.layerRect.right) { // 左侧
          viewLeft = this.targetRect.left - viewRect.width - 10
        } else { // 右侧
          viewLeft = this.targetRect.right + 10
        }
        let viewTop
        const beyondHeight = (viewRect.height - this.targetRect.height) / 2

        if (this.layerRect.bottom - this.targetRect.bottom < beyondHeight) {
          viewTop = this.targetRect.top - viewRect.height
        } else if (this.targetRect.top - this.layerRect.top < beyondHeight) {
          viewTop = this.targetRect.bottom
        } else {
          viewTop = this.targetRect.top - beyondHeight
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
    z-index: 150;
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
