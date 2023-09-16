// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../pages/CatalogPage';
import { Favorites } from '../pages/Favorites';
import { HomePage } from '../pages/HomePage';
import { Layout } from '../components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
