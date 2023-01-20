import styled from '@emotion/styled';
import Image from 'next/image';

interface ISize {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: ISize) => {
  return (
    <StyledLogo>
      <Image src="/logo.png" alt="노리케어 Logo" width={width} height={height} priority={true}/>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  width: fit-content;
`;
