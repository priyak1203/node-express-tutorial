import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChartsContainer, Loading, StatsContainer } from '../../components';
import { showStats } from '../../features/allJobs/allJobSlice';

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
