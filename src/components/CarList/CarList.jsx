import { useState } from "react";

import CarCard from "../CarCard/CarCard";
import Dropdown from "../Dropdown/Dropdown";

import { CarListContainer, CarSection, NoData } from "./CarList.styled";

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
        {getFiltered().length === 0 && (
          <NoData>There are no data</NoData>
        )}
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
      </CarListContainer>
    </CarSection>
  );
};
export default CarList;
