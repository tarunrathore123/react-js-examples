export const departmentReducer = (state = {}, action) => {
  switch (action.type) {
    // case EMPLOYEE_CREATE_REQUEST:
    //   return { loading: true };
    // case EMPLOYEE_CREATE_SUCCESS:
    //   return { loading: false, userInfo: action.payload };
    // case EMPLOYEE_CREATE_FAIL:
    //   return { loading: false, error: action.payload };
    default:
      return state;
  }
};
