import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper className="page">
      <form className="form">
        <h4>reset password</h4>
        <FormRow
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          new password
        </button>
      </form>
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
