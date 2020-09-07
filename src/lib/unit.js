import dayjs from 'dayjs'
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

export const handleDaySet = (startDate, count) => {
  const data = []
  for (let i = 1; i < count; i++) {
    const date = dayjs(startDate).add(i, 'day').format('YYYY-M-D')
    data.push(date)
  }
  return data
}
