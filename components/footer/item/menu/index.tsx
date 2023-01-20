import { StyledRoot } from './style';

export const MainMenu = () => {
  return (
    <StyledRoot>
      <p>소개</p>
      <p>기관 수업</p>
      <p>방문 PT</p>
      <p>문의 하기</p>
    </StyledRoot>
  );
};

export const SubMenu = () => {
  return (
    <StyledRoot>
      <p>회사 소개</p>
      <p>인재 채용</p>
      <p>이용 약관</p>
      <p>개인정보 처리방침</p>
    </StyledRoot>
  );
};

export const Menu = () => {
  return (
    <>
      <MainMenu />
      <SubMenu />
    </>
  );
};
