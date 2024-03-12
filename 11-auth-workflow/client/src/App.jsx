import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
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
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
