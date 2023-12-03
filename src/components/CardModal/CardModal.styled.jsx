import styled from "@emotion/styled";

export const ImageThumb = styled.div`
  width: 461px;
  height: 248px;
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

export const CardContainer = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  margin: 40px;
  color: var(--supporting-text-color);
`;

export const Description = styled.div`
  color: var(--primary-text-color);
  font-size: 14px;
`;

export const Accessories = styled.h4`
  padding-top: 16px;
  padding-bottom: 8px;
  color: var(--primary-text-color);
  font-weight: 500;
`;

export const RentalCond = styled.div`
  margin-bottom: 8px;
`;

export const TitleTags = styled.div`
  width: 277px;
  margin-bottom: 14px;
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
  padding-bottom: 6px;
  padding-right: 6px;
  margin-left: 6px;
  border-right: 1.5px solid rgba(18, 20, 23, 0.1);
`;

export const CarTitle = styled.h3`
  font-weight: 500;
`;

export const CarModel = styled.span`
  color: var(--accent-color);
`;
export const ElContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Ellipsis = styled.div`
margin-bottom:8px;
margin-right:5px;
  font-size: 14px;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
`;
export const Button = styled.a`
display: flex;
justify-content: center;
align-items: center;
  height: 44px;
  width: 168px;
  margin-top: auto;
  margin-bottom: 0;
  color: #fff;
  background-color: var(--accent-color);
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: var(--accent-pressed-color);
  }
`;
