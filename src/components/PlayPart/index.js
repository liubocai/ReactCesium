import React, { PureComponent } from 'react'
import { RightCenterBox } from './style'
import { BorderBox1, BorderBox8,CapsuleChart,Charts } from '@jiaminghi/data-view-react'

class Playbox extends PureComponent{
    state={
        url:'',
        text:'播放设备名字'
    }
    render(){
        return(
            <RightCenterBox>
            <BorderBox1 className='right-center-borderBox1'>  
              <div className='right-center-top'>
                <video className='imgbox' id="rtc_media_player1" controls autoplay></video>
                <span className='title-dis'>{this.state.text}</span>
              </div>
            </BorderBox1>
           </RightCenterBox>
        )
    }
}
export default Playbox;