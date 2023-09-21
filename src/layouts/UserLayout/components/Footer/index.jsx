import { useDispatch } from "react-redux";
import { Button } from "antd";

import { setTheme } from "../../../../redux/slicers/common.slice";

import * as S from "./styles";

function Footer(props) {
  const dispatch = useDispatch();
  // setTheme("dark") -> { type: "common/setTheme", payload: "dark" }
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <h2>Footer</h2>
        <Button onClick={() => dispatch(setTheme("dark"))}>Dark</Button>
        <Button onClick={() => dispatch(setTheme("light"))}>Light</Button>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
