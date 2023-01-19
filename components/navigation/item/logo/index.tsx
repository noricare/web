import Link from 'next/link';
import { Logo } from 'constant';
import { StyledRoot } from './style';
export const LogoItem = () => {
  return (
    <StyledRoot>
      <Link href={'/'}>
        <a>
          <Logo width={170} height={40} />
        </a>
      </Link>
    </StyledRoot>
  );
};
