import {Toggle} from "../../Item";
import { useState } from 'react';



export const ProgramWrapper=()=>{
  const [toggleState, setToogleState] = useState(true);

  const handleToggleClick = () => {
    setToogleState(!toggleState);
    console.log('토글 클릭');
  };
return (<Toggle onClick={handleToggleClick} state={toggleState}/>)


}