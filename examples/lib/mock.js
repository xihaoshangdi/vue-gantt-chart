import dayjs from 'dayjs'
export const mockData = (count) => {
  const Airport = [
    '塔尔萨国际机场',
    '达拉斯/沃思堡国际机场',
    'Coffeyville市立機場',
    '奥黑尔国际机场',
    '丹佛国际机场',
    '休士頓喬治布希洲際機場',
    '沙努特Martin Johnson機場',
    '兰伯特-圣路易国际机场',
    '北京机场',
    '天津机场'
  ]
  const workType = ['石油服务', '航空探矿', '航拍航测', '外吊挂作业', '电力作业', '管道巡线', '引港作业', '农林牧副渔生产', '气象/资源保护', '航空护林', '航空播种', '航空化学处理', '伐木运送', '空中放牧', '鱼群跟踪', '秸秆焚烧侦查', '执法飞行', '城市消防', '夜视镜培训', '公务飞行', '医疗救援', '海事巡查', 'VIP运输', '旅游观光', '休闲娱乐', '新闻采集和播报', '空中摄影', '飞行培训', '私人飞行']
  const model = ['A300', 'A310', 'A318', 'A319', 'A320-200']
  const mocks = []
  for (let i = 0; i < count; i++) {
    mocks.push({
      id: i,
      currentAirport: Airport[Math.floor(Math.random() * Airport.length)],
      number: `${randomNum()}-${randomLett()}`,
      model: model[Math.floor(Math.random() * model.length)],
      childArray: ((length = Math.floor(3)) => {
        const childs = []
        for (let j = 0; j < length; j++) {
          const start = dayjs(new Date()).add(Math.floor(Math.random() * 65), 'hour').format('YYYY/MM/DD HH:mm')
          const end = dayjs(start).add(Math.random() * 15, 'hour').format('YYYY/MM/DD HH:mm')
          childs.push({
            id: j,
            startAirport: Airport[Math.floor(Math.random() * Airport.length)],
            endAirport: Airport[Math.floor(Math.random() * Airport.length)],
            workType: workType[Math.floor(Math.random() * workType.length)],
            start: start,
            end: end
          })
        }
        return childs
      })()
    })
  }
  mocks[0].currentAirport = '未分配'
  mocks[0].number = ''
  mocks[0].model = ''
  return mocks
}

function randomNum (n = 2) {
  let number = ''
  for (let i = 0; i < n; i++) {
    number += Math.floor(Math.random() * 10)
  }
  return number
}

function randomLett (n = 4) {
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let idvalue = ''
  for (let i = 0; i < n; i++) {
    idvalue += arr[Math.floor(Math.random() * 26)]
  }
  return idvalue
}
