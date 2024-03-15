import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import useLocalState from '../utils/localState';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const {
    loading,
    setLoading,
    success,
    setSuccess,
    alert,
    showAlert,
    hideAlert,
  } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);

    const { name, email, password } = values;
    const registerNewUser = { email, name, password };

    try {
      const { data } = await axios.post(
        `/api/v1/auth/register`,
        registerNewUser
      );
      setSuccess(true);
      setValues({ name: '', email: '', password: '' });
      showAlert({ type: 'success', text: data.msg });
    } catch (error) {
      const { msg } = error.response.data;
      showAlert({ text: msg || 'there was an error' });
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <Wrapper className="page">
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      {!success && (
        <form
          className={loading ? 'form form-loading' : 'form'}
          onSubmit={handleSubmit}
        >
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? 'loading...' : 'register'}
          </button>
          <p>
            Already have an account?
            <Link to="/login" className="login-link">
              Log In
            </Link>
          </p>
        </form>
      )}
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.section`
  .alert {
    margin-top: 1rem;
    margin-bottom: -1.5rem;
  }
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
  .btn:disabled {
    cursor: not-allowed;
  }
`;
