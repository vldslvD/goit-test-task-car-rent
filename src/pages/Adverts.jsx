import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rentCarsOperations, rentCarsSelectors } from "../redux/rentCars";
import { favoritesSelectors } from "../redux/favorites";
import CarList from "../components/CarList/CarList";

const Adverts = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rentCarsOperations.fetchRentCars())
  }, [dispatch])

  const rentCars = useSelector(rentCarsSelectors.getRentCars);
  const favorites = useSelector(favoritesSelectors.getFavorites);
  const brandOptions = [];
  rentCars.forEach((advert) => {
    if (!brandOptions.find((i) => i.value === advert.make.toLowerCase()))
      brandOptions.push({
        label: advert.make,
        value: advert.make.toLowerCase(),
      });
  });
  return (
    <CarList
      options={brandOptions}
      rentCars={rentCars}
      favorites={favorites}
    ></CarList>
  );
};

export default Adverts;
