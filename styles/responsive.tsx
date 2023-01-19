import { useMediaQuery } from "react-responsive";
import { deviceQuery } from "../constant/deviceInfo";

export function useMedia() {
  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });



  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  return { isMobile, isDesktop };
}

function Responsive(props:any) {
  const { children, mobile,  desktop } = props;
  const { isMobile, isDesktop } = useMedia();

  let shouldRender = false;

  if (mobile) shouldRender = shouldRender || isMobile;
  if (desktop) shouldRender = shouldRender || isDesktop;

  return <>{shouldRender && children}</>;
}

export default Responsive;