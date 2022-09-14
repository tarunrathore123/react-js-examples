import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, setId } from '../actions/actions';

const EmployeeList = ({ edit, setEdit }) => {
  const [search, setSearch] = useState('');
  const { employeeList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteEmployee(id));
    localStorage.setItem(
      'employeeList',
      JSON.stringify(employeeList.filter((e) => e.id !== id))
    );
  };
  return (
    <>
      <h1>Employee List</h1>
      <div className="search">
        <label>Search</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>Department</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeList
            .filter((e) =>
              [e.firstName, e.lastName]
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((e) => {
              return (
                <tr key={e.firstName}>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.dob}</td>
                  <td>{e.salary}</td>
                  <td>{e.department}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(setId(e.id));
                        setEdit(!edit);
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => deleteHandler(e.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
