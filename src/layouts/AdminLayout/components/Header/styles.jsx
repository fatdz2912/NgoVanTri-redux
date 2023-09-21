import styled, { css } from "styled-components";

export const HeaderLogo = styled.h2`
  font-size: 28px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: white;
  background-color: ${(props) => props.theme.bgHeader};
`;
