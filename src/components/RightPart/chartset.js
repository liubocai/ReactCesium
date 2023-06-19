const airsitua =
    [
        {
            data: [
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
            colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            unit: '微克每立方米'
        },
        {
            data: [
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
            colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            unit: '微克每立方米'

        },
        {
            data: [
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
            colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            unit: '微克每立方米'

        },
    ]
    const option= [{
        title: {
          text: '空气质量',
          style: {
            fill: '#fff',
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'center',
            textBaseline: 'bottom'
          },
        },
        xAxis: {
          name: '污染物含量',
          data: 'value',
          nameTextStyle: {
            fill: '#fff',
            fontSize: 10
          }
        },
        yAxis: {
          name: '污染物',
          data: ['二氧化碳', '苯', 'PM2.5', 'PM10'],
          nameTextStyle: {
            fill: '#fff',
            fontSize: 10
          },
          
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100],
            type: 'bar',
            animationCurve: 'easeOutBack'
          }
        ]
      },
      {
        
      },
    ]
export { airsitua,option }