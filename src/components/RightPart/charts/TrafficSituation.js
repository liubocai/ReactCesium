import React, { PureComponent } from 'react'
import Chart from './chart'
import { trafficOptions } from './options'
import { trafficSitua } from './data'
class TrafficSituation extends PureComponent {

  render () {
    return (
      <div
        style={{
          width: '5.375rem',
          height: '3.125rem',
        }}>
        {trafficSitua ? (
          <Chart renderer={'canvas'} option={trafficOptions(trafficSitua)} />
        ) : (
          ''
        )}
      </div>
    )
  } //endrender
}

export default TrafficSituation
