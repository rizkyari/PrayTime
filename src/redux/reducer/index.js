import {combineReducers} from 'redux';

import reducerPrayer from './prayer';

const appReducer = combineReducers({
    prayer: reducerPrayer
});

export default appReducer;