import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import { useAuth } from 'src/providers/AuthProvider';

export const IndexPage = lazy(() => import('src/pages/app'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));

export default function Router() {
  const { isLoggedIn } = useAuth();
  const requireAuth = (element) => isLoggedIn ? element : <Navigate to="/login" replace />;

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: requireAuth(<IndexPage />), index: true },
        { path: 'user', element: requireAuth(<UserPage />) },
      ],
    },
    {
      path: 'login',
      element: isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />,
    }
  ])

  return routes;
}
