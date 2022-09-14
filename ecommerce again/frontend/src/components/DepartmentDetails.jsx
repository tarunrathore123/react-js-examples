import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDepartment, removeDepartment } from '../actions/actions';

const DepartmentDetails = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDetails, setDepartmentDetails] = useState('');

  const { departmentList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addDepartment = (e) => {
    e.preventDefault();
    const department = {
      id: Date.now(),
      departmentName,
      departmentDetails,
    };

    dispatch(createDepartment(department));
    localStorage.setItem(
      'departmentList',
      JSON.stringify([...departmentList, department])
    );
    setDepartmentName('');
    setDepartmentDetails('');
  };
  const deleteDepartment = (id) => {
    dispatch(removeDepartment(id));
    localStorage.setItem(
      'departmentList',
      JSON.stringify(departmentList.filter((e) => e.id !== id))
    );
  };
  return (
    <>
      <h1>Department Details</h1>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departmentList.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.departmentName}</td>
                <td>{d.departmentDetails}</td>
                <td>
                  <button onClick={() => deleteDepartment(d.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input
                type="text"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={departmentDetails}
                onChange={(e) => setDepartmentDetails(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addDepartment}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DepartmentDetails;
