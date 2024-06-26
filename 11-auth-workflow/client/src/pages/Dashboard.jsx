import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Dashboard = () => {
  const { user } = useGlobalContext();
  const { name, role, userId } = user;

  return (
    <Wrapper className="page">
      <h2>Hello there, {name}</h2>
      <p>
        Your ID: <span>{userId}</span>
      </p>
      <p>
        Your Role: <span>{role}</span>
      </p>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.section`
  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    margin-left: 0.2rem;
  }
`;
