import dayjs from 'dayjs'
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)
/**
 * @description 得到一个小时集合
 * @param {Number} count
 * @return  {Array}
 * @author WuJiaPing
 * @date 2020/9/4
 * @example
 *
 */
export const handleHourSet = (count) => {
  const data = []
  let character = 0
  while (count >= 1) {
    data.push(character)
    character++
    count--
    if (character === 24) character = 0
  }
  return data
}
/**
 * @description 得到一个天数集合
 * @param {Array} duration [dayjs(start),dayjs(end)]
 * @return  {Array}
 * @author WuJiaPing
 * @date 2020/9/4
 * @example
 *
 */
export const handleDaySet = (duration) => {
  const dataList = []
  const [start, end] = duration
  let current = start
  while (current.isSameOrBefore(end, 'day')) {
    dataList.push(current.format('YYYY-M-D'))
    current = current.add(1, 'day')
  }
  return dataList
}
