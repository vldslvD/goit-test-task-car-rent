import styled from "@emotion/styled";
import Icon from "../Icon/Icon.jsx";

export const ImageThumb = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--primary-text-color);
  font-weight: 500;
  line-height: 150%;
`;

export const CardContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 440px;
  margin: 25px 14px;
`;
export const Description = styled.div`
  margin-bottom: 24px;
`;

export const Tags = styled.div`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 150%;
  & :last-child {
    border-right: none;
  }

  & :first-of-type {
    margin-left: 0;
  }
`;

export const Tag = styled.span`
  margin-bottom: 4px;
  margin-left: 6px;
  padding-right: 6px;
  border-right: 1.5px solid rgba(18, 20, 23, 0.1);
`;

export const CarTitle = styled.h3`
  font-weight: 500;
`;

export const CarModel = styled.span`
  color: var(--accent-color);
`;

export const Button = styled.button`
  margin-top: auto;
  margin-bottom: 0;
  background-color: var(--accent-color);
  height: 44px;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--accent-pressed-color);
  }
`;

export const ButtonHeart = styled(Icon)`
  color: ${(props) => (props.selected ? "rgb(255, 162, 0)" : "transparent")};
  stroke: ${(props) => (props.selected ? "rgb(255, 162, 0)" : "white")};
  cursor: pointer;
  fill: currentColor;
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
  height: 18px;
  width: 18px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: var(--accent-heart-color);
    color: var(--accent-heart-color);
  }
`;
