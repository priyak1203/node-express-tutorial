import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from '.';
import { useSelector } from 'react-redux';

const SearchContainer = () => {
  const { isLoading, search, searchType, searchStatus, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);

  const handleSearch = (e) => {
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            name="search"
            type="text"
            value={search}
            handleChange={handleSearch}
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
