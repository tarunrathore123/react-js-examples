import {
  CHANGE_PAGE,
  CLEAR_ALERT,
  CLEAR_FILTERS,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_ERROR,
  CREATE_JOB_SUCCESS,
  DELETE_JOB_BEGIN,
  DISPLAY_ALERT,
  EDIT_JOB_BEGIN,
  EDIT_JOB_ERROR,
  EDIT_JOB_SUCCESS,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  HANDLE_CHANGE,
  LOGOUT_USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  SET_EDIT_JOB,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../actionType";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const addUserToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("location", location);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("location");
};

// axios
const authFetch = axios.create({
  baseURL: "/api/v1",
});

authFetch.interceptors.request.use(
  (config) => {
    config.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response)
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

export const displayAlert = (dispatch) => {
  dispatch({ type: DISPLAY_ALERT });
  clearAlert(dispatch);
};
export const clearAlert = (dispatch) => {
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, 3000);
};

export const setUpUser = async ({
  dispatch,
  currentUser,
  endPoint,
  alertText,
}) => {
  dispatch({ type: SETUP_USER_BEGIN });

  try {
    const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);

    const { user, token, location } = data;
    dispatch({
      type: SETUP_USER_SUCCESS,
      payload: { user, token, location, alertText },
    });

    addUserToLocalStorage({ user, token, location });
  } catch (error) {
    dispatch({
      type: SETUP_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};

export const updateUser = async (currentUser, dispatch) => {
  dispatch({ type: UPDATE_USER_BEGIN });
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);

    const { user, location, token } = data;

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user, location, token },
    });
    addUserToLocalStorage({ user, location, token });
  } catch (error) {
    if (error.response.status !== 401) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  }
  clearAlert(dispatch);
};

export const handleChange = ({ name, value, dispatch }) => {
  dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
};
export const clearValues = (dispatch) => {
  dispatch({ type: CLEAR_VALUES });
};

export const toggleSidebar = () => {
  // console.log(dispatch);
  return { type: TOGGLE_SIDEBAR };
};

export const createJob = async (dispatch, state) => {
  dispatch({ type: CREATE_JOB_BEGIN });
  try {
    const { position, company, jobLocation, jobType, status } = state;
    await authFetch.post("/jobs", {
      position,
      company,
      jobLocation,
      jobType,
      status,
    });
    dispatch({ type: CREATE_JOB_SUCCESS });
    dispatch({ type: CLEAR_VALUES });
  } catch (error) {
    if (error.response.status === 401) return;
    dispatch({
      type: CREATE_JOB_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};

export const setEditJob = (_id, dispatch) => {
  dispatch({ type: SET_EDIT_JOB, payload: { _id } });
};
export const editJob = async (dispatch, state) => {
  dispatch({ type: EDIT_JOB_BEGIN });

  try {
    const { position, company, jobLocation, jobType, status } = state;
    await authFetch.patch(
      `/jobs/${state.editJobId}`,
      {
        company,
        position,
        jobLocation,
        jobType,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    );
    dispatch({ type: EDIT_JOB_SUCCESS });
    dispatch({ type: CLEAR_VALUES });
  } catch (error) {
    if (error.response.status === 401) return;
    dispatch({
      type: EDIT_JOB_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};
export const deleteJob = async (jobId, dispatch, data) => {
  dispatch({ type: DELETE_JOB_BEGIN });
  try {
    await authFetch.delete(`/jobs/${jobId}`);
    getJobs(dispatch, data);
  } catch (error) {
    logoutUser(dispatch);
  }
};

export const logoutUser = (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  removeUserFromLocalStorage();
};

export const getJobs = async (dispatch, data) => {
  const { page, search, searchStatus, searchType, sort, token } = data;

  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  dispatch({ type: GET_JOBS_BEGIN });
  try {
    const { data } = await authFetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { jobs, totalJobs, numOfPages } = data;
    dispatch({
      type: GET_JOBS_SUCCESS,
      payload: {
        jobs,
        totalJobs,
        numOfPages,
      },
    });
  } catch (error) {
    // logoutUser(dispatch);
  }
  clearAlert(dispatch);
};

export const changePage = (dispatch, page) => {
  dispatch({ type: CHANGE_PAGE, payload: { page } });
};
export const clearFilters = (dispatch) => {
  dispatch({ type: CLEAR_FILTERS });
};

export const showStats = async (dispatch, token) => {
  dispatch({ type: SHOW_STATS_BEGIN });
  // console.log(token);
  try {
    const { data } = await axios.get("/api/v1/jobs/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: SHOW_STATS_SUCCESS,
      payload: {
        stats: data.defaultStats,
        // monthlyApplications: data.monthlyApplications,
      },
    });
  } catch (error) {
    // logoutUser();
  }
  clearAlert(dispatch);
};
