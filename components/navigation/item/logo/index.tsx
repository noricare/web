import Link from 'next/link';
import { Logo } from 'constant/Logo';
import { StyledRoot } from './style';
export const LogoItem = () => {
  return (
    <StyledRoot>
      <Link href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
    </StyledRoot>
  );
};
