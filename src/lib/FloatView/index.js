import Vue from 'vue'

import FloatView from '@/lib/FloatView/FloatView'

let layoutInstance
const LayoutInstance = Vue.extend(FloatView)

const initInstance = () => {
  layoutInstance = new LayoutInstance()
  document.body.appendChild(layoutInstance.$mount().$el)
}

export default options => {
  if (!layoutInstance) initInstance()
  Object.assign(layoutInstance, options)
  layoutInstance.show(vm => { layoutInstance = null })
  return layoutInstance
}
