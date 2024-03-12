import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Login } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <h1>Auth Workflow</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
