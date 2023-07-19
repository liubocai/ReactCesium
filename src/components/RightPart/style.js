import styled from 'styled-components'

export const RightPage = styled.div`
  width: 5.00rem;
  height: auto;
  padding: 0px 0.2rem;
  padding-left: 0.1rem;
`

export const RightTopBox = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  margin-bottom: 0.25rem;
  .right-top {
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.1875rem;
    }
    .earth-gif {
      width: 2.75rem;
      height: auto;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`

export const RightCenterBox = styled.div`
  position: relative;
  height: 4rem;
  width: 100%;
  margin-bottom: 0.25rem;
  .right-center-borderBox1 {
    width: inherit;
    height: inherit;
    margin-top: 0;
    .right-center-top {
      margin-left: 3.2%;
      margin-top: 4%;
      padding-top: 4%;
      width: 20px;
      height:10px;
      border-radius: 0.5rem;
      background-color: rgba(19, 25, 47, 0.6);
      .imgbox{
        width: 4.43rem;
        height: 4rem;
        margin-right: 0.1875rem;
        margin-bottom: 0.19rem;
      }
      .textbox{
        width: 4.43rem;
        height:5px;
        font-size:0.3rem;
        color: #000000;
      }
      .title-dis {
        width: 4.43rem;
        margin-top: 0rem;
        margin-left:0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.25rem;
        color: #c0c9d2;
        &-keyword {
          padding-left: 0.125rem;
          color: #47dae8;
        }
      }
      .traffic-style {
        margin-left: 0.13rem;
      }
    }
  }
`

export const RightBottomBox = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  .right-bottom-borderBox8 {
    .right-bottom {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);
      padding: 0.15rem 0.1875rem 0.1875rem;
      .feedback-box {
        margin-top: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 2rem;
          .dis-text {
            font-weight: bold;
            margin-top: 0.0525rem;
            color: #b2cfee;
            font-size: 0.2rem;
            background: linear-gradient(to bottom, #fff, #6176F4);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
      }
      .offline-portal-box {
        margin-top: 0.125rem;
      }
    }
  }
`

//  标题a
export const ModuleTitle = styled.h3`
  padding: 0.125rem 0.125rem;
  color: #bcdcff;
  font-size: 0.2rem;
  font-weight: bold;
  .iconfont {
    font-size: 0.255rem;
    margin-right: 0.125rem;
    color: #89e5ff;
    font-weight: 400;
  }
`
