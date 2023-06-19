import styled from 'styled-components'
import pageBg from './assets/images/pageBg.png'

// 12.25rem
export const AppPageStyle = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  margin: 0px;
  padding: 10px 0 0 0;
  background: url(${pageBg}) center center no-repeat;
  background-size: cover;
  
`
export const AppPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .center-page {
    flex: 1;
  }
  
`