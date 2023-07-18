import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics/epics';
import { container } from 'tsyringe'; // Import 'container' from 'tsyringe'

import ApiService from '../services/apiServices';

container.register('ApiService', { useClass: ApiService });

const epicMiddleware = createEpicMiddleware({
  dependencies: { ApiService: container.resolve(ApiService) },
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
