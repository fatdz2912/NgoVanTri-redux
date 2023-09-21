import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 16px;
  margin-left: ${(props) => (props.isShowSidebar ? "250px" : "0px")};
  transition: all 0.3s;
`;
