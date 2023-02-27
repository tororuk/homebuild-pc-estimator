import { memo, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderLayout>
            <Home />{' '}
          </HeaderLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
