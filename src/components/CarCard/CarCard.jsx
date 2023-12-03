import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {addToFavorites, removeFromFavorites} from "../../redux/favorites/slice"
import { Image, ImageThumb, TitleBox, CardContainer, Description, Tags, Tag, CarTitle, CarModel, Button, ButtonHeart } from "./CarCard.styled";
import {ReactComponent as Icon} from "../../assets/heart.svg"
import { Modal } from "../Modal/Modal";

const Card = ({ advert, isFavorite }) => {

  const [isSelected, setIsSelected] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
  if (isFavorite) setIsSelected(!isSelected);
  }, [])
  
  const onClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) dispatch(addToFavorites(advert));
    else dispatch(removeFromFavorites(advert));
  };

  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };
  return (
     <>
    <CardContainer>
      <ButtonHeart onClick={onClick} selected={isSelected}>
        <Icon />
      </ButtonHeart>
      <ImageThumb>
        <Image src={advert.img}></Image>
      </ImageThumb>
      <Description>
        <TitleBox>
          <CarTitle>
            {advert.make} <CarModel>{advert.model}</CarModel>, {advert.year}
          </CarTitle>{" "}
          <span>{advert.rentalPrice}</span>
        </TitleBox>
        <Tags>
          <Tag> {advert.address}</Tag>
          <Tag> {advert.rentalCompany}</Tag>
          <Tag> {advert.type}</Tag>
          <Tag> {advert.engineSize}</Tag>
        </Tags>
      </Description>
      <Button onClick={toggleModal}>Learn more</Button>
    </CardContainer>
       {isModalShown && (
        <Modal advert={advert} onClose={toggleModal} />
      )}
 </>
  );
};
export default Card;
