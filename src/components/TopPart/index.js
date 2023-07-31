import React, { PureComponent, Fragment } from 'react'
import { formatTime } from './formatTime'
import {
  Decoration10,
  Decoration8,
  Decoration6,
} from '@jiaminghi/data-view-react'

import { TopBox, TimeBox } from './style'

class index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // '多模态大数据智能融合分析与精准推测软硬件一体化系统'
      title: '通信-导航-遥感一体化组网应急感知系统',
      timeStr: '',
      weekday: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
    }
  }

  // 设置时间
  componentDidMount () {
    this.setTimingFn()
  }

  setTimingFn () {
    this.timing = setInterval(() => {
      let dateYear = formatTime(new Date(), 'yyyy-MM-dd')
      let dateDay = formatTime(new Date(), 'HH: mm: ss')
      let dateWeek = this.state.weekday[new Date().getDay()]
      this.setState({
        timeStr: `${dateYear} | ${dateDay} ${dateWeek}`,
      })
    }, 1000)
  }

  render () {
    const { title } = this.state
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
            <Decoration10 className='top_decoration10' />
            <div className='title-box'>
              <Decoration8
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
              <div className='title'>
                <span className='title-text'>{title}</span>
                <Decoration6
                  className='title-bototm top_decoration6'
                  reverse={true}
                  color={['#50e3c2', '#67a1e5']}
                />
              </div>

              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
            </div>
            <Decoration10 className='top_decoration10 top_decoration10_reverse' />
            <TimeBox>
              <h3>{this.state.timeStr}</h3>
            </TimeBox>
          </div>
        </TopBox>
      </Fragment>
    )
  }
}

export default index
