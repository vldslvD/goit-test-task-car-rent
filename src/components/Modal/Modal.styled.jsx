import styled from "@emotion/styled";
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
position:relative;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background-color: #fff;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
display: flex;
justify-content: center;
align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--supporting-text-color);
  }
  `;