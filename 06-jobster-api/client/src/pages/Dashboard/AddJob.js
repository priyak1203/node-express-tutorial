import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect } from '../../components';
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from '../../features/job/jobSlice';

const AddJob = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    statusOptions,
    status,
    jobTypeOptions,
    jobType,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, status, jobType }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, []);

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            name="position"
            type="text"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            name="company"
            type="text"
            value={company}
            handleChange={handleJobInput}
          />
          {/* job location */}
          <FormRow
            name="jobLocation"
            type="text"
            value={jobLocation}
            handleChange={handleJobInput}
            labelText="job location"
          />

          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            list={statusOptions}
            handleChange={handleJobInput}
          />

          {/* job type */}
          <FormRowSelect
            name="jobType"
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleJobInput}
            labelText="job type"
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
