import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 100%;
  left: ${(props) => (props.isShow ? "0" : "-250px")};
  background-color: #ffc9b2;
  overflow: hidden;
  transition: all 0.3s;
`;

export const SidebarItem = styled.div`
  width: 100%;
  padding: 8px 12px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #fea57f;
  }

  ${(props) =>
    props.active &&
    css`
      border-right: 5px solid #d44000;
      background-color: #fc966b;
    `}
`;
