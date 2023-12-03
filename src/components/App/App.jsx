import { lazy } from "react";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";

const AdvertsPage = lazy(() => import("../../pages/Adverts"));
const FavoritesPage = lazy(() => import("../../pages/Favorites"));
const HomePage = lazy(() => import("../../pages/Home"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/catalog" element={<AdvertsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
