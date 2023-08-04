import React, { PureComponent } from 'react'
import { BorderBox1, BorderBox8,CapsuleChart,Charts } from '@jiaminghi/data-view-react'
import BrowseCategories from './charts/BrowseCategories'
import TrafficSituation from "./charts/TrafficSituation"
// import UserIdentityCategory from './charts/UserIdentityCategory';
// import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback'

import { offline, browseCategories, accessFrequency, peakFlow,airdata, imgurls } from './charts/data'
import { airsitua, option } from './chartset'
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
  ModuleTitle
} from './style'
import Srs from '../../srs.sdk.js'

// import { Button as AntdButt, Space } from 'antd';
//不同组件中函数的调用都是通过在子组件内监听其在父组件内变量的变化
class index extends PureComponent {
  state={
    front:'',
    back:'',
  }
  componentDidUpdate(){
    if(this.props.rrtcplayfunc.ifrun){
      this.rtcplayfunc(this.props.rrtcplayfunc.vdomid, this.props.rrtcplayfunc.url);
      this.props.changerrtcplayfunc(false, '','','');
    }
  }
  rtcplayfunc(vdomid, url){
    var sdk=null;
    var vdom = document.getElementById(vdomid);
    // vdom.show();  
    // Close PC when user replay.
    if (sdk) {
        sdk.close();
    }
    sdk = new Srs.SrsRtcPlayerAsync();

    // https://webrtc.org/getting-started/remote-streams
    // vdom.prop('srcObject', sdk.stream);
    // Optional callback, SDK will add track to stream.
    // sdk.ontrack = function (event) { console.log('Got track', event); sdk.stream.addTrack(event.track); };

    // For example: webrtc://r.ossrs.net/live/livestream
    var url = url;
    vdom.srcObject = sdk.stream;
    sdk.play(url).then(function(session){
    }).catch(function (reason) {
        sdk.close();
        vdom.hide();
        console.error(reason);
    });   

  }


  render() {
    return (
      <RightPage>
        {/* <RightTopBox>
          <div className='right-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe608;</i>
              <span>应急监测数据分布</span>
            </ModuleTitle>
            <div className='right-top-content'>
              <BrowseCategories
                browseCategories={browseCategories}></BrowseCategories>
            </div>
          </div>
        </RightTopBox> */}
        <div>
          {/* <button>更多</button> */}
          <a href='moreplayer.html'>更多</a>
        </div>
        <RightCenterBox>
          <BorderBox1 className='right-center-borderBox1'>

            <div className='right-center-top'>
              <video className='imgbox' id="rtc_media_player1" controls autoplay></video>
              {/* <video src={this.props.videourl} width={350} height={240} autoPlay controls>请选择一个模型</video> */}              
              {/* <img className='imgbox' src={this.props.video1.url}/> */}
              <span className='title-dis'>{this.props.video1.text}</span>
            </div>
          </BorderBox1>
        </RightCenterBox>

        <RightCenterBox>
          <BorderBox1 className='right-center-borderBox1'>

            <div className='right-center-top'>
              <video className='imgbox' id="rtc_media_player2" controls autoplay></video>
              {/* <video src={this.props.videourl} width={350} height={240} autoPlay controls>请选择一个模型</video> */}
              
              <span className='title-dis'>{this.props.video2.text}</span>
            </div>
          </BorderBox1>
        </RightCenterBox>

        <RightCenterBox>
          <BorderBox1 className='right-center-borderBox1'>
            <div className='right-center-top'>
              <video className='imgbox' id="rtc_media_player3" controls autoplay></video>

              {/* <video src={this.props.videourl} width={350} height={240} autoPlay controls>请选择一个模型</video> */}
              
              <span className='title-dis'>{this.props.video3.text}</span>
            </div>
          </BorderBox1>
        </RightCenterBox>

        {/* <RightBottomBox>
          <BorderBox8 className="right-bottom-borderBox8">
            <div className="right-bottom">
              <ModuleTitle>
                <i className="iconfont">&#xe608;</i>
                <span>系统状态反馈</span>
              </ModuleTitle>
              // <div className="feedback-box">
              //   {offline
              //     ? offline.feedback.map((item, index) => {
              //       return (
              //         <div className="feedback-box-item" key={index}>
              //           <Feedback FeedbackData={item}></Feedback>
              //           <span className="dis-text">{item.title}</span>
              //         </div>
              //       )
              //     })
              //     : ""}
              // </div>
              // <CapsuleChart config={airsitua}/>
              <Charts option={option[this.props.texturl-1]}/>
            </div>
          </BorderBox8>

        </RightBottomBox> */}


      </RightPage>
    )
  }
}

export default index
