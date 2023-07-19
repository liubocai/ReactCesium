const cenlongi = 114.3596719756122
const cenlati = 30.532613375379018
const ratio = 2.5
const data = [
  {
    id: 1, // 航区编号
    name: '无人机航区1', // 航区名称
    type: '扇形', // 航区几何类型
    heading: 0, // 航区区域初始朝向角度，默认置为0
    center: { // 中心点的经纬度及高度
      longi: cenlongi,
      lati: cenlati,
      height: 2.0,
    },
    radius: 400.0 * ratio, // 区域体外半径
    innerRadius: 1.0, // 区域体内半径
    lrFrom: 0,
    lrTo: 30,
    udFrom: 90,
    udTo: 90,
    color: { // 填色及透明度
      r: 100,
      g: 149,
      b: 237,
      transparency: 0.5
    }
  },

  {
    id: 2,
    name: '无人机航区2',
    type: '扇形',
    heading: 0,
    center: {
      longi: cenlongi,
      lati: cenlati,
      height: 2.0,
    },
    radius: 480 * ratio,
    innerRadius: 1.0,
    lrFrom: 30,
    lrTo: 78,
    udFrom: 90,
    udTo: 90,
    color: {
      r: 60,
      g: 179,
      b: 113,
      transparency: 0.7
    }
  },

  {
    id: 3,
    name: '无人机航区3',
    type: '扇形',
    heading: 0,
    center: {
      longi: cenlongi,
      lati: cenlati,
      height: 2.0,
    },
    radius: 550 * ratio,
    innerRadius: 1.0,
    lrFrom: 78,
    lrTo: 127,
    udFrom: 90,
    udTo: 90,
    color: {
      r: 184,
      g: 134,
      b: 11,
      transparency: 0.6
    }
  },

  {
    id: 4,
    name: '无人机航区4',
    type: '扇形',
    heading: 0,
    center: {
      longi: cenlongi,
      lati: cenlati,
      height: 2.0,
    },
    radius: 510 * ratio,
    innerRadius: 1.0,
    lrFrom: 127,
    lrTo: 165,
    udFrom: 90,
    udTo: 90,
    color: {
      r: 250,
      g: 128,
      b: 114,
      transparency: 0.7
    }
  },

  {
    id: 5,
    name: '无人机航区5',
    type: '多边形',
    heading: 0,
    pointsArray: [
      114.35033887550817, 30.53481077076927,
      114.35005803427568, 30.530914891311888,
      114.35273034783613, 30.528398998811543,
      114.35657441093247, 30.527100555085827,
      cenlongi, cenlati
    ],
    color: {
      r: 178,
      g: 34,
      b: 34,
      transparency: 0.8
    }
  },

  {
    id: 6,
    name: '无人机航区6',
    type: '多边形',
    heading: 0,
    pointsArray: [
      114.3569962866439, 30.527871617810103,
      114.35994957183703, 30.52507148433675,
      114.3657154361406, 30.524868358423408,
      114.37040399656685, 30.532659818285477,
      cenlongi, cenlati
    ],
    color: {
      r: 138,
      g: 43,
      b: 226,
      transparency: 0.9
    }
  },
]
const imgurls = 
  [
    ['http://192.168.1.101:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.102:8080/?action=stream','http://192.168.1.100:8080/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8080/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
    ['http://192.168.1.100:8080/?action=stream','http://192.168.1.100:8081/?action=stream'],
  ]

//这里的imgurls是实现点击模型实体，在右边显示视频功能的

const gpsurls = [
  'http://192.168.1.101:8000',
  'http://192.168.1.101:8000',
  'http://192.168.1.101:8000',
  'http://192.168.1.102:8000',
  'http://192.168.1.102:8000',
  'http://192.168.1.102:8000',
  'http://192.168.1.101:8000',
  'http://192.168.1.101:8000',
  'http://192.168.1.101:8000',
  'http://192.168.1.102:8000',
  'http://192.168.1.102:8000',
]

const testpos = [
  [114.36,35.30],
  [114.00,35.00],
]
export { data, imgurls, gpsurls, testpos }