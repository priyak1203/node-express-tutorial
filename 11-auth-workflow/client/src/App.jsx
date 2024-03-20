import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Dashboard,
  Error,
  ForgotPassword,
  Home,
  HomeLayout,
  Login,
  ProtectedRoute,
  Register,
  Verify,
} from './pages';
import DashboardNew, { loader as dashboardLoader } from './pages/DashboardNew';
import { loader } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loader,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <DashboardNew />,
        loader: dashboardLoader,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'user/verify-email',
        element: <Verify />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
