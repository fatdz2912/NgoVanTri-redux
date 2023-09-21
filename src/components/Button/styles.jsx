import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;

  ${(props) =>
    props.type === "primary"
      ? css`
          border: 1px solid #ff4d00;
          background-color: #ff4d00;
          color: white;

          &:hover {
            opacity: 0.7;
          }
        `
      : css`
          border: 1px solid gray;
          background-color: white;
          color: gray;

          &:hover {
            border: 1px solid #ff4d00;
            color: #ff4d00;
          }
        `}
`;
