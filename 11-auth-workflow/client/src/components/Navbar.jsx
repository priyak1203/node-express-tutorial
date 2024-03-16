import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="home-link">
          <img src={logo} alt="auth-workflow" />
        </Link>
        {user && (
          <div className="nav-links">
            <p>Hello, {user.name}</p>
            <button className="btn btn-small" onClick={() => logoutUser()}>
              logout
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background: var(--white);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .home-link {
    display: flex;
    align-items: flex-end;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
  }
  .nav-links p {
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }
  @media (min-width: 776px) {
    .nav-links {
      flex-direction: row;
      align-items: center;
    }
    .nav-links p {
      margin: 0;
      margin-right: 1.5rem;
    }
  }
`;
