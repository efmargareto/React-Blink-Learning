import { legacy_createStore as createStore } from 'redux';
import { tecnicalTestReducer } from './reducers/tecnicalTestReducer'

export const store = createStore(tecnicalTestReducer)