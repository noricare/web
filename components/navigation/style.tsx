import styled from "@emotion/styled";
import { applyMediaQuery,Colors, Fonts } from "styles";

const StyledRoot = styled.header`
    /* 헤더 상단 고정 관련 CSS */
    position: sticky;
    top:0;
    z-index: 1000;
    /* 배경 */
    background-color: ${Colors.blue100};
    /*폰트 관련*/
    color:${Colors.blue300};
    ${Fonts.display2};
    /*레이아웃 관련*/
    padding:2.7rem 10rem;
    width: 100%;
    /* 정렬 관련 */
    display: flex;
    align-items: center;
    justify-content: space-between;


    .menuToggleBtn {
    display: none;
    position: absolute;
    top: 2.5rem;
    right:3rem;
    cursor: pointer;
  }
   

  ${ applyMediaQuery("mobile")} {
      padding: 1.5rem 3rem;
      flex-direction: column;
      justify-content: space-between;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`


export {StyledRoot}