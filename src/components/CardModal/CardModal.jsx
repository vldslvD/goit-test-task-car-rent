import {
  CardContainer,
  Tag,
  Tags,
  TitleTags,
  Accessories,
  ImageThumb,
  Image,
  Description,
  TitleBox,
  CarTitle,
  CarModel,
  Button,
  RentalCond,
  Ellipsis,
  ElContainer,
} from "./CardModal.styled";

const CardModal = ({ advert }) => {
  return (
    <CardContainer>
      <ImageThumb>
        <Image src={advert.img}></Image>
      </ImageThumb>
      <TitleTags>
        <TitleBox>
          <CarTitle>
            {advert.make} <CarModel>{advert.model}</CarModel>, {advert.year}
          </CarTitle>{" "}
        </TitleBox>
        <Tags>
          <Tag> {advert.address}</Tag>
          <Tag> {advert.rentalCompany}</Tag>
          <Tag> Year: {advert.year}</Tag>
          <Tag> Type: {advert.type}</Tag>
          <Tag> Engine size: {advert.engineSize}</Tag>
          <Tag> Fuel consumption {advert.fuelConsumption}</Tag>
        </Tags>
      </TitleTags>
      <Description>{advert.description}</Description>
      <div>
        <Accessories>Accessories and functionalities:</Accessories>
        <Tags>
          {advert.accessories.map((item) => {
            return <Tag key={item}>{item}</Tag>;
          })}
          {advert.functionalities.map((item) => {
            return <Tag key={item}>{item}</Tag>;
          })}
        </Tags>
      </div>
      <RentalCond>
        <Accessories>Rental Conditions:</Accessories>
        <ElContainer>
          <Ellipsis>{advert.rentalConditions}</Ellipsis>
          <Ellipsis>
            {" "}
            Mileage:{" "}
            <CarModel>
              {new Intl.NumberFormat("en-US").format(advert.mileage)}
            </CarModel>
          </Ellipsis>
          <Ellipsis>
            {" "}
            Price: <CarModel>{advert.rentalPrice}</CarModel>
          </Ellipsis>
        </ElContainer>
      </RentalCond>
      <Button href="tel:+380730000000">Rental car</Button>
    </CardContainer>
  );
};
export default CardModal;
