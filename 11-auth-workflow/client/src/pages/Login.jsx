import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLocalState from '../utils/localState';
import axios from 'axios';
import url from '../utils/url';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { loading, setLoading, alert, showAlert, hideAlert } = useLocalState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);

    const { email, password } = values;
    const loginUser = { email, password };

    try {
      const { data } = await axios.post(`${url}/api/v1/auth/login`, loginUser);
      setValues({ email: '', password: '' });
      showAlert({
        type: 'success',
        text: `Welcome, ${data.user.name}. Redirecting to dashboard...`,
      });
      navigate('/dashboard');
    } catch (error) {
      const { msg } = error.response.data;
      showAlert({ text: msg || 'there was an error' });
    }
    setLoading(false);
  };

  return (
    <Wrapper className="page">
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <form
        className={loading ? 'form form-loading' : 'form'}
        onSubmit={handleSubmit}
      >
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />
        <button type="submit" className="btn btn-block" disabled={loading}>
          {loading ? 'loading...' : 'login'}
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
  .alert {
    margin-top: 1rem;
    margin-bottom: -1.5rem;
  }
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
  .btn:disabled {
    cursor: not-allowed;
  }
`;
