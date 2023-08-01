import React ,{Component} from 'react';
import PlayPart from '../components/PlayPart/index'
class morePlayer extends Component {
    render(){
        return(
            <PlayPart>
                <video src="D://rtmpjavacv.mp4"></video>
            </PlayPart>
        )
    }    
}

export default morePlayer;