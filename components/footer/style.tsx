import { applyMediaQuery,Colors, Fonts } from "styles";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`

  ${applyMediaQuery("mobile")} {
    color: ${Colors.blue100};
  }
`

const StyledButton = styled.button`
  
  ${applyMediaQuery("mobile")} {
    color: ${Colors.blue100};
  }
`

export {StyledFooter, StyledButton}