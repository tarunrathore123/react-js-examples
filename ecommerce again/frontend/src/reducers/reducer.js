const employeeList = localStorage.getItem('employeeList');
const departmentList = localStorage.getItem('departmentList');

const initial_state = {
  error: false,
  errorMessage: '',
  editEmployeeId: 0,
  employeeList: JSON.parse(employeeList) || [],
  departmentList: JSON.parse(departmentList) || [],
};

function reducer(state = initial_state, action) {
  switch (action.type) {
    case 'CREATE_EMPLOYEE':
      return {
        ...state,
        employeeList: [...state.employeeList, action.payload],
      };
    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        employeeList: [
          ...state.employeeList.filter((e) => e.id !== action.payload.id),
          action.payload,
        ],
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employeeList: [
          ...state.employeeList.filter((e) => e.id !== action.payload),
        ],
      };
    case 'CREATE_DEPARTMENT':
      return {
        ...state,
        departmentList: [...state.departmentList, action.payload],
      };
    case 'DELETE_DEPARTMENT':
      return {
        ...state,
        departmentList: [
          ...state.departmentList.filter((e) => e.id !== action.payload),
        ],
      };
    case 'UPDATE_ID':
      return {
        ...state,
        editEmployeeId: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
}

export default reducer;
