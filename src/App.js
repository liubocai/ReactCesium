import React, { Component, useReducer, useRef } from 'react'
import { AppPageStyle, AppPageContent } from './AppStyle'
import { Globalstyle } from "./global.js"

import TopPart from './components/TopPart/index'
import LeftPart from './components/LeftPart/index'
import CenterPart from './components/CenterPart/index'
import RightPart from './components/RightPart/index'
// import PlayPart from './components/PlayPart/index'
import './assets/icon/iconfont.css'
class App extends Component {
  state = {
    selectAera: false,
    showUavTrack: false,
    cameraNow: {
      longitude: 0,
      latitude: 0,
      isAdj: false
    },
    uavmodel:{
      uid: '0',
      pos:[114,32],
      utext:'无人机设备1',
    },
    videourl:'this is app.js',    
    video1:{
      url:'应急人员.png',
      text:''
    },
    video2:{
      url:'应急人员.png',
      text:''
    },
    video3:{
      url:'应急人员.png',
      text:''
    },
    texturl:0,
    imageurl:'this is app.js',
    entid:1,
    addIconMes:{
      ifadd: false,
      uid: '1',
      upos:[114,32],
      utext:'无人机设备',
      umodel:'uav.glb'
    }
  }
  changevidu1=(url,text)=>{
    this.setState({
      video1:{
        url:url,  
        text:text,
      } 
    })
  }
  changevidu2=(url,text)=>{
    this.setState({
      video2:{
        url:url,  
        text:text,
      } 
    })
  }
  changevidu3=(url,text)=>{
    this.setState({
      video3:{
        url:url,  
        text:text,
      } 
    })
  }
  changevideourl = (url) =>
  {
    this.setState({
      videourl:'http://192.168.10.211:8080/?action=stream'
      // videourl:url

    })
  }
  changevideourl2 = (url1,url2) =>
  {
    this.setState({
      videourlfront:url1,   
    })
    this.setState({
      videourlback:url2,   
    })
  }
  changetexturl = (url) =>
  {
    this.setState({
      texturl:url
    })
  }
  changeimageurl = (url) =>
  {
    this.setState({
      imgurl:url
    })
  }
  

  changeSelectState = (stateType) => {
    this.setState({
      selectAera: stateType
    })
  }
  changeCameraNow = (longi, lati, condition) => {
    this.setState({
      cameraNow: {
        longitude: longi,
        latitude: lati,
        isAdj: condition,
      }
    })
  }
  changeUavTrack = (stateType) => {
    this.setState({
      showUavTrack: stateType
    })
  }
  changeUAVModel = (uid, pos, utext) => {
    this.setState({
      uavmodel:{
        uid: uid,
        pos:pos,
        utext:utext,
      }
    })
  }
  changeEntid = (id) =>{
    this.setState({
      entid: id        
    })
  }
  changeIconMes = (id, pos, text, model, condition) =>{
    this.setState({
      addIconMes:{
        uid:id,
        upos:pos,
        utext:text,
        umodel:model,
        ifadd:condition,
      }
    })
  }
  addIcon = (id, pos, text, model) =>{
    this.changeIconMes(id, pos, text, model, true)
  }
  render () {
    return (
      <AppPageStyle>
        {/* 全局样式注册到界面中 */}
        <Globalstyle></Globalstyle>
        <TopPart />
        <AppPageContent>
          <LeftPart
            changeSelectState={this.changeSelectState}
            changeCameraNow={this.changeCameraNow}
            changeUavTrack={this.changeUavTrack}
            changeUAVModel={this.changeUAVModel}
            addIcon={this.addIcon}
            changeIconMes={this.changeIconMes}
            changevidu1={this.changevidu1}
            changevidu2={this.changevidu2}
            changevidu3={this.changevidu3}
            selectAera={this.state.selectAera}
            showUavTrack={this.state.showUavTrack}
          />

          <CenterPart
            changeSelectState={this.changeSelectState}
            changeCameraNow={this.changeCameraNow}
            changeUavTrack={this.changeUavTrack}
            changevideourl={this.changevideourl}
            changetexturl={this.changetexturl}
            changeimageurl={this.changeimageurl}
            changeUAVModel={this.changeUAVModel}
            changeEntid={this.changeEntid}
            changevideourl2={this.changevideourl2}
            changeIconMes={this.changeIconMes}
            selectAera={this.state.selectAera}
            cameraNow={this.state.cameraNow}
            showUavTrack={this.state.showUavTrack}
            uavmodel={this.state.uavmodel}
            addIconMes={this.state.addIconMes}

          />

          <RightPart
          changevideourl = {this.changevideourl} 
          videourl = {this.state.videourl}
          texturl  ={this.state.texturl}
          imageurl = {this.state.imageurl}
          entid = {this.state.entid}
          videourlfront= {this.state.videourlfront}
          videourlback={this.state.videourlback}
          video1={this.state.video1}
          video2={this.state.video2}
          video3={this.state.video3}

          />


        </AppPageContent>
      </AppPageStyle>
    )
  }
}

export default App
