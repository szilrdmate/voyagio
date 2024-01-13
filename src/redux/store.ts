import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itineraryReducer from './reducers'; // Import your reducer

const rootReducer = combineReducers({
  itineraryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
