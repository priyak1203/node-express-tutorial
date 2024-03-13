import { useState } from 'react';

const useLocalState = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [alert, setAlert] = useState({
    show: false,
    text: '',
    type: 'danger',
  });

  const showAlert = ({ type = 'danger', text }) => {
    setAlert({ show: true, text, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, text: '', type: 'danger' });
  };

  return {
    loading,
    setLoading,
    success,
    setSuccess,
    alert,
    showAlert,
    hideAlert,
  };
};

export default useLocalState;
