import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalState from '../utils/localState';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
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
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);

    if (!email) {
      showAlert({ text: 'please provide email' });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
      });

      setSuccess(true);
      showAlert({ type: 'success', text: data.msg });
    } catch (error) {
      const { msg } = error.response.data;
      showAlert({ text: msg || 'Something went wrong, please try again' });
      setSuccess(true);
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
          <h4>forgot password</h4>
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? 'please wait...' : 'get reset password link'}
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

export default ForgotPassword;

const Wrapper = styled.main`
  h4,
  p {
    text-align: center;
  }
  P {
    margin: 0;
    margin-top: 1rem;
  }
  .login-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
`;
