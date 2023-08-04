import React ,{Component} from 'react';
import ReactDOM from 'react-dom/client'
import reportWebVitals from '../../reportWebVitals'
import Three from './index';
import '../index/flexible'
React.Component.prototype.$config = window.config
const moreplayer = ReactDOM.createRoot(document.getElementById('root'))

moreplayer.render(
    <Three/>  
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
