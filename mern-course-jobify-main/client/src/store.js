import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducers/reducer";

// const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
