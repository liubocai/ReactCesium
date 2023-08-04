import Playbox from '../../components/PlayPart/index';
import { AppPageStyle, AppPageContent } from '../index/AppStyle'
import { Globalstyle } from "../index/global.js"
import { Component } from 'react';
import TopPart from '../../components/TopPart/index'
import LeftPart from '../../components/LeftPart/index'
import '../../assets/icon/iconfont.css'
import {Line} from './style'
class index extends Component{
    state = {
        ips: []
    }

    changeIps=(ips) =>{
        this.setState({
          ips:ips,
        })
      }

    render(){
        return(
            <AppPageStyle>        
                <Globalstyle></Globalstyle>
                <TopPart />
                <AppPageContent>
                    <LeftPart
                        changeIps = {this.changeIps}
                    />
                   
                    <Line>
                        <Playbox/>
                        <Playbox/>
                        <Playbox/>
                    </Line>
                    <Line>
                        <Playbox/>
                        <Playbox/>
                        <Playbox/>
                    </Line>
                    <Line>
                        <Playbox/>
                        <Playbox/>
                        <Playbox/>
                    </Line>
                    
                    
                    
                  
                   
                   
                </AppPageContent>
            </AppPageStyle>
            
        )
    }
}
export default index;
