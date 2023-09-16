import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const Favorites = lazy(() => import('../pages/Favorites'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const Layout = lazy(() => import('../components/Layout/Layout'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
