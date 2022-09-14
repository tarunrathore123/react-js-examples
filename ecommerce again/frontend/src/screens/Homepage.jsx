import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CreateEmployee from '../components/CreateEmployee';
import DepartmentDetails from '../components/DepartmentDetails';
import EditEmployee from '../components/EditEmployee';
import EmployeeList from '../components/EmployeeList';

const Homepage = () => {
  const [edit, setEdit] = useState(false);
  const { error, errorMessage } = useSelector((state) => state);

  return (
    <Container>
      <div>
        {error && <p className="red">{errorMessage}</p>}
        {/* we will not show edit component until user clicks on edit */}
        {edit && <EditEmployee edit={edit} setEdit={setEdit} />}
        {/* below component will come by default */}
        {!edit && <EmployeeList edit={edit} setEdit={setEdit} />}
        {!edit && <CreateEmployee edit={edit} setEdit={setEdit} />}
      </div>
      <div>
        <DepartmentDetails />
      </div>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  .red {
    color: red;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    flex-direction: column;
    // margin:20px;
  }
  .search {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  form {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
