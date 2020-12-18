import {createStore} from 'redux';
import counter_reducer from './locationReducer';

const store = createStore(counter_reducer);
export {store};
