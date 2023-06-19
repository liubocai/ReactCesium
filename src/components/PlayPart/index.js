import React, { useState } from 'react'
import { WholeImg } from './style'

class index extends PureComponent{
    state={
        url:'',
    }
    render(){
        return(
            <div className='WholeImg'>
                <img className='imgbox' src={this.props.location.state.url}></img>
            </div>
        )
    }
}