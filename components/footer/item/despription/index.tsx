import { StyledRoot } from './style';
import { FooterInfo } from 'constant/footerInfo';

export const Description = () => {
  return (
    <StyledRoot>
      <div>
        {FooterInfo.map((item, idx) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </StyledRoot>
  );
};
