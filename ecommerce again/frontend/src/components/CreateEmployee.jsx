import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, removeError, setError } from '../actions/actions';

const CreateEmployee = ({ edit, setEdit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('');

  const { employeeList, error, errorMessage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !dob || !salary || !department) {
      dispatch(setError('All fields are required'));
      return;
    }
    dispatch(removeError());
    const employee = {
      id: Date.now(),
      firstName,
      lastName,
      dob,
      salary,
      department,
    };
    dispatch(createEmployee(employee));
    localStorage.setItem(
      'employeeList',
      JSON.stringify([...employeeList, employee])
    );
    setFirstName('');
    setLastName('');
    setDob('');
    setSalary('');
    setDepartment('');
  };
  return (
    <>
      <h2>Create Employee</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>DOB</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Create Employee</button>
      </form>
    </>
  );
};

export default CreateEmployee;
