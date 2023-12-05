import styled from "@emotion/styled";

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;

  color: #fff;
  background-color: var(--accent-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  padding: 10px 30px;
  margin: 40px auto 0;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--accent-pressed-color);
    color: #fff;
    cursor: pointer;
  }
`;
