import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <>
      <main>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
