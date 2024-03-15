import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Dashboard,
  Error,
  Home,
  HomeLayout,
  Login,
  ProtectedRoute,
  Register,
  Verify,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: (
          <ProtectedRoute>
            <Dashboard />,
          </ProtectedRoute>
        ),
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
