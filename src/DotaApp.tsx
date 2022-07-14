import { DashboardRoutes } from './router';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './ui/Loader/Loader';

export const DotaApp = () => {
  return (
    <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <DashboardRoutes />
        </BrowserRouter>
    </Suspense>
  )
}