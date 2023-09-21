import * as S from "./styles";

const Header = ({ setIsShowSidebar, isShowSidebar }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo>
        <button onClick={() => setIsShowSidebar(!isShowSidebar)}>Menu</button>
        Logo
      </S.HeaderLogo>
      <h2>Avatar</h2>
    </S.HeaderWrapper>
  );
};

export default Header;
