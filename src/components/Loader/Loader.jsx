import { Triangle } from "react-loader-spinner";
import { CustomTriangle, LoaderContainer } from "./Loader.styled";
export const Loader = () => {
  return (
    <LoaderContainer>
      <CustomTriangle
        height="80"
        width="80"
        color="#3470ff"
        ariaLabel="triangle-loading"
        wrapperStyle={{ margin: "0 auto" }}
        wrapperClassName=""
        visible={true}
      />
    </LoaderContainer>
  );
};
