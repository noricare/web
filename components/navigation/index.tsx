import React,{useState} from "react";
import { StyledRoot } from './style';
import {LogoItem, NavMenu, ToggleBtn} from "./item";

const MainNavigation =()=>{

  const [isToggleOpen, setIsToggleOpen]= useState(false);
  const handleToggleOpen = ()=>{
   setIsToggleOpen(!isToggleOpen); 
   console.log("토글 클릭");
  }

  return (
    <StyledRoot>
      <LogoItem/>
      <ToggleBtn  onClick={handleToggleOpen}/>
      <NavMenu isToggleOpen={isToggleOpen} />
    </StyledRoot>
  )
};


export default MainNavigation;