import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleChange = (e) => {};

  return (
    <Wrapper className="page">
      <form className="form">
        <FormRow type="email" name="email" handleChange={handleChange} />
        <FormRow type="password" name="password" handleChange={handleChange} />
        <button type="submit" className="btn btn-block">
          login
        </button>
        <p>
          Don't have an account?
          <Link to="/register" className="register-link">
            register
          </Link>
        </p>
        <p>
          Forgot your password?
          <Link to="/" className="reset-link">
            reset password
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.section`
  p {
    margin: 0;
    text-align: center;
  }
  .btn {
    margin-bottom: 1.5rem;
  }
  .register-link,
  .reset-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
  .reset-link {
    margin-top: 0.25rem;
  }
`;
