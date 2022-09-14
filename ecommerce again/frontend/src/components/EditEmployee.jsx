import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../actions/actions';

const EditEmployee = ({ edit, setEdit }) => {
  const { editEmployeeId, employeeList } = useSelector((state) => state);

  const employee = employeeList.find((e) => e.id === editEmployeeId);
  const [id, setId] = useState(employee.id);
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [dob, setDob] = useState(employee.dob);
  const [salary, setSalary] = useState(employee.salary);
  const [department, setDepartment] = useState(employee.department);

  const dispatch = useDispatch();
  const handleEditEmployee = (e) => {
    e.preventDefault();
    const employee = {
      id,
      firstName,
      lastName,
      dob,
      salary,
      department,
    };
    dispatch(updateEmployee(employee));
    setEdit(!edit);
  };
  return (
    <>
      <h1>Edit Employee</h1>
      <form onSubmit={handleEditEmployee}>
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
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Salary</label>
          <input
            type="text"
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
        <button type="submit">Save Employee</button>
      </form>
    </>
  );
};

export default EditEmployee;
