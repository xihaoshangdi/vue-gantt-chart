import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

/**
 * @description 用于计算甘特图的时间刻度
 * @param {String} type
 * @return
 * @author wujiaping
 * @date 2020/9/4
 * @example
 *
 */
export const handle = (type) => {
  console.log(duration)
  console.log(dayjs.duration().years())
}
