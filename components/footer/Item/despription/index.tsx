import { StyledRoot } from './style';
import { FooterInfo } from 'constant/footerInfo';

export const Description = () => {
  return (
    <StyledRoot>
      <div>
        {FooterInfo.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </StyledRoot>
  );
};
