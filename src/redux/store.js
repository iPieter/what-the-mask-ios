import {createStore} from 'redux';
import location_reducer from './locationReducer';

const store = createStore(location_reducer);
export {store};
