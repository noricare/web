import {Toggle, VOD} from "../../Item";
import { CenterWrapper } from "./center";
import { useState } from 'react';
import styled from "@emotion/styled";



export const ProgramWrapper=()=>{
  const [toggleState, setToogleState] = useState(true);

  const handleToggleClick = () => {
    setToogleState(!toggleState);
    console.log('토글 클릭');
  };
return (
<StyledRoot>

<Toggle onClick={handleToggleClick} state={toggleState}/>
{toggleState && <CenterWrapper/>}
{!toggleState && <VOD/>}

</StyledRoot>



)


}


const StyledRoot=styled.section`
display: flex;
flex-direction: column;
align-items: center;

`;