import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';
import { useMemo, useState } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');

  const { isLoading, searchType, searchStatus, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            name="search"
            type="text"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by job status */}
          <FormRowSelect
            name="searchStatus"
            value={searchStatus}
            list={['all', ...statusOptions]}
            handleChange={handleSearch}
            labelText="status"
          />
          {/* search by job type */}
          <FormRowSelect
            name="searchType"
            value={searchType}
            list={['all', ...jobTypeOptions]}
            handleChange={handleSearch}
            labelText="type"
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-block btn-danger"
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
