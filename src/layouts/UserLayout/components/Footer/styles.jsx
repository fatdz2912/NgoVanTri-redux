import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bgFooter};
`;

export const FooterContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 12px 16px;
  color: white;
`;
