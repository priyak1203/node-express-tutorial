import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { useState } from 'react';
import useLocalState from '../utils/localState';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const {
    loading,
    setLoading,
    success,
    setSuccess,
    alert,
    showAlert,
    hideAlert,
  } = useLocalState();

  const query = useQuery();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    hideAlert();

    if (!password) {
      showAlert({ text: 'please enter password' });
      setLoading(false);
      return;
    }

    try {
      const {data} = await axios.post(`/api/v1/auth/reset-password`, {
        token: query.get('token'),
        email: query.get('email'),
        password,
      });
      setSuccess(true);
      showAlert({
        type: 'success',
        text: 'Success, redirecting to login page shortly',
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      const { msg } = error.response.data;
      showAlert({ text: msg || 'Something went wrong, please try again' });
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
          <h4>reset password</h4>
          <FormRow
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? 'please wait...' : 'new password'}
          </button>
        </form>
      )}
    </Wrapper>
  );
};

export default ResetPassword;

const Wrapper = styled.section`
  p,
  h4 {
    text-align: center;
  }
`;
