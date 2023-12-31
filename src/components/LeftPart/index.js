import React, { useEffect, useState } from 'react'
import { ScrollBoard, BorderBox10, BorderBox13, Decoration2 } from '@jiaminghi/data-view-react'
import { userOptions } from './options'
import { dConfig, dUserSitua, dUserLocation, dimgurls } from './data'
import './dp.css'
import { LeftPage, LeftTopBox, LeftBottomBox, ModuleTitle } from './style'
import { Button, Dropdown, Space, Tooltip, message, ConfigProvider, Checkbox, Divider } from 'antd'
// import PlayPart from './components/PlayPart/index'
import { text } from '@jiaminghi/data-view-react/lib/index-cd27b7f6'
import axios from 'axios'
import { data } from 'browserslist'


const CheckboxGroup = Checkbox.Group
const plainOptions = ['卫星通信', '无人机通信', '地面设备通信']
const defaultCheckedList = []
var videoindex = 1;

class ChildComponent extends React.Component { // 静态组件不会在父组件状态变化时重新渲染
  state = {
    videoindex : 1,
    addedEnt: [],
  }
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }
  openNewWindow = (url) =>{
    window['param'] = url
    window.open('playvideo.html')
    // const w=window.open('about:blank')
    // w.location.href = 'playvideo.html'
  }
  showVideo=(url,text)=>{ //在右边播放视频
    if(videoindex == 1){ 
      this.props.changerrtcplayfunc(true,'rtc_media_player1',url,text)
      this.props.changevidu1('',text)
      videoindex = 2;
    }else if(videoindex == 2){
      this.props.changerrtcplayfunc(true,'rtc_media_player2',url,text)
      this.props.changevidu2('',text)
      videoindex = 3
    }else{
      this.props.changerrtcplayfunc(true,'rtc_media_player3',url,text)
      this.props.changevidu3('',text)
      videoindex = 1
    }
  }
  openPlayTab=(srcurl)=>{
    this.props.history.push("/PlayPart/index", {
            url: srcurl
        });
  }
  genVideoUrl(ip){
    return 'webrtc://' + ip + '/live/livestream'
  }
  clickSbHandler = (e) => {
    var i = e.rowIndex;
    var uid = e.rowIndex + ""
    var tarray = this.state.addedEnt;
    
    if(tarray.includes(uid)){
      //如果实体已经生成
      tarray.splice(tarray.indexOf(uid))
      this.setState({
        addedEnt: tarray
      })
      //todo 添加消除实体等操作
    }else{
      //第一次生成实体
      tarray.push(uid);
      this.setState({
        addedEnt: tarray
      })
      var pos = dUserLocation[e.rowIndex]
      var text = this.props.configin.data[i][0]// var text = dUserSitua.data[e.rowIndex][0]
      var url = this.genVideoUrl(this.props.ips[i]);
      this.props.changeCameraNow(dUserLocation[i][0], dUserLocation[i][1], true) //移动摄像头到新增图标
      this.props.changeIconMes(uid, pos, text,'WorkerMan.glb',true) //增加图标
      // this.props.changerrtcplayfunc(true,'rtc_media_player1','webrtc://192.168.10.182/live/livestream','');
      this.showVideo(url,text) //在右边播放视频
    }
    //把tarray传出去
    this.props.changeAddedEnt(tarray);

  }
  
  render () {
    return (
      <ScrollBoard
        config={this.props.configin}
        style={{
          width: '4.42rem',
          height: '12rem',
        }}
        onClick={this.clickSbHandler}
      />        
    )
  }
}

class index extends React.Component {
  constructor(props){
    super(props);
    //在类构造函数中发送表数据的请求
    var data = [];
    var ips = []
    try{
      axios.get(this.props.csapi+'/getallequip').then(response =>{          
        response.data.forEach(element => {
          var line = []
          line.push(element['ename']);
          line.push('武汉市');
          line.push(element['status']);
          data.push(line)
          ips.push(element['ip']);
        });      
      })
    }catch{
      message.log("加载数据库错误")
    }    
    var configin = {
      ...dConfig,
      header:['设备', '区域', '状态'],
      data:data,      
    }
    this.state = {
      configin: configin,
      userSitua: dUserSitua,
      api: this.props.csapi,
      ips:ips,
    }
    this.props.changeIps(ips);
  }

  chSelect = () => {
    // console.log(this.props)
    message.info('左击三维模型进行选点, 右击完成选点!')
    this.props.changeSelectState(!this.props.selectAera)
  }
  chUav = () => {
    this.props.changeUavTrack(!this.props.showUavTrack)
  }
  addModel = () => {
    this.props.addIcon()
  }

  componentDidMount(){
  }
  componenWillMount(){   


  }

  render () {
    const handleButtonClick = (e) => {
      message.info('Click on left button.')
      console.log('click left button', e)
    }
    return (
      <LeftPage>
        <LeftBottomBox>
          <BorderBox13 className="left-bottom-borderBox13">
            <div className="left-bottom">
              <ModuleTitle>
                <i className="iconfont">&#xe608;</i>
                <span>地面设备状态</span>
              </ModuleTitle>
              {/* 静态图表，防止点击后重新渲染，列表从第一行重新开始轮播 */}
              <ChildComponent
              configin={this.state.configin}
              ips={this.state.ips}
              changeCameraNow={this.props.changeCameraNow}
              addIcon={this.props.addIcon}
              changeIconMes={this.props.changeIconMes}
              changevidu1={this.props.changevidu1}
              changevidu2={this.props.changevidu2}
              changevidu3={this.props.changevidu3}
              changerrtcplayfunc={this.props.changerrtcplayfunc}
              changeAddedEnt={this.props.changeAddedEnt} />
            </div>
          </BorderBox13>
        </LeftBottomBox>
      </LeftPage>
    )
  }
}
export default index




// const ChosenComponent = () => {
//   const [checkedList, setCheckedList] = useState(defaultCheckedList)
//   const [indeterminate, setIndeterminate] = useState(true)
//   const [checkAll, setCheckAll] = useState(false)
//   const onChange = (list) => {
//     setCheckedList(list)
//     setIndeterminate(!!list.length && list.length < plainOptions.length)
//     setCheckAll(list.length === plainOptions.length)
//     console.log(checkedList)
//   }
//   const onCheckAllChange = (e) => {
//     setCheckedList(e.target.checked ? plainOptions : [])
//     setIndeterminate(false)
//     setCheckAll(e.target.checked)
//   }
//   return (
//     <>
//       <div className='cc-mainContainer'>
//         <div className='cc-sonContainer'>
//           <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} className='checkBox-style'>
//             Check all
//           </Checkbox>
//           <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} className='checkBoxGroup-style' />
//         </div>
//         <div className='cc-sonContainer'>
//           <Button type='primary'>确认感知</Button>
//           <Button className='chosen-btn' type='primary'>button1</Button>
//           <Button className='chosen-btn' type='primary'>button2</Button>
//           <Button className='chosen-btn' type='primary'>button3</Button>
//         </div>
//       </div>
//     </>
//   )
// }

        {/* <LeftTopBox>
          <BorderBox10 className="left-top-borderBox10" color={[, 'rgb(37, 13, 192)']}>
            <div className='left-top-container'>
              <ModuleTitle>
                <i className="iconfont">&#xe608;</i>
                <span>通信协同组网</span>
              </ModuleTitle>
              <button className='btn'>过境卫星通信</button>
              <button className='btn' onClick={this.chSelect}>无人机通信</button>
              <button className='btn'>地面设备通信</button>
              <Decoration2 className='decoration2-style' />
              <ModuleTitle>
                <i className="iconfont">&#xe608;</i>
                <span>空天地融合感知</span>
              </ModuleTitle>
              <button className='btn'>过境卫星感知</button>
              <button className='btn' onClick={this.chUav}>无人机感知</button>
              <button className='btn'>地面设备感知</button>

            </div>
          </BorderBox10>
        </LeftTopBox> */}