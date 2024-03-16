import axios from 'axios';
import { redirect, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

export const loader = async () => {
  try {
    const { data } = await axios.get(`/api/v1/users/showMe`);
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardNew = () => {
  const { user } = useLoaderData();
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

export default DashboardNew;

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
