import React, { forwardRef, PureComponent } from 'react'
import { CenterPage, CenterBottom } from './style'
import { RightCenterBox,RightPage } from '../RightPart/style'
import { message, Tag } from 'antd'
import { BorderBox1 } from '@jiaminghi/data-view-react'
import './cesium.css'
import { data, imgurls } from './data'
import * as Cesium from "cesium/Cesium"
import * as widget from 'cesium/Widgets/widgets.css'
import {dUserSitua, dUserLocation} from '../LeftPart/data'
import axios from 'axios'

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YmRiNTk5OS05MTllLTQ3ZDYtYTcyMS0zYjRhNzBjZDM3N2MiLCJpZCI6MTI5NTEzLCJpYXQiOjE2NzkzMjYyMTR9.ra6JrNYCDF8wkMtmm_yWBVqh-mUDcfYwc2hkQ7-W3BI"


class index extends PureComponent {
  state = {
    url: '005.mp4',
    gpspos:[114,32],
  }
  constructor() {
    super()
    this.cameraAdj = null // 调整viewer视角的方法
    this.showUavTrack = null // 实现显示无人机航区的方法
    this.getClickLocation = null // 实现获取鼠标左击三维地球某处的经纬度坐标的方法
    this.testRightClick = null
    this.deleteUavTrack = null // 实现删除无人机航区的方法
    this.drawArea = [] // 存储画多边形的顶点
    this.addModel = null // 布设三维模型
    this.addIcon = null //添加图标
   
  }



  componentDidUpdate() {
    // console.log(this.props.selectAera)
    // console.log(this.props.cameraNow)
    console.log(this.props.videourl)
    if (this.props.cameraNow.isAdj) {
      // this.addUAVModel(this.props.uavModel.uid, this.props.uavModel.pos, this.props.uavModel.utext)
      this.cameraAdj(this.props.cameraNow.longitude, this.props.cameraNow.latitude, 3000.0, 2)
      this.props.changeCameraNow(0, 0, false)
    }
    if (this.props.showUavTrack) {
      this.showUavTrack()
      this.props.changeUavTrack(false)
    }
    if (this.props.addIconMes.ifadd){
      console.log("addIconMes:",this.props.addIconMes)
      this.addIcon(this.props.addIconMes.uid, this.props.addIconMes.upos, this.props.addIconMes.utext, this.props.addIconMes.umodel)
      this.interval = setInterval(()=>this.moveEnt(this.props.addIconMes.uid),5000)
      //this.props.changeIconMes('0',[0,0],'0','0',false)
      
    }

  }

  componentDidMount() {
    // var wgs84 = new GeographicTilingScheme({ellipsoid: Ellipsoid.WGS84})

    let tileset = new Cesium.Cesium3DTileset({
      url: 'http://localhost:3000/3DTiles/WHUXXXB/tileset.json', // 相对路径
      baseScreenSpaceError: 1024,
      //【重要】数值加大，能让最终成像变模糊
      // ScreenSpaceErrorFactor: 8,
      skipLevels: 1,
      immediatelyLoadDesiredLevelOfDetail: false,
      loadSiblings: false,
      cullWithChildrenBounds: true,
      skipLevelOfDetail: true, //开启跳级加载
      //这个参数默认是false，同等条件下，叶子节点会优先加载。但是Cesium的tile加载优先级有很多考虑条件，
      //这个只是其中之一，如果skipLevelOfDetail=false，这个参数几乎无意义。所以要配合skipLevelOfDetail=true来使用，
      //此时设置preferLeaves=true。这样我们就能最快的看见符合当前视觉精度的块，对于提升大数据以及网络环境不好的前提下有一点点改善意义。
      preferLeaves: true,
      //【重要】内存建议显存大小的50%左右，内存分配变小有利于倾斜摄影数据回收，提升性能体验
      //maximumMemoryUsage: 1024
      //控制切片视角显示的数量，可调整性能
      // maximumScreenSpaceError: 2,//最大的屏幕空间误差
      // maximumNumberOfLoadedTiles: 100000, //最大加载瓦片个数
    })


    let tileset0 = new Cesium.Cesium3DTileset({
      url: 'http://localhost:3000/3DTiles/WHUWLXB/tileset.json', // 相对路径
      baseScreenSpaceError: 1024,
      //【重要】数值加大，能让最终成像变模糊
      // ScreenSpaceErrorFactor: 8,
      skipLevels: 1,
      immediatelyLoadDesiredLevelOfDetail: false,
      loadSiblings: false,
      cullWithChildrenBounds: true,
      skipLevelOfDetail: true, //开启跳级加载
      //这个参数默认是false，同等条件下，叶子节点会优先加载。但是Cesium的tile加载优先级有很多考虑条件，
      //这个只是其中之一，如果skipLevelOfDetail=false，这个参数几乎无意义。所以要配合skipLevelOfDetail=true来使用，
      //此时设置preferLeaves=true。这样我们就能最快的看见符合当前视觉精度的块，对于提升大数据以及网络环境不好的前提下有一点点改善意义。
      preferLeaves: true,
      //【重要】内存建议显存大小的50%左右，内存分配变小有利于倾斜摄影数据回收，提升性能体验
      //maximumMemoryUsage: 1024
      //控制切片视角显示的数量，可调整性能
      // maximumScreenSpaceError: 2,//最大的屏幕空间误差
      // maximumNumberOfLoadedTiles: 100000, //最大加载瓦片个数


    })


    const viewer = new Cesium.Viewer("cesiumContainer", {
      //terrainProvider: Cesium.createWorldTerrain(), //在线加载地图
      animation: false, // 动画小组件
      timeline: false, // 时间轴
      baseLayerPicker: false, // 底图组件，选择三维数字地球的底图（imagery and terrain）。
      infoBox: false, // 信息框
      selectionIndicator: false, //是否显示选取指示器组件
      fullscreenButton: false, // 全屏组件
      // 下面两个指令是让viewer背景置为纯黑，去除原来的宇宙星空背景
      orderIndependentTranslucency: false,
      contextOptions: {
        webgl: {
          alpha: true,
        }
      },
      //离线单个地球图片加载
      imageryProvider: new Cesium.SingleTileImageryProvider({
        url: 'world/world2.jpg',
      //   tilingScheme: new Cesium.GeographicTilingScheme({
      //     ellipsoid: Cesium.Ellipsoid.WGS84
      // }),
      }),
      //离线瓦片地图加载
      // imageryProvider: new Cesium.UrlTemplateImageryProvider({ TileMapServiceImageryProvider
      // imageryProvider: new Cesium.UrlTemplateImageryProvider({
      //   url:'http://localhost:3000/whu/tiles/{z}/{x}/{reverseY}.png',
      //   // url:'http://localhost:3000/tiles',
      //   // fileExtension: 'png',
      //   // url:'http://127.0.0.1:8082/tiles',
      //   // url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', //高德在线地图
      //   // tilingScheme: new Cesium.GeographicTilingScheme({ellipsoid: Cesium.Ellipsoid.WGS84}),
      //   rectangle: Cesium.Rectangle.fromDegrees(-180,-90,180,90),
      // }),


    })
    //添加3d模型
    viewer.scene.primitives.add(tileset)
    viewer.scene.primitives.add(tileset0)
    viewer.flyTo(tileset)
    // 这两项是将viewer背景置为透明，可视化效果更好看
    viewer.scene.skyBox.show = false
    viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0)
    // 去除下段版权信息
    viewer.cesiumWidget.creditContainer.style.display = "none"

    // this.interval = setInterval(() => this.moveEnt('1'), 5000)

    this.cameraAdj = (longi, lati, height, dura) => {
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longi, lati, height),
        duration: dura,
      })
    }

    this.showUavTrack = () => {
      for (var item of data) { // 循环渲染几个无人机航区
        var headings = Cesium.Math.toRadians(item.heading)
        if (item.type === '扇形') {
          viewer.entities.add({
            name: item.name,
            position: Cesium.Cartesian3.fromDegrees(item.center.longi, item.center.lati, item.center.height),
            orientation: Cesium.Transforms.headingPitchRollQuaternion(
              Cesium.Cartesian3.fromDegrees(item.center.longi, item.center.lati, item.center.height),
              //new Cesium.HeadingPitchRoll(Cesium.Math.PI / 1.5, 0, 0.0)  // 1.5是扇形的朝向
              new Cesium.HeadingPitchRoll(headings, 0, 0.0)
            ),
            ellipsoid: {
              radii: new Cesium.Cartesian3(item.radius, item.radius, item.radius),  // 椭球体外半径
              innerRadii: new Cesium.Cartesian3(item.innerRadius, item.innerRadius, item.innerRadius), // 椭球体内半径
              minimumClock: Cesium.Math.toRadians(item.lrFrom), // 左右偏角（相对于设定的椭球体朝向角度，如这里的headings=0）
              maximumClock: Cesium.Math.toRadians(item.lrTo),
              minimumCone: Cesium.Math.toRadians(item.udFrom),// 上下偏角  当都设置为90时，就从椭球体退化至二维图形，利用这点可以轻松绘制扇形等
              maximumCone: Cesium.Math.toRadians(item.udTo),
              material: Cesium.Color.fromBytes(item.color.r, item.color.g, item.color.b).withAlpha(item.color.transparency), // 填色
              outline: false
            }
          })
        }
        else if (item.type === '多边形') {
          viewer.entities.add({ // 增加一个多边形区域
            polygon: {
              hierarchy: Cesium.Cartesian3.fromDegreesArray(item.pointsArray),
              height: item.height,
              material: Cesium.Color.fromBytes(item.color.r, item.color.g, item.color.b).withAlpha(item.color.transparency), // 填色,
              outline: false
              // outlineColor: Cesium.Color.BLACK
            }
          })
        }
      }
      this.cameraAdj(114.3596719756122, 30.532613375379018, 3000.0, 2)
    }

    this.deleteUavTrack = () => { // 删除实体
      viewer.entities.removeAll()
    }

    this.getClickLocation = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    this.testRightClick = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    this.getClickLocation.setInputAction((click) => { // 响应屏幕左点击事件
      // console.log('Click')
      const pick = viewer.scene.pick(click.position)
      const ray = viewer.camera.getPickRay(click.position)
      const position = viewer.scene.globe.pick(ray, viewer.scene)

      if (Cesium.defined(pick)) {
 
        this.props.changevideourl(pick.id.id + '.mp4')
        this.props.changetexturl(parseInt(pick.id.id))
        this.props.changeimageurl(pick.id.id)
        //如果点击的实体具有摄像头
        var nowid = parseInt(pick.id.id)
        this.props.changevideourl2(imgurls[nowid][0], imgurls[nowid][1])     
      }

      if (Cesium.defined(position)) {
        const cartographic = Cesium.Cartographic.fromCartesian(position)
        const longitude = Cesium.Math.toDegrees(cartographic.longitude)
        const latitude = Cesium.Math.toDegrees(cartographic.latitude)
        const height = cartographic.height
        console.log("Clicked at lon: " + longitude + ", lat: " + latitude + ", height: " + height)
        if (this.props.selectAera) { // 如果在选择区域，则记录节点，并在模型上以点实体的形式标识出来
          this.drawArea.push(longitude, latitude)
          viewer.entities.add({
            name: 'processingPoints',
            position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
            point: {
              pixelSize: 6,
              color: Cesium.Color.YELLOW,
            }
          })
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    this.testRightClick.setInputAction((click) => { // 响应屏幕鼠标右击事件
      console.log('RightClick!', this.props.selectAera, this.drawArea)

      if (this.props.selectAera) {
        if (this.drawArea.length < 6) {
          message.error('No Enough Vertices! Now Reselect')
        }
        else {
          viewer.entities.add({ // 增加一个多边形区域
            polygon: {
              hierarchy: Cesium.Cartesian3.fromDegreesArray(this.drawArea),
              height: 0,
              material: Cesium.Color.RED.withAlpha(0.9),
              outline: false
            }
          })
          this.props.changeSelectState(!this.props.selectAera)
        }
        // 删除选点
        const entitiesCopy = viewer.entities.values.slice()
        entitiesCopy.forEach((entity) => {
          if (entity.name === 'processingPoints') {
            viewer.entities.remove(entity)
          }
        })
        this.drawArea = []

      }
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)


    this.addModel = () => {      
      var url = 'uav.glb'
      var heading = Cesium.Math.toRadians(60) // 60度航向
      var pitch = 0
      var roll = 0
      var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)
      var positions = Cesium.Cartesian3.fromDegrees(114.3596719756122, 30.532613375379018, 150.0)
      var orientation = Cesium.Transforms.headingPitchRollQuaternion(positions, hpr)
      viewer.entities.add({
        name: 'UAV',
        show: true,
        id: '1',
        position: positions,
        orientation: orientation,
        model: {
          uri: url,
          scale: 10
        }
      })

      this.cameraAdj(114.3596719756122, 30.532613375379018, 3000.0, 2)
      viewer.entities.values.forEach((item) => {
        console.log(item.id)
      })
    }
    
    this.addIcon = (uid, pos, utext, umodel='uav.glb') =>{
      if(viewer.entities.getById(uid) != null){
        return
      }
      var url = umodel
      var heading = Cesium.Math.toRadians(60) // 60度航向
      var pitch = 0
      var roll = 0
      var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)
      var positions = Cesium.Cartesian3.fromDegrees(pos[0]-46.07612763, pos[1]-11.83213476, 150.0)
      var orientation = Cesium.Transforms.headingPitchRollQuaternion(positions, hpr)
      viewer.entities.add({
        name: 'anyway',
        show: true,
        id: uid,
        position: positions,
        orientation: orientation,
        label:{
          text: utext,
          font: '10pt sans-serif',
          scale: 2.0,
          fillcolor: Cesium.Color.BLUE,
          show: true
        },
        model: {
          uri: url,
          scale: 0.5,
        }
      })
    }

    this.moveEnt = (uid)=>{
      //根据实体uid实时获取实体的gps位置，当实体创建时就自动运行
      console.log("uid",uid)
      var tent = viewer.entities.getById(uid)
      if(tent == null){
        console.log("未找到实体")
        return
      }
      axios.get('/gpsapi')
      .then(response => {
        console.log(response.data)
        tent.position = Cesium.Cartesian3.fromDegrees(response.data.lon,response.data.lat,150.0)
    })
    }
  
  }

  getGPS = () =>{
    
    }

  clickHandler = () => {
    this.showUavTrack()
  }

  deleteClickHandler = () => {
    this.deleteUavTrack()
  }

  testClickHandler = () => {
    // this.addModel()
    for(var i=0; i<dUserSitua.data.length;i++){
      this.addIcon(i,dUserLocation[i], dUserSitua.data[i][0], 'uav.glb')
    }
    this.cameraAdj(114.3596719756122, 30.532613375379018, 3000.0, 2)
  }

  render() {
    return (
      <div>
        <CenterPage>
          <div className='cesium-Container' id="cesiumContainer" />
          {/* <button onClick={this.clickHandler}>Click !</button>
          <button onClick={this.deleteClickHandler}>Delete Click !</button>
          <button onClick={this.testClickHandler}>UAV test!</button> */}
        </CenterPage>
        {/* <RightPage>
        <RightCenterBox>
          <BorderBox1 className='right-center-borderBox1'>
            <div className='right-center-top'>
              <video src={this.state.url} width={100} height={80} ></video>
            </div>
          </BorderBox1>
        </RightCenterBox>
        </RightPage>      
       */}
      </div>

    )
  }
}

export default index
