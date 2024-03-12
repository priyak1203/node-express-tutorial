import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleChange = (e) => {};

  return (
    <Wrapper className="page">
      <form className="form">
        <FormRow type="text" name="name" handleChange={handleChange} />
        <FormRow type="email" name="email" handleChange={handleChange} />
        <FormRow type="password" name="password" handleChange={handleChange} />
        <button type="submit" className="btn btn-block">
          register
        </button>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="login-link">
            Log In
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;

const Wrapper = styled.section`
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .login-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
`;
