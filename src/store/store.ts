import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers";
import { rootEpic } from "./epics/epics";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer(),
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
