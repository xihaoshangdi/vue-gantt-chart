class Drag {
  #element // Drag容器对象
  #cloneObj // CloneDrag 对象
  #dragObj // 原生Drag对象
  constructor (element, capture = false) {
    if (!element) return null
    this.#element = element
    this.init(capture)
  }
  init (capture) {
    this.#element.addEventListener('dragstart', (event) => { // 监听Start
      this.#dragObj = event.target
      this.#cloneObj = event.target.cloneNode(true)
      const img = new Image()
      img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E`
      event.dataTransfer.setDragImage(img, 0, 0)
      this.#cloneObj.style.position = `absolute`
      this.#cloneObj.style.left = '0'
      this.#cloneObj.style.top = '0'
      this.#cloneObj.style.pointerEvents = 'none'
      this.#cloneObj.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`
      document.body.appendChild(this.#cloneObj)
      if (capture) event.stopPropagation()
    }, capture)
    this.#element.addEventListener('drag', (event) => { // 监听drag移动
      this.#cloneObj.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`
      this.#dragObj.style.display = 'none'
      if (capture) event.stopPropagation()
    }, capture)
    this.#element.addEventListener('dragover', (event) => {
      const { path } = event
      const wrapper = Array.from(path).find(item => item.classList && Array.from(item.classList).includes('drag-wrapper'))
      if (wrapper) event.preventDefault()
      if (capture) event.stopPropagation()
    }, capture)
    this.#element.addEventListener('drop', (event) => {
      const { path } = event
      const wrapper = Array.from(path).find(item => item.classList && Array.from(item.classList).includes('drag-wrapper'))
      if (wrapper) {
        this.#dragObj.parentNode.removeChild(this.#dragObj)
        wrapper.appendChild(this.#dragObj)
      }
      if (capture) event.stopPropagation()
    }, capture)
    this.#element.addEventListener('dragend', (event) => {
      document.body.removeChild(this.#cloneObj)
      this.#cloneObj = null
      this.#dragObj.style.display = 'block'
      if (capture) event.stopPropagation()
    }, capture)
  }
}
export default Drag

