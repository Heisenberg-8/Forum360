import { createStore, combineReducers } from 'redux';
import agendaReducer from './agendaReducer';

const rootReducer = combineReducers({
  agenda: agendaReducer,
});

const store = createStore(rootReducer);
export default store;
