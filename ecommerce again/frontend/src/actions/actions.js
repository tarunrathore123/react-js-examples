export const createEmployee = (employee) => {
  return { type: 'CREATE_EMPLOYEE', payload: employee };
};

export const updateEmployee = (employee) => {
  return { type: 'UPDATE_EMPLOYEE', payload: employee };
};

export const deleteEmployee = (id) => {
  return { type: 'DELETE_EMPLOYEE', payload: id };
};

export const createDepartment = (department) => {
  return { type: 'CREATE_DEPARTMENT', payload: department };
};

export const removeDepartment = (id) => {
  return { type: 'DELETE_DEPARTMENT', payload: id };
};

export const setId = (id) => {
  return { type: 'UPDATE_ID', payload: id };
};

export const setError = (message) => {
  return { type: 'SET_ERROR', payload: message };
};

export const removeError = () => {
  return { type: 'REMOVE_ERROR' };
};
