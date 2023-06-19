import React, { useState } from 'react'
import { ScrollBoard, BorderBox10, BorderBox13, Decoration2 } from '@jiaminghi/data-view-react'
import { userOptions } from './options'
import { dConfig, dUserSitua, dUserLocation, dimgurls } from './data'
import './dp.css'
import { LeftPage, LeftTopBox, LeftBottomBox, ModuleTitle } from './style'
import { Button, Dropdown, Space, Tooltip, message, ConfigProvider, Checkbox, Divider } from 'antd'
// import PlayPart from './components/PlayPart/index'
import { text } from '@jiaminghi/data-view-react/lib/index-cd27b7f6'


const CheckboxGroup = Checkbox.Group
const plainOptions = ['卫星通信', '无人机通信', '地面设备通信']
const defaultCheckedList = []

class ChildComponent extends React.Component { // 静态组件不会在父组件状态变化时重新渲染
  state = {
    videoindex : 1,
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
  childAddIcon=(uid, pos, text,model,condition)=>{
    this.props.changeIconMes(uid, pos, text,model,condition)
  }
  showVideo=(url,text)=>{ //在右边播放视频
    if(text.indexOf('应急人员') != -1){ 
      this.props.changevidu1(url, text)
    }else if(this.videoindex == 1){
      this.props.changevidu3(url,text)
      this.videoindex = 2
    }else{
      this.props.changevidu2(url,text)
      this.videoindex = 1 
    }
  }
  openPlayTab=(srcurl)=>{
    this.props.history.push("/PlayPart/index", {
            url: srcurl
        });
  }

  clickSbHandler = (e) => {
    var uid = e.rowIndex + ""
    var pos = dUserLocation[e.rowIndex]
    var text = dUserSitua.data[e.rowIndex][0]
    var url = dimgurls[e.rowIndex][0]
    this.props.changeCameraNow(dUserLocation[e.rowIndex][0]-46.07612763, dUserLocation[e.rowIndex][1]-11.83213476, true)
    this.props.changeIconMes(uid, pos, text,'WorkerMan.glb',true) //增加图标
    this.showVideo(url,text) //在右边播放视频
    // this.openPlayTab(url)
    // this.openNew()//打开新的标签
    //this.openNewWindow(url)


    
  }
  render () {
    return (
      <ScrollBoard
        config={this.props.configS}
        style={{
          width: '4.42rem',
          height: '12rem',
        }}
        onClick={this.clickSbHandler}
      />
     

      
    )
  }
}


const ChosenComponent = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkAll, setCheckAll] = useState(false)
  const onChange = (list) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
    console.log(checkedList)
  }
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  return (
    <>
      <div className='cc-mainContainer'>
        <div className='cc-sonContainer'>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} className='checkBox-style'>
            Check all
          </Checkbox>
          <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} className='checkBoxGroup-style' />
        </div>
        <div className='cc-sonContainer'>
          <Button type='primary'>确认感知</Button>
          <Button className='chosen-btn' type='primary'>button1</Button>
          <Button className='chosen-btn' type='primary'>button2</Button>
          <Button className='chosen-btn' type='primary'>button3</Button>
        </div>
      </div>
    </>
  )
}

class index extends React.Component {
  state = { // 暂时存放数据在这里
    config: dConfig,
    userSitua: dUserSitua,
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

  

  render () {
    const configS = {
      ...this.state.config,
      ...userOptions(this.state.userSitua),
    }

    const handleButtonClick = (e) => {
      message.info('Click on left button.')
      console.log('click left button', e)
    }
    return (
      <LeftPage>
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

        <LeftBottomBox>
          <BorderBox13 className="left-bottom-borderBox13">
            <div className="left-bottom">
              <ModuleTitle>
                <i className="iconfont">&#xe608;</i>
                <span>地面设备状态</span>
              </ModuleTitle>
              {/* 静态图表，防止点击后重新渲染，列表从第一行重新开始轮播 */}
              <ChildComponent configS={configS} 
              changeCameraNow={this.props.changeCameraNow}               
              addIcon={this.props.addIcon}
              changeIconMes={this.props.changeIconMes}
              changevidu1={this.props.changevidu1}
              changevidu2={this.props.changevidu2}
              changevidu3={this.props.changevidu3} />
            </div>
          </BorderBox13>
        </LeftBottomBox>
      </LeftPage>
    )
  }
}
export default index