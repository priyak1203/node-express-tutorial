import styled from 'styled-components';
import main from '../assets/main.svg';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';

export const loader = async () => {
  try {
    const { data } = await axios.get(`/api/v1/users/showMe`);
    if (data.user) return redirect('/dashboard');
  } catch (error) {
    return null;
  }
};

const Home = () => {
  return (
    <Wrapper className="page">
      <div>
        <h2>
          <span>Auth</span>
          Workflow
        </h2>
        <p>
          La croix flexitarian tacos master cleanse, palo santo air plant
          vibecession DIY bitters poke farm-to-table jawn bespoke locavore.
          Selfies 3 wolf moon fanny pack, kale chips bitters salvia direct trade
          health goth keytar photo booth.
        </p>
        <p>
          Before they sold out gorpcore taiyaki cold-pressed, health goth fixie
          edison bulb vexillologist gentrify. Umami flannel sustainable, ascot
          cray blue bottle cupping put a bird on it banjo artisan ennui
          chartreuse shoreditch.
        </p>
        <Link to="/login" className="btn">
          login
        </Link>
        <Link to="/register" className="btn">
          register
        </Link>
      </div>
      <img src={main} alt="auth-workflow-main" className="img main-img" />
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;
