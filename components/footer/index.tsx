import styled from "@emotion/styled";
import { applyMediaQuery,Colors } from "../../styles";

function MainFooter() {

  return (
    <div><StyledFooter>
      footer
    </StyledFooter><StyledButton>
        button
      </StyledButton></div>
  );
}

export default MainFooter;


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

