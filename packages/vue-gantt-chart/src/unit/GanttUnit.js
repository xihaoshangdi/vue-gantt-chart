import dayjs from 'dayjs'
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)
/**
 * @description 得到一个小时集合
 * @param {Number} count
 * @return  {Array}
 * @author WuJiaPing
 * @date 2020/9/4
 * @examples
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
 * @param {Object} start
 * @param {Object} end
 * @return  {Array}
 * @author WuJiaPing
 * @date 2020/9/4
 * @examples
 *
 */
export const handleDaySet = (start, end) => {
  const dataList = []
  let startTime = start.startOf('day')
  const endTime = end.startOf('day')
  while (startTime.isSameOrBefore(endTime, 'day')) {
    dataList.push(startTime.format('YYYY-M-D'))
    startTime = startTime.add(1, 'day')
  }
  return dataList
}
