import { useState } from "react";

import CarCard from "../CarCard/CarCard";
import Dropdown from "../Dropdown/Dropdown";

import { CarListContainer, CarSection } from "./CarList.styled";
import LoadMore from "../LoadMoreBtn/LoadMoreBtn";

const CarList = ({ options, rentCars, favorites }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const onChange = (brand) => {
    setSelectedBrand(brand);
  };

  const getFiltered = () => {
    if (selectedBrand !== null) {
      return rentCars.filter(
        ({ make }) => make.toLowerCase() === selectedBrand.value
      );
    }
    return rentCars;
  };
  return (
    <CarSection>
      <Dropdown
        options={options}
        selected={selectedBrand}
        onChange={onChange}
      ></Dropdown>
      <CarListContainer>
        {getFiltered().map((advert) => {
          if (favorites.find((i) => i.id === advert.id)) {
            return (
              <CarCard
                key={advert.id}
                advert={advert}
                isFavorite="true"
              ></CarCard>
            );
          }
          return <CarCard key={advert.id} advert={advert}></CarCard>;
        })}
        <LoadMore></LoadMore>
      </CarListContainer>
    </CarSection>
  );
};
export default CarList;
