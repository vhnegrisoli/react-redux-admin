import { combineReducers } from 'redux';
import tableReducer from './views/Base/Tables/reducers';

const rootReducer = combineReducers({
  tableReducer,
});

export default rootReducer;
