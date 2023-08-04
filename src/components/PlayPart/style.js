import styled from 'styled-components'

export const WholeImg = styled.div`
  height:100%;
  width:100%;
  .imgbox{
    width:100%;
    height:100%
  }  
`

export const playbox = styled.div`
  height:50%;
  width:50%;
`
export const RightCenterBox = styled.div`
  position: relative;
  height: 4rem;
  width: 100%;
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
        width: 5.8rem;
        height: 4rem;
      }
      .title-dis {
        width: 5.8rem;
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