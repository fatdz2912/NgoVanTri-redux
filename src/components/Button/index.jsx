import * as S from "./styles";

const Button = ({ type, children }) => {
  // abc xyz
  return <S.CustomButton type={type}>{children}</S.CustomButton>;
};

export default Button;
