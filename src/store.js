import {createStore} from 'redux';
import {groceryAppReducer} from './reducers';

export default createStore(groceryAppReducer);
