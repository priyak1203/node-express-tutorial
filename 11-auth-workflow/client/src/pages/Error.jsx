import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Error = () => {
  return (
    <>
      <Navbar />
      <Wrapper className="page">
        <div>
          <h1>404</h1>
          <h4>page not found</h4>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </Wrapper>
    </>
  );
};
export default Error;

const Wrapper = styled.main`
  text-align: center;
  padding-top: 4rem;
  h1 {
    font-size: 7rem;
  }
`;
