import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import url from '../utils/url';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = useQuery();

  const verifyToken = async () => {
    setLoading(true);

    try {
      const { data } = await axios.post(`${url}/api/v1/auth/verify-email`, {
        verificationToken: query.get('token'),
        email: query.get('email'),
      });

      setError(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    verifyToken();
  }, []);

  if (loading) {
    return (
      <Wrapper className="page">
        <h2>Loading....</h2>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper className="page">
        <h4>There was an error, please double check your verification link</h4>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="page">
      <h2>Account Confirmed</h2>
      <Link to="/login" className="btn">
        Please login
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Verify;
