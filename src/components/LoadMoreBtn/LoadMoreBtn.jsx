import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {LoaderLoadMore} from "../LoaderLoadMore/LoaderLoadMore"
import { rentCarsOperations, rentCarsSelectors } from "../../redux/rentCars";
import {LoadMoreBtn} from "../LoadMoreBtn/LoadMoreBtn.styled"

const LoadMore = () => {
  const [page, setPage] = useState(1);
  const [endOfList, setEndOfList] = useState(false);

  const isLoading = useSelector(rentCarsSelectors.getIsLoading);

  const dispatch = useDispatch();
  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    dispatch(rentCarsOperations.fetchRentCars(page)).then(({ payload }) => {
      if (payload.length < 12) {
        setEndOfList(true);
      }
    });
  }, [page, dispatch]);

  return (
    <>
      {isLoading && (
       <LoaderLoadMore></LoaderLoadMore>
      )}
      {!endOfList && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default LoadMore;