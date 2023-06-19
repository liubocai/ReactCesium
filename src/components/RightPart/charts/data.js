const browseCategories = {
  data: [782, 621.2, 722.1, 525.3, 265, 224],
  indicator: [
    {
      name: '无人机',
      max: 1000,
    },
    {
      name: '过域卫星',
      max: 1000,
    },
    {
      name: '背包式装备',
      max: 1000,
    },
    {
      name: '通信车',
      max: 1000,
    },
    {
      name: '探测AI',
      max: 1000,
    },
  ],
}

const offline = {
  feedback: [
    {
      title: '服务质量',
      number: 90,
    },
    {
      title: '交互体验',
      number: 82,
    },
    {
      title: '数据可信度',
      number: 85,
    },
  ],
  offlinePortalData: {
    data1: [80, 152, 101, 134, 90, 130],
    data2: [120, 182, 191, 210, 170, 110],
    data3: [110, 132, 201, 154, 150, 80],
    data4: [90, 142, 161, 114, 190, 170],
    xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
  },
}

const accessFrequency = 1500
const peakFlow = 300
const trafficSitua = {
  timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
  outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
  inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
}
const airdata = 
[
  {
    data : [      
      {      
        name: 'CO2',      
        value: 200      
      },      
      {      
        name: '甲醛',      
        value: 80      
      },      
      {      
        name: '毒气',      
        value: 300      
      },      
      {      
        name: '苯',      
        value: 70      
      },      
    ],
    
      unit : '微克每立方米'
  },
  {
    data : [      
      {      
        name: 'CO2',      
        value: 150      
      },      
      {      
        name: '甲醛',      
        value: 60      
      },      
      {      
        name: '毒气',      
        value: 250      
      },      
      {      
        name: '苯',      
        value: 40      
      },      
    ],
    
     unit :'微克每立方米'      
    
  },
  {
     data : [     
      {     
        name: 'CO2',     
        value: 220     
      },     
      {     
        name: '甲醛',     
        value: 90     
      },     
      {     
        name: '毒气',     
        value: 180     
      },     
      {     
        name: '苯',     
        value: 110     
      },     
    ], 
    
     unit : '微克每立方米'    
    
  },
]



export { browseCategories, offline, accessFrequency, peakFlow, trafficSitua,airdata }