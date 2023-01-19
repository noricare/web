interface IToggleBtn{
  onClick:() => void
}


export const ToggleBtn=({onClick}:IToggleBtn)=>{
  return (
    <button className="menuToggleBtn"  onClick={onClick}>
      토글 버튼
    </button>
  )
}

